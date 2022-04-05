const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password

    let roomId
    let isRoom = true

    while (isRoom) {
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString())
      }

      const roomsExistsIds = await db.all('SELECT id FROM rooms')

      isRoom = roomsExistsIds.some(roomsExistsId => roomsExistsId === roomId)

      if (!isRoom) {
        const query = `
          insert into rooms (
            id,
            pass
          ) values (
            ${parseInt(roomId)},
            '${pass}'
          )
        `

        await db.run(query)
      }
    }

    await db.close()

    res.redirect(`/room/${roomId}`)
  },

  open(req, res) {
    const roomId = req.params.room
    res.render('room', { roomId: roomId })
  }
}
