const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(serve(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:`${PORT}`");
});
