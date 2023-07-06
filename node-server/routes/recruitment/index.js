const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/recruitment');

router.post('/recruitments', controllers.createRecruitment);
router.get('/recruitments', controllers.getAllRecruitments);
router.get('/recruitments/:id', controllers.getRecruitmentById);
router.put('/recruitments/:id', controllers.updateRecruitment);
router.delete('/recruitments/:id', controllers.deleteRecruitment);

module.exports = router;