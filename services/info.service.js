exports.createInfo = async ({ name, phone, email, farm_id }) => {
    const { data, error } = await supabase.from('info').insert([{
        name,
        phone_number: phone,
        email,
        farm_id
    }]);

    if (error) throw new Error(error.message);
    return data;
};
