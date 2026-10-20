import { leaderboards } from './leaderboards.js';

document.querySelector('blossom-carousel').innerHTML = leaderboards
  .map(({url}) => `
<div class="leaderboard" data-blossom-slide>
  <iframe src="${url}" frameborder="0"></iframe>
</div>
  `)
  .join('\n');
