import Router from 'koa-router'; //koa-router 요청
import * as postsCtrl from './posts.ctrl';

const posts = new Router(); //라우터객체 생성


posts.get('/', postsCtrl.list); //읽기
posts.post('/', postsCtrl.write); //쓰기
posts.get('/:id', postsCtrl.read); //id값 요청
posts.delete('/:id', postsCtrl.remove); //id값 입력후 삭제
posts.put('/:id', postsCtrl.replace); //id값 입력후
posts.patch('/:id', postsCtrl.update); //id값 입력후 수정

export default posts;