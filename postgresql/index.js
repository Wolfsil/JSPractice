const e = require('express');
const Client = require('pg');

// 기본적인 DB 세팅(사실 패스워드는 서버가 해킹당해야 해킹당하고, 서버가 해킹당하면 어차피 비번수정가능하고)
// 정상적인 인간이라면 vpc프라이빗에 위치해놓을테지만, 안정성을 위해 예의상 password를 설정하는게 좋다.
const pgconfig={
	user: '',
    host: '0.0.0.0',
    password: 'sql',
    port: '',
    database: '',
    min:3,
    max:20,
    statement_timeout: 1000,
}

const client = new Client.Pool(pgconfig);

// // //이런 프로미스 방식으로 사용하는게 좋다.
// client.query("SELECT * FROM pg_database WHERE datistemplate = false")
//     .then((res)=>{console.log(res.rows)})
//     .catch((err)=>{console.log(err)})



// //이런 프로미스 방식으로 사용하는게 좋다.
// client.query("create table testdb(id bigint generated always as identity primary key, name varchar(16) not null unique ,property json default '{}');")
//     .then((res)=>{console.log(res.rows)})
//     .catch((err)=>{console.log('에러 테이블 생성')})

client.query("insert into test (name, property) values ('미스터강','{\"기념일\":[10,20,30]}');")
    .then((res)=>{console.log(res.rows)})
    .catch((err)=>{console.log('에러 인서트')})
    

client.query("update test set name='미스강', property='{}' where name='미스터강';")
    .then((res)=>{console.log(res.rows)})
    .catch((err)=>{console.log('에러 업데이트')})

client.query("select id, name, property from test;")
    .then((res)=>{console.log(res.rows)})
    .catch((err)=>{console.log('에러 셀렉트')})


client.query("delete from test where name='미스강';")
    .then((res)=>{console.log(res.rows)})
    .catch((err)=>{console.log('에러 딜리트')})



setTimeout(() => console.log("after"), 1000*60);
// client.end().then(()=>console.log("pool has ended"))