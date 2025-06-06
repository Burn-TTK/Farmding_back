const infoService = require('../services/info.service');

exports.createInfo = async (req, res) => {
    try {
        console.log('📥 요청 body:', req.body); // 🔍 프론트에서 보낸 데이터 확인용

        const { name, phone, email } = req.body;

        // ✅ 서버 측 유효성 검사
        if (!name || !phone) {
            return res.status(400).json({ error: '이름과 전화번호는 필수입니다.' });
        }

        // 🔧 실제 DB 저장 시도
        const result = await infoService.createInfo({ name, phone, email });

        // ✅ 성공 응답
        res.status(201).json({ message: '저장 성공', data: result });
    } catch (error) {
        console.error('❌ 서버 오류:', error.message); // 🔥 서버 콘솔에서 확인
        res.status(500).json({ error: '서버 내부 오류' });
    }
};
