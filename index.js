
// import { execSync } from 'child_process';

// function gitAutoCommit(date, message) {
//   try {
//     // Stage all changes
//     execSync(`git -c user.name="Your Name" -c user.email="your.email@example.com" add .`);
    
//     // Format the date in ISO format
//     const formattedDate = new Date(date).toISOString();
    
//     // Commit with the custom date
//     execSync(`GIT_AUTHOR_DATE="${formattedDate}" GIT_COMMITTER_DATE="${formattedDate}" git commit --date="${formattedDate}" -m "${message}"`);

//     // Push changes
//     execSync(`git push origin main`);
    
//     console.log(`Changes committed on ${formattedDate} with message: "${message}" and pushed successfully.`);
//   } catch (error) {
//     console.error('Error occurred:', error);
//     console.error('Stdout:', error.stdout ? error.stdout.toString() : '');
//     console.error('Stderr:', error.stderr ? error.stderr.toString() : '');
//   }
// }

// // Get today's date in the ISO format
// const today = new Date();
// const hardcodedDate = '2025-05-10T14:05:24Z'; // Fixed time of day
// console.log(hardcodedDate)
// const commitMessage = 'leetboost all patches ';

// // Call the function with today's date hardcoded
// gitAutoCommit(hardcodedDate, commitMessage);
// // 15 22 29

import { execSync } from 'child_process';

function gitAutoCommit(date, message) {
  try {
    // Stage all changes
    execSync(`git add .`);
    
    // Check if there are changes to commit
    try {
      execSync('git diff --cached --exit-code', { stdio: 'ignore' });
      console.log('No changes to commit, creating a dummy change...');
      // Create a small change to commit
      execSync(`echo "// Auto commit at ${date}" >> dummy.txt`);
      execSync(`git add .`);
    } catch {
      // There are changes to commit, continue
    }
    
    // Format the date in ISO format
    const formattedDate = new Date(date).toISOString();
    
    // Commit with the custom date
    execSync(`GIT_AUTHOR_DATE="${formattedDate}" GIT_COMMITTER_DATE="${formattedDate}" git -c user.name="Danish Sheikh" -c user.email="danish@example.com" commit --date="${formattedDate}" -m "${message}"`);

    // Push changes
    execSync(`git push origin main`);
    
    console.log(`✅ Committed at ${formattedDate} with message: "${message}"`);
  } catch (error) {
    console.error('❌ Error occurred:', error.message);
  }
}

// Starting date
let currentDate = new Date('2025-05-10T14:05:24Z');
const commitMessage = 'leetboost all patches';
let commitCount = 0;

console.log('🚀 Starting auto-commit every second...');
console.log('Press Ctrl+C to stop');

// Commit every second with incrementing time
const interval = setInterval(() => {
  commitCount++;
  console.log(`\n📝 Commit #${commitCount}`);
  
  gitAutoCommit(currentDate, `${commitMessage} #${commitCount}`);
  
  // Increment time by 1 second
  currentDate.setSeconds(currentDate.getSeconds() + 1);
  
  // Optional: Stop after a certain number of commits (remove this if you want it to run indefinitely)
  if (commitCount >= 10) {
    console.log('\n🛑 Stopping after 10 commits');
    clearInterval(interval);
  }
}, 1000); // 1000ms = 1 second

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping auto-commit...');
  clearInterval(interval);
  process.exit(0);
});