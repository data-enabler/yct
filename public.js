import { leaderboards } from './leaderboards.js';

document.querySelector('main').innerHTML = leaderboards
  .map(({url}) => `
<div class="leaderboard">
  <iframe src="${url}" frameborder="0"></iframe>
</div>
  `)
  .join('\n');
