const supabase = require('../supabase/client'); // Supabase 연결

exports.createInfo = async ({ name, phone_number, email, farm_id }) => {
    const { data, error } = await supabase.from('info').insert([
        {
            name,
            phone_number,
            email,
            farm_id,
        },
    ]);

    if (error) throw new Error(error.message);
    return data;
};
