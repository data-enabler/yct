export const leaderboards = [
  'pkmrhwxpsydhr', // RC
  'bhzbvbyrfymtr', // 3CP
  'lflmlyjxttpnr', // FT
  'kvhjvgfnqcknr', // PP
].map(id => {
  const url = `https://leaderboarded.com/board/${id}/?public=true`;
  return ({
    id,
    url,
  });
});
