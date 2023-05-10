const dogNames = require("dog-names");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const config = require("../../config");

module.exports = {
  index: (req, res) => {
    console.log("config.OPENAI_API_KEY", config.OPENAI_API_KEY);

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    axios
      .get(`https://api.api-ninjas.com/v1/dogs`, {
        headers: {
          "X-Api-Key": config.API_NINJA_KEY,
        },
        params: {
          name: letter,
          offset: Math.floor(Math.random() * 5),
        },
      })
      .then(({ data }) => {
        console.log(data);
        const randomDogNumber = Math.floor(Math.random() * data.length);
        const chosenDog = data[randomDogNumber];

        const configuration = new Configuration({
          apiKey: config.OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        const response = openai
          .createCompletion({
            model: "text-ada-001",
            prompt: "Say this is a test",
            max_tokens: 7,
            temperature: 0,
          })
          .then((responses) => {
            res.status(200).json(formatDog(chosenDog), response);
          });
      })
      .catch((error) => {
        // handle error
        console.log(error);
        res.status(500).json({
          code: "InternalError",
          message: "Internal error occurred",
        });
      });
  },
};

function formatDog(dog) {
  const gender = ["male", "female"][Math.floor(Math.random() * 2)];
  return {
    breed: dog.name,
    name: dogNames[`${gender}Random`](),
    gender,
    age: Math.floor(Math.random() * dog.max_life_expectancy),
    height:
      Math.floor(
        Math.random() *
          (dog[`max_height_${gender}`] - dog[`min_height_${gender}`])
      ) + dog[`min_height_${gender}`],
    weight:
      Math.floor(
        Math.random() *
          (dog[`max_weight_${gender}`] - dog[`min_weight_${gender}`])
      ) + dog[`min_weight_${gender}`],
    shedding: dog.shedding,
    grooming: dog.grooming,
    drooling: dog.drooming,
    coatLength: dog.coat_length,
    playfulness: dog.playfulness,
    protectiveness: dog.protectiveness,
    trainability: dog.trainability,
    energy: dog.energy,
    barking: dog.barking,
    goodWithChildren: dog.good_with_children,
    goodWithDogs: dog.good_with_other_dogs,
    goodWithStrangers: dog.good_with_strangers,
  };
}
