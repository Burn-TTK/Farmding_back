const app = require('./app'); // 필요에 따라 './src/app'일 수도 있음

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
