import axios from 'axios';

const validateWord = async (word: string) => {
  try {
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );

    return;
  } catch (err) {
    throw new Error('Please enter the correct word');
  }
};

export const wordValidationServices = {
  validateWord,
};
