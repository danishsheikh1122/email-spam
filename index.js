
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
// const hardcodedDate = '2025-05-10T12:01:59Z'; // Fixed time of day
// console.log(hardcodedDate)
// const commitMessage = 'leetboost all patches ';

// // Call the function with today's date hardcoded
// gitAutoCommit(hardcodedDate, commitMessage);
// // 15 22 29


import { execSync } from 'child_process';

function gitAutoCommit(date, message) {
  try {
    // Format the date in ISO format first
    const formattedDate = new Date(date).toISOString();
    
    // Create a dummy change to ensure there's something to commit
    execSync(`echo "// Auto commit at ${formattedDate}" >> dummy.txt`);
    
    // Stage all changes
    execSync(`git -c user.name="Your Name" -c user.email="your.email@example.com" add .`);
    
    // Commit with the custom date
    execSync(`GIT_AUTHOR_DATE="${formattedDate}" GIT_COMMITTER_DATE="${formattedDate}" git commit --date="${formattedDate}" -m "${message}"`);

    // Push changes
    execSync(`git push origin main`);
    
    console.log(`✅ Changes committed on ${formattedDate} with message: "${message}" and pushed successfully.`);
    return true;
  } catch (error) {
    console.error('❌ Error occurred:', error.message);
    console.error('Stdout:', error.stdout ? error.stdout.toString() : '');
    console.error('Stderr:', error.stderr ? error.stderr.toString() : '');
    return false;
  }
}

// Starting from 2025-05-09 at midnight
let currentDate = new Date('2025-05-13T00:00:00Z');
const commitMessage = 'leetboost all patches';
let commitCount = 0;

console.log('🚀 Starting auto-commit every 5 seconds...');
console.log(`📅 Starting date: ${currentDate.toISOString()}`);
console.log('Press Ctrl+C to stop');

// Commit every 5 seconds with incrementing time
const interval = setInterval(() => {
  commitCount++;
  console.log(`\n📝 Commit #${commitCount} at ${currentDate.toISOString()}`);
  
  const success = gitAutoCommit(currentDate, `${commitMessage} #${commitCount}`);
  
  if (!success) {
    console.log('❌ Commit failed, stopping...');
    clearInterval(interval);
    return;
  }
  
  // Increment time by 5 seconds
  currentDate.setSeconds(currentDate.getSeconds() + 5);
  
  // Optional: Stop after 50 commits (remove this line if you want it to run indefinitely)
  if (commitCount >= 1000) {
    console.log('\n🛑 Stopping after 50 commits');
    clearInterval(interval);
  }
}, 4000); // 5000ms = 5 seconds

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping auto-commit...');
  clearInterval(interval);
  process.exit(0);
});