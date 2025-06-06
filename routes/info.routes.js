const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info.controller');

router.post('/', infoController.createInfo); // ✅ 이 함수가 사용되어야 합니다

module.exports = router;
