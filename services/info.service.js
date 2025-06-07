const supabase = require('../client'); // Supabase 연결

exports.createInfo = async ({ name, phone, email, farm_id }) => {
    const { data, error } = await supabase.from('farm_info').insert([
        {
            name,
            phone,
            email,
            farm_id,
        },
    ]);

    if (error) throw new Error(error.message);
    return data;
};
