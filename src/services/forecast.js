import axios from 'axios';

export async function get({ payload }) {

  return await axios.get(process.env.REACT_APP_FORECAST, {
    params: {
      q: payload,
      units: 'metric',
      APPID: '346242ae24bed2b70a3b78cc6d93ad46'
    }
  })
}