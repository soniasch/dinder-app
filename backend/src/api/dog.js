const dogNames = require('dog-names')

module.exports = {
  index: (req, res) => {
    res.status(200).json(
      {name: dogNames.allRandom()}
      )
  }
}
  