const Koa = require('koa'); //내장 모듈을 가져올거야
const Router = require('koa-router'); 

const app = new Koa(); //KOA 새로운 객체를 생성해 app이라는 변수를 정해줘
const router = new Router();  //내가 원하는 페이지를 get. 라우터를 사용하면 특정 경로에 대한 요청을 적절한 핸들러 함수로 전달하고, 응답을 생성할 수 있습니다.

//라우터 설정
router.get('/', ctx => {
    ctx.body = '홈';
}); //루트라는 url을 get 요청을함 ,ctx객체를 매개변수(함수나메서드) 받아.
router.get('/about/:name?', ctx=> {
    const {name} = ctx.params;
    ctx.body = name ? `${name}의 소개` : `소개`;
});

router.get('/posts', ctx=> {
    const {id} = ctx.query; //ctx.query는 요청 URL의 쿼리 파라미터를 담고 있는 객체입니다.
    ctx.body = id ? `포스트 #${id}` : `포스트 아이디가 없습니다.`; //구조 분해 할당을 사용하여 id라는 변수를 ctx.query 객체에서 추출합니다. 이를 통해 쿼리 파라미터에서 id 값을 가져올 수 있습니다.
});
//posts경로에 get요청을 하게되면 

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods()); //koa.js 애플리케이션 라우터를 등록하는 구문
//app 메서드를 사용 //router 미들웨어로 추가됩니다. //메서드는 get 요청이 들어올 때 허용되는 메서드에 대한 적절한 응답을 설정하기 위해 Koa 애플리케이션에 미들웨어로 추가됩니다.
app.listen(4000, () => {
    console.log('Listening to port 4000');
});
//Koa 애플리케이션을 4000번 포트에서 실행시킴 서버가 시작되면 'Listening to port 4000'이라는 메시지가 출력됩니다. 이후 해당 포트로 들어오는 요청에 대해 Koa 애플리케이션은 설정된 미들웨어 및 라우터를 통해 적절한 응답을 처리합니다.