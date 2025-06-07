const infoService = require('../services/info.service');

exports.createInfo = async (req, res) => {
    try {
        console.log('📦 받은 데이터:', req.body); // 요청 데이터 확인

        const { name, phone_number, email, farm_id } = req.body;

        if (!name || !phone_number || !farm_id) {
            return res.status(400).json({ error: '이름, 전화번호, farm_id는 필수입니다.' });
        }

        const result = await infoService.createInfo({ name, phone_number, email, farm_id });

        res.status(201).json({ message: '저장 성공', data: result });
    } catch (error) {
        console.error('❌ 서버 오류:', error); // 전체 에러 객체 출력
        res.status(500).json({ error: '서버 내부 오류' });
    }
};
