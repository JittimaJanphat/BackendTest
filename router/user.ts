const express = require('express');
const userController = require('../controllers/user-data');
const postController = require('../controllers/post-data');

const router = express.Router();

router.get('/user',userController.getUser);
router.get('/userDetail/:id',userController.getUserDetail);
router.post('/userCreate',userController.createUser);
router.put('/userUpdate/:id',userController.updateUser);
router.delete('/userDelete/:id',userController.deleteUser);
router.get('/userGettingDetail/:id',userController.gettingUserDetail);



router.get('/post',postController.getPost);
router.get('/postDetail/:id',postController.getPostDetail);
router.post('/postCreate',postController.createPost);
router.put('/postUpdate/:id',postController.updatePost);
router.delete('/postDelete/:id',postController.deletePost);
router.get('/postGettingDetail/:id',postController.gettingPostDetail);



module.exports = router;