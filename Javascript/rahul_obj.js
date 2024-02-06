let songs = new Array();

songs.push({
  song_name: 'Mal Habibi',
  singer: 'Saad Lamjarred',
  language: 'Arabic',
});
songs.push({
  song_name: 'Renegade',
  singer: 'Aaryan Shah',
  language: 'English',
});
songs.push({
  song_name: 'Motley Crew',
  singer: 'Post Malone',
  language: 'English',
});
songs.push({
  song_name: 'Congratulations',
  singer: 'Post Malone',
  language: 'English',
});
songs.push({
  song_name: 'Lemon Tree',
  singer: 'Post Malone',
  language: 'English',
});

console.log(songs);
console.log('//////////////////////////////////////');
for (let value in songs) {
  console.log(
    songs[value].song_name +
      ' - ' +
      songs[value].singer +
      `(${songs[value].language})`
  );
}

console.log(songs[2].song_name);

const array3D = [1, 2, [1, 2], [1, [2, 3]]];

const obj = {
  veg: {
    w: 'wheat',
    c: 'cheese',
  },
  non_veg: {
    ck: 'chicken kabaab',
    ec: 'egg curry',
  },
};

console.log('////////////////////////');
console.log(obj.veg.c);
