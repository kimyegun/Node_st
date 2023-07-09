import Router from 'koa-router'
import posts from './posts'

const api = new Router(); //api 라우팅을 구성하기 위해 Router 객체 생성

api.use('/posts', posts.routes());

//라우터를 내보냅니다.
export default api;
