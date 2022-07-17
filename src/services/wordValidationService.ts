import axios from 'axios';

const validateWord = async (word: string) => {
  try {
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );

    return;
  } catch (err) {
    if (
      (err.code && err.code === 'ERR_BAD_RESPONSE') ||
      (err.message && err.message === 'Request failed with status code 500')
    ) {
      throw new Error('Dictionary api server error');
    } else {
      throw new Error('Please enter the correct word');
    }
  }
};

export const wordValidationServices = {
  validateWord,
};
