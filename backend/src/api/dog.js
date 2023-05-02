const dogNames = require('dog-names');
const axios = require('axios');
const config = require('../../config')

module.exports = {
  index: (req, res) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = characters.charAt(Math.floor(Math.random() * characters.length));

    axios.get(`https://api.api-ninjas.com/v1/dogs`, {
      headers: {
        'X-Api-Key': config.API_NINJA_KEY
      },
      params: {
        name: letter,
        offset: Math.floor(Math.random() * 5)
      }
    })
      .then(({ data }) => {
        console.log(data);
        const randomDogNumber = Math.floor(Math.random() * data.length)
        
        res.status(200).json({
          dog: formatDog(data[randomDogNumber]),
          originalDog: data[randomDogNumber]
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

function formatDog (dog) {
  const gender = ['male', 'female'][Math.floor(Math.random() * 2)];
  return {
    breed: dog.name,
    name: dogNames[`${gender}Random`](),
    gender,
    age: Math.floor(Math.random() * dog.max_life_expectancy),
    height: Math.floor(Math.random() * (dog[`max_height_${gender}`] - dog[`min_height_${gender}`])) + dog[`min_height_${gender}`],
    weigth: Math.floor(Math.random() * (dog[`max_height_${gender}`] - dog[`min_height_${gender}`])) + dog[`min_height_${gender}`],
  }
}