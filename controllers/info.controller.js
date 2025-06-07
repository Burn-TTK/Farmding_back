const infoService = require('../services/info.service'); // ✅ 추가

exports.createInfo = async (req, res) => {
    try {
        const { name, phone, email, farm_id } = req.body;

        if (!name || !phone || !farm_id) {
            return res.status(400).json({ error: '이름, 전화번호, farm_id는 필수입니다.' });
        }

        const result = await infoService.createInfo({ name, phone, email, farm_id });

        res.status(201).json({ message: '저장 성공', data: result });
    } catch (error) {
        console.error('❌ 서버 오류:', error.message);
        res.status(500).json({ error: '서버 내부 오류' });
    }
};
