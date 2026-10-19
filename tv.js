import { leaderboards } from './leaderboards.js';

const qrCode = new QRCode({
  content: 'https://data-enabler.github.io/yct/index.html',
  container: 'svg-viewbox',
  background: '#EBE6D9',
  color: '#202A44',
}).svg();

document.querySelector('.svg-container').innerHTML = qrCode;

document.querySelector('main').innerHTML = leaderboards
  .map(({url, svg}) => `
<div class="leaderboard">
  <iframe src="${url}&styled" frameborder="0"></iframe>
</div>
  `)
  .join('\n');

const numBoards = leaderboards.length;
const animDuration = 20;
const totalDuration = animDuration * numBoards;
const fadeDuration = 1.5;
const style = `
.leaderboard {
  animation-name: fade;
  animation-duration: ${totalDuration}s;
  animation-fill-mode: both;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

${leaderboards.map((_, i) => `
.leaderboard:nth-child(${i + 1}) {
  animation-delay: ${i * animDuration}s;
}
`).join('\n')}

@keyframes fade {
  0% {
    opacity: 0;
  }

  ${100 * fadeDuration/totalDuration}% {
    opacity: 1;
  }

  ${100 * (animDuration - fadeDuration)/totalDuration}% {
    opacity: 1;
  }

  ${100 * animDuration/totalDuration}% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}
`;
const styleElem = document.createElement('style');
styleElem.textContent = style;
document.head.append(styleElem);
