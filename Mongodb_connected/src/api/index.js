const Router = require('koa-router'); //라우팅 기능을 구현하기위해 필요한코드
const posts = require('./posts'); //./posts경로 요청

const api = new Router(); //api 라우팅을 구성하기 위해 Router 객체 생성

api.use('/posts', posts.routes());

//라우터를 내보냅니다.
module.exports = api;
