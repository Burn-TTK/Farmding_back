const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info.controller');

router.post('/', infoController.createInfo); // ✅ POST /api/info

module.exports = router;
