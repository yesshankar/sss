let vid = document.getElementById('vid');
let timeMapping = {
  a: 18,
  b: 29,
  c: 41,
  d: 53,
  e: 65,
  f: 76,
  g: 88,
  h: 99,
  i: 123,
  j: 135,
  k: 146,
  l: 158,
  m: 170,
  n: 182,
  o: 193,
  p: 205,
  q: 228,
  r: 240,
  s: 252,
  t: 264,
  u: 275,
  v: 287,
  w: 298,
  x: 310,
  y: 322,
  z: 334
};

document.querySelector('body').onkeypress = function(event) {
  let alphanumeric = new RegExp('[a-zA-Z]');
  let char = String.fromCharCode(event.which);
  char = char.toLowerCase();

  if (alphanumeric.test(char)) {
    vid.currentTime = timeMapping[char];
  } else {
    vid.currentTime = 6;
  }

  if (vid.paused) {
    vid.play().catch(err => {
      console.log('Error occured in vid.play()');
    });
  }
};
