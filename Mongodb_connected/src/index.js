require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');

// 비구조화 할당을 통해 process.env 내부 값에 대한 래퍼런스 만들기
const { PORT,MONGO_URI } = process.env;

//몽고 연결
mongoose
.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(e=> {
        console.error(e);
    });

const app = new Koa();
const router = new Router();

//라우터설정
router.use("/api", api.routes()); //api 라우트 적용

//라우터 적용 전에 bodyParser 적용
router.use(bodyParser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

//PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port, ()=>{ 
        console.log('Listening to port %d', port);
    });
