const infoService = require('../services/info.service');

exports.createInfo = async (req, res) => {
    try {
        console.time('⏱️ Info 저장 처리 시간'); // ⬅️ 시간 측정 시작

        const { name, phone_number, email, farm_id } = req.body;

        if (!name || !phone_number || !farm_id) {
            return res.status(400).json({ error: '이름, 전화번호, farm_id는 필수입니다.' });
        }

        const result = await infoService.createInfo({ name, phone_number, email, farm_id });

        console.timeEnd('⏱️ Info 저장 처리 시간'); // ⬅️ 시간 측정 종료 (소요 시간 출력)

        res.status(201).json({ message: '저장 성공', data: result });
    } catch (error) {
        console.error('❌ 서버 오류:', error);
        res.status(500).json({ error: '서버 내부 오류' });
    }
};