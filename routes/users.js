var express = require('express');
var router = express.Router();
const userHandlers = require('./handlers/users');
const userIdHandlers = require('./handlers/users/id');


router.route('/').get(userHandlers.get).post(userHandlers.post)
router.route('/:id').get(userIdHandlers.get).put(userIdHandlers.put).delete(userIdHandlers.delete)
















// GET
// router.get('/', (req, res, next) => {
//   return res.json({
//     id: 1,
//     name: 'dani',
//     role: 'admin',
//   })
// });

// router.get('/dani', (req, res, next) => {
//   return res.json({
//     message: 'Ini pesan baru',
//   })
// });

// // POST
// router.post('/', (req, res, next) => {
//   return res.json(req.body)
// })
// // PUT
// router.put('/', (req, res, next) => {
//   return res.json(req.body)
// })
// // DELETE
// router.delete('/', (req, res, next) => {
//   return res.json(req.body)
// })
module.exports = router;
