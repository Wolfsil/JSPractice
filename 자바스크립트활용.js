
////////////////////////////////////////

/* 
0 매우 중요!! 비동기
*/

/*
1 resolve는 성공, reject 실패 시에 값을 반환하기 위한것
2 promise는 반드시 resolve가 있어야 함
*/

////////////////////////////////////////
function pro(){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(1)}, 1000) //1초 뒤에 결과값을 반환
    })
      
    myPromise.then(n => {
        console.log(n);
    }).catch(error => {
        console.log(error);
    })//결과값을 반환 받고 함수를 실행. 에러가 나면 캐치가 해결
    0
    function promiseRecursion(n){
        return new Promise((resolve, reject) => {
           console.log("지금값은 ",n)
           resolve(++n)
           return n
        });
    }
    promiseRecursion(0).then(
        promiseRecursion
    ).then(
        promiseRecursion
    ).then(
        promiseRecursion
    ).catch(e=>{
        console.error(e)
    })//반환값을 연속 비동기사용
}

//프로미스를 반환하는 것 보다 더 쉬운 방법
//프로미스 취급 받는 어싱어웨이트
async function asyAwait(){
    console.log('안녕하세요!')
    await new Promise(resolve=> setTimeout(resolve, 1000))
    console.log('반갑습니다!')
    
}
async function useAsync(name){
    try {
        await asyAwait(); //await 로 기다릴수 있다. 물론, 함수밖의 루프는 그대로 진행된다.
                        //(함수밖도 await로 기다리지 않을때)
      } catch (e) {
        console.error(e);
      }finally{
        console.log(name,"종료")
        return name
        
      }
}
async function useManyAsync(){

    let a=useAsync(0)
    let b=useAsync(1)
    let c=useAsync(2)
    await a //이런 방식으로 동시진행가능
    await b
    await c //await Promise.all([a,b,c]) 이렇게 사용가능(단, 배열로 리턴됨)
    a=useAsync(3)
    b=useAsync(4)
    c=useAsync(5)
    retu=await Promise.race([a,b,c])
    console.log(retu)//가장 먼저온 하나가 리턴됨


}
useManyAsync()

////////////////////////////////////////

/*
1 비구조화 할당과 레스트(나머지)
*/

////////////////////////////////////////
function unstruct(){
    const object = { a: 1, b: 2 };

    let { a, b, c=3} = object; //여기서 할당할 값이 없으면 undefined가 나온다.
                                //하지만 c에 디폴트 값을 넣어서 괜찮다
                                //같은 이름의 값에 배정됨
                                //배열에서도 사용가능
    
    console.log(a," ",b," ",c); // 1

    //위와 반대로 객체값이 더 많을때
    const object2 = { d: 1, e: 2, f:3 };
    let {d, ...rest}=object2
    console.log(d,rest)

    function useRestInFun(...rest){
        console.log(rest)//배열로 들어온다
        rest.map(n=>console.log(n))
    }//매개변수가 몇개 있을지 예상안갈때
    useRestInFun(1,2,3)
}

////////////////////////////////////////

/*
2 스프레드(객체를 분리해서 딴 객체에 넣는 법)
*/

////////////////////////////////////////
function spread(){
    const obj1 = {
        name: 'name'
    }
      
    const obj2 = {
        ...obj1, 
        attribute: 'cool'
    }
    console.log(obj2)
}

