
function byeUsers(req, res) {
  res.status(200).json({ ok:"true", message:"Adios!" });
}

module.exports = { byeUsers };