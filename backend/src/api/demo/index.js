module.exports = {
  index: (req, res) => res.status(200).json({ ...req.body, id: req.uuid, method: req.method })
}
