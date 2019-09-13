const experss = require('express');
const router = experss.Router();

let Rooms = require('../../model/rooms.model.js')

router.get('/', (req, res) => {
  Rooms.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.post('/', (req, res) => {
  const { title, address, area, roomtype, privateroom, price, userinfo } = req.body
  const newRooms = new Rooms({
    title,
    address,
    area,
    roomtype,
    privateroom,
    price,
    userinfo: {
      userid: userinfo.userid,
      username: userinfo.username,
      useremail: userinfo.useremail,
    }
  })
  newRooms.save()
    .then(() => res.json({ "msg": "Room is successfully added"}))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.put('/:id', (req, res) => {
  const { title, address, area, roomtype, privateroom, price, userinfo } = req.body
  Rooms.findById(req.params.id)
    .then(room => {
      room.title = title,
      room.address = address,
      room.area = area,
      room.roomtype = roomtype,
      room.privateroom = privateroom
      room.price = price
      room.userinfo = userinfo

      room.save()
        .then(() => res.json('Room updated'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
})

router.delete('/:id', (req, res) => {
  Rooms.findByIdAndDelete(req.params.id)
    .then(() => res.json('Room is deleted!'))
    .catch(err => res.status(400).json({ "error": {err} }))
})

router.get('/:area', (req, res) => {
  Rooms.find({ area: req.params.area}, null, { limit: 15})
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json({ "error": {err} }))
})



module.exports = router
