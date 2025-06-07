const app = require('./app'); // 또는 './src/app' 경로에 맞게

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
