module.exports = {
  create(req, res) {
    let roomID = 123666

    res.redirect(`/room/${roomID}`)
  }
}
