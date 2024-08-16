import axios from 'axios';

const resFunction = async () => {
  try {
    const response = await axios.get('https://66bf861d42533c4031466b91.mockapi.io/pizzaBlock');
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
export { resFunction };
