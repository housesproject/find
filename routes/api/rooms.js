const experss = require('express');
const router = experss.Router();

let Room = require('../../model/rooms.model.js')

router.get('/', (req, res) => {
  console.log("hello")
  Room.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.post('/', (req, res) => {
  const { title, address, roomtype, privateroom, userinfo } = req.body
  const newRoom = new Room({
    title,
    address,
    roomtype,
    privateroom,
    userinfo: {
      userid: userinfo.userid,
      username: userinfo.username,
      useremail: userinfo.useremail,
    }
  })
  console.log(newRoom)

  newRoom.save()
    .then(() => res.json({ "msg": "Room is successfully added"}))
    .catch(err => res.status(400).json(`Error: ${err}`))
  
})

module.exports = router
