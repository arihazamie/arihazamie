import { execSync } from 'child_process';

try {
  console.log('Adding all changes...');
  execSync('git add .', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });

  console.log('\nCommitting changes...');
  execSync('git commit -m "perf: optimize portfolio loading performance\n\n- Add viewport margin optimization for smooth scroll animations\n- Enable lazy loading for images and add Next.js image optimization config\n- Reduce animation duration for more responsive transitions\n- Improve metadata and viewport settings for better SEO\n- Configure AVIF and WebP image formats with proper caching strategy"', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });

  console.log('\nPushing to main branch...');
  execSync('git push origin v0/zyee-8e01ea06:main', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });

  console.log('\n✓ Successfully pushed to main branch!');
} catch (error) {
  console.error('Error during push:', error.message);
  process.exit(1);
}
