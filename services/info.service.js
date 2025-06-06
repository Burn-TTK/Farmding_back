const supabase = require('../supabase/client');

exports.createInfo = async ({ name, phone, email }) => {
    const { data, error } = await supabase.from('info').insert([
        {
            name,
            phone_number: phone,
            email
        }
    ]);

    if (error) throw new Error(error.message);
    return data;
};
