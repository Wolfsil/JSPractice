//db 생성,삭제,확인
const dbcreate="create database 이름;"
const dbdrop="drop database 이름;"
const dblist="SELECT datname FROM pg_database WHERE datname='이름'"

//테이블 생성,삭제,확인
const tbcreate="create table test(id bigint generated always as identity primary key, name varchar(16) not null unique ,property json default '{}');"
const tbdrop="drop table test;"
const tablelist="SELECT * FROM pg_catalog.pg_tables where tablename='test';"

//crud
const insertion="insert into test (name, property) values ('미스터강','{'기념일':[10,20,30]}');"
const updating="update test set name='미스강', property='{}' where name='미스터강';"
const deleting= "delete from test where name='미스강';"
const selecting="select id, name, property from test;"

//인젝션 방지 삽입
// client.query("$1 $2",["2","2"])
