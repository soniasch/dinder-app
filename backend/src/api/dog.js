const dogNames = require('dog-names');
const axios = require('axios');
const config = require('../../config')

module.exports = {
  index: (req, res) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const name = characters.charAt(Math.floor(Math.random() * characters.length));

    axios.get(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
      headers: {
        'X-Api-Key': config.API_NINJA_KEY
      },
      params: {
        offset: Math.floor(Math.random())
      }
    })
      .then(({ data }) => {
        console.log(data);
        res.status(200).json({
          name: dogNames.allRandom(),
          dog: data[Math.floor(Math.random() * 20)]
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
        res.status(500).json({
          code: 'InternalError',
          message: 'Internal error occurred'
        })
      });
  }
}
  