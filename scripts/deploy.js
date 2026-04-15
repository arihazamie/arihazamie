import { execSync } from 'child_process';
import { resolve } from 'path';

const projectRoot = resolve(new URL('.', import.meta.url), '..');

try {
  console.log('[v0] Starting deployment to GitHub main...');
  
  // Change to project directory
  process.chdir(projectRoot);
  
  // Add all changes
  console.log('[v0] Staging changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit with message
  console.log('[v0] Creating commit...');
  execSync('git commit -m "chore: optimize portfolio performance and fix next config"', { stdio: 'inherit' });
  
  // Push to main
  console.log('[v0] Pushing to main branch...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('[v0] Successfully pushed to GitHub main!');
  process.exit(0);
} catch (error) {
  console.error('[v0] Error during deployment:', error.message);
  process.exit(1);
}
