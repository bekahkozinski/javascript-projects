function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
// console.log(makeLine(5));

//   function makeSquare(size) {
//     let square = ''
//     for (let i = 0; i < size; i++) {
//         square += (makeLine(size) + '\n');
//     }
//     return square;
//   }
//   console.log(makeSquare(5));

//   function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (makeLine(width) + '\n');
//     }
//     return rectangle.slice(0, -1);
//   }
//   console.log(makeRectangle(5, 3));

  function makeDownwardStairs(height) {
    let downwardStairs = '';
    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i + 1) + '\n')
    }
    return downwardStairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));

  function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += (' ' * 2);
    }
    return (spaceLine.split(numSpaces /2) + makeLine(numChars));
  }
  console.log(makeSpaceLine(3,5));