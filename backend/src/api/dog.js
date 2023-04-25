const dogNames = require('dog-names')
const { Configuration, OpenAIApi } = require("openai");
const config = require('../../config')

module.exports = {
  index: async function (req, res) {
    console.log('config.OPENAI_API_KEY', config.OPENAI_API_KEY);

    const configuration = new Configuration({
      apiKey: config.OPENAI_API_KEY
    });
    
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createCompletion({
        model: "text-ada-001",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });

      res.status(200).json({
        name: dogNames.allRandom(), description: response
      })
    } catch (e) {
      console.log('e ', e.response.data);
      
      res.status(200).json({
        name: dogNames.allRandom()
      })
    }
  }
}
  