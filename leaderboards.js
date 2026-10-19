export const leaderboards = [
  'pkmrhwxpsydhr', // RC
  'bhzbvbyrfymtr', // 3CP
  'lflmlyjxttpnr', // FT
  'kvhjvgfnqcknr', // PP
].map(id => {
  const url = `https://leaderboarded.com/board/${id}/?public=true`;
  const qrcode = new QRCode({
    content: url,
    container: 'svg-viewbox',
    background: '#EBE6D9',
    color: '#202A44',
  });
  const svg = qrcode.svg();
  return ({
    id,
    url,
    svg,
  });
});
