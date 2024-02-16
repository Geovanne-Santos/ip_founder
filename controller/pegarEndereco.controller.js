import axios from "axios";
const apiKey = process.env.apiKey;

export const pegarEnderecoPorIp = async (ip) => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${ip}`
      )
      .then((response) => {
        return resolve(response.data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
