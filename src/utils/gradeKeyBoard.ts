const gradeKeyBoard = (
  answer: string,
  word: string,
  keyboard: { [key: string]: number },
) => {
  word.split('').forEach((spelling, index) => {
    if (answer.substring(index, index + 1) === spelling) {
      keyboard[spelling] = 3;
    } else if (answer.indexOf(spelling) > -1) {
      if (keyboard[spelling] !== 3) {
        keyboard[spelling] = 2;
      }
    } else {
      keyboard[spelling] = 1;
    }
  });

  return keyboard;
};

export default gradeKeyBoard;
