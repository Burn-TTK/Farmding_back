const { name, phone, email, farm_id } = req.body;

if (!name || !phone || !farm_id) {
    return res.status(400).json({ error: '이름, 전화번호, 상품 ID는 필수입니다.' });
}

const result = await infoService.createInfo({ name, phone, email, farm_id });
