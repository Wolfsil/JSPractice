
const express = require('express')
const cookieParser=require("cookie-parser")
const basic =require('./restapi기본.js')

const app = express();

const port=3001

//미들웨어 등록. 패스가 없으므로 
//모든 패스에 대해 이 라우터를 거친다.
app.disable('')
app.use(cookieParser())
//정적파일 전송 미들웨어(보안을 위해 절대경로 사용)
//절대경로 사용해도 소용없냐고 생각하기 쉽지만, 검색창에 '../'하면 
//url의 경로가 바뀌지, public밖으로 커서가 꺼내지진 않는다
//참고로 무조건 get 방식이다.
app.use('/static', express.static(__dirname + '/public'));


// //미들웨어를 통해, 라우터도 등록가능하다
app.use('/basic', basic);

//모든 것은 위에서 아래로 순차적으로 흐른다.
app.get('/',(req, res, next)=>{

    res.send("환영합니다. 이곳은 메인페이지입니다: "+req.requestTime)
})
app.post('/',(req, res, next)=>{
    console.log("/post")
    res.send("환영합니다. 이곳은 메인페이지입니다: "+req.requestTime)
})

//url이 엉뚱하면 여기로 온다.
app.use(function (req, res, next) {
    //일부러 보내는 코드를 생략하는 게 좋다. 해킹일 경우를 대비해서
    res.status(404).send('엉뚱한 요청입니다');
})

//뭐든간에 에러가 발생하면 여기서 해결한다.(에러핸들 미들웨어)
//next("route"나 공백이외의 아무거나)를 넣으면 여기로 온다
app.use(function(err, req, res, next) {
    //이러면 오류뜬다는 정보를 굳이 클라에 보내지 않는게 보안에 좋다
    res.status(500).send('오류입니다');
});

app.listen(port,function(){
    console.log(__dirname + '/public'+' : '+port)
})