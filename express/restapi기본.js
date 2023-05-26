
const express = require('express')
var router = express.Router();


// 다른 라우터에 영향을 미치지 않는 이 라우터의 미들웨어
router.use(function timeLog(req, res, next) {
  console.log('restapi 기본 라우터 전용의 미들웨어에 입장');
  next();
});

//만약 상위패스가 /basic이라면, /basic/경로  로 세분화 가능하다 
//하위 패스를 이렇게 지정한다
router.get('/get', function(req, res) {
  console.log("/라우터명/get")
  res.send('기본 get입니다');
});

//post 등 다른 api도 구현가능(다른 api와 패스가 겹쳐도
//클라 호출의 api종류가 다르면 알아서 맞는 api에게 간다.)
router.post('/post', function(req, res) {
  console.log("/라우터명/post")
  res.send("기본 post입니다");
})

//자동으로 json으로 변환
router.get('/json', function(req, res) {
  console.log("/라우터명/json")
  res.json({true:true, number:1541.1451,
   undefined: undefined,string:"string",
  json:{
    id:1,
    name:"name"
  }})
})

//GET 쿼리 파라미터(비추, 보기도 어렵다)
router.get('/getparam', function(req, res) {
  console.log("/getparam 입장 "+req.query.id+req.query.pass)
  res.send("기본 get파라미터 입니다 "+req.query.id+req.query.pass);
})

//GET 패스 파라미터
router.get('/getpathparam/:id/:user', function(req, res) {
  console.log("/getpathparam 입장 "+req.params.id+" "+req.params.user)
  res.send("기본 get파라미터 입니다 "+req.params.id+" "+req.params.user);
})
//post 패스 파라미터(보다시피 쿼리방식도 같은 방식이다.)
router.post('/postpathparam/:id/:user', function(req, res) {
  console.log("/getpathparam 입장 "+req.params.id+" "+req.params.user)
  res.send("기본 get파라미터 입니다 "+req.params.id+" "+req.params.user);
})


//리다이렉션(다른 주소 재접속. 처음부터 다시 접속시키는 방식이다.)
//포스트도 사용법 같다.(단, api 종류는 맞춘다.)
router.get('/redirect', function(req, res) {
  console.log("/라우터명/post 입장")
  res.redirect("/basic/post")
})


async function err(){
  throw new Error("에러")
}

//에러처리는 다음과 같이 댄캐치가 간결하고 이쁘다
router.get('/err',async function(req,res,next){
  err()
  .then(function(){res.send("에러처리 완료")})
  .catch(function(err){
    //next에 route이외의 것을 넣으면 에러처리
    next(err)
    console.log(err)
  })
})


router.use( function(req, res) {
  res.status(500).send('기본 오류입니다.');
})



module.exports = router;
