
import { execSync } from 'child_process';

function gitAutoCommit(date, message) {
  try {
    // Stage all changes
    execSync(`git -c user.name="Your Name" -c user.email="your.email@example.com" add .`);
    
    // Format the date in ISO format
    const formattedDate = new Date(date).toISOString();
    
    // Commit with the custom date
    execSync(`GIT_AUTHOR_DATE="${formattedDate}" GIT_COMMITTER_DATE="${formattedDate}" git commit --date="${formattedDate}" -m "${message}"`);

    // Push changes
    execSync(`git push origin main`);
    
    console.log(`Changes committed on ${formattedDate} with message: "${message}" and pushed successfully.`);
  } catch (error) {
    console.error('Error occurred:', error);
    console.error('Stdout:', error.stdout ? error.stdout.toString() : '');
    console.error('Stderr:', error.stderr ? error.stderr.toString() : '');
  }
}

// Get today's date in the ISO format
const today = new Date();
const hardcodedDate = '2025-05-10T12:01:08Z'; // Fixed time of day
console.log(hardcodedDate)
const commitMessage = 'leetboost all patches ';

// Call the function with today's date hardcoded
gitAutoCommit(hardcodedDate, commitMessage);
// 15 22 29