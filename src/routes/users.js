const { Router } = require('express');
const { 
    getAllUser,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
} = require('../controllers/users')
const router = Router();

router.get('/',getAllUser);
router.post('/',createUser);
router.put('/:id',updateUser);
router.patch('/:id',updatePartialUser);
router.delete('/:id',deleteUser);

module.exports = router;