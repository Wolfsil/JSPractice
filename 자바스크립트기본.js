////////////////////////////////////////

/*
1 변수 사용법과 출력
*/

/*
1 JS는 데이터타입이 딴 언어랑 다르게, 
넘버(정수, 소수 합해서), 문자열, 참거짓, null(없음), undefined(미정의) 등으로 이뤄짐
2 var는 사용금지. 호이스팅 문제발생
3.null, undefined, 0, ''(빈것), 는 boolean 상 거짓 취급한다
4. 상수라도 상수가 레퍼런스형의 객체이면 아닌 상수 내부값은 변경가능하다.
*/

////////////////////////////////////////
function useVal(){
    console.log("[변수 사용법]")
    let helloVal="안녕하십니까? "
    let valValue=1 //변수
    const conValue=2 //상수
    console.log(helloVal, valValue, conValue)

    console.log("[배열 사용법]")
    let arr=[0,1,2,3]
    arr.push(4)//0을 뒤에 삽입
    arr.unshift(-1)//-1을 맨 앞에 삽입
    console.log("배열: ",arr, "길이: ",arr.length)
    console.log(arr.shift())//맨앞의 값을 추출 후 삭제(dequene)
    console.log(arr.pop())//맨뒤의 값을 추출 후 삭제
    console.log(arr[1])//임의위치 접근
    console.log(arr)

    console.log("[객체 사용법]")
    let name="객체"
    let ref={}
    const obj={
        name:name,
        func: function(){
            console.log("함수1")
        },
        get fullName(){
            return this.name+""+"is Name"
        },
        set fullName(value){
            this.name=value //객체 내부 함수에서 객체값에 접근할떈 무조건 this가 필요
        },
        ref:ref
    }

    console.log(obj)

    name="유저" //값형식은 복제
    ref.func=()=>console.log("함수2")//주소형식은 주소를 전달
    ref["name"]=obj.name //두가지 방식으로 객체 사용가능
    console.log(obj)
    obj.func()
    console.log(obj.fullName)
    obj["fullName"]="객체 is Name"
    console.log(obj)
}


////////////////////////////////////////

/*
2 연산과 조건과 반복
*/

/*
1 연산은 가감승제, 단항, 대입, 논리, 비트가 존재하며, 자동 버림없고 형변환 시킴.
1 일반적인 반복문 조건문과 같다
2 반복문은 break 문과 continue문도 사용가능
*/

////////////////////////////////////////
function usePMTD(){
    console.log("[연산 사용법]")
    console.log("나누기 예: ",10/3) //소수가 그대로 남음
    let tem=1
    tem+=1
    console.log("대입연산 예: ",tem)

    console.log("[논리연산 사용법]")
    console.log(
        "불리언 예: ",true, " ",  
        "논리연산 예: ",!true, " ",  
        "논리연산 예: ",true&&false, " ")

    console.log("[비트연산 사용법]")
    console.log("비트연산 예: ",2&4, " ")
}

function useCom(){
    console.log("[비교 사용법]")
    a=1
    b=1.0
    c="1"
    d=[1]
    e=[1]//같은 값을 가져도 주소가 다르므로 다른 취급
    console.log(
        "==는 자료형을 따지지 않는다\n", //!=
        "비교 예: ",a==b, " ",
        "비교 예: ",a==c, " ",
        "비교 예: ",a==d, " ",
        "비교 예: ",d==e, " ")
    console.log(
            "===는 자료형을 엄격하게 따진다\n", //!==
            "비교 예: ",a===b, " ",
            "비교 예: ",a===c, " ",
            "비교 예: ",d===e, " ")
}


function compare(){
    console.log("[조건 사용법]")
    
    //복수개의 조건은 && || 이용가능
    if(1>10){
        console.log("첫번쨰 조건 부함")
    }else if(1<10){
        console.log("두번쨰 조건 부함")
    }
    else{
        console.log("모두 조건 오답")
    } // 삼항연산자( (조건)?(참값):(거짓값) ) 도 사용가능


    console.log("[스위치 사용법]")
    let value="5"
    switch (value) {
        case '1':
          console.log('1번');
          break;
        case '2':
            console.log('2번');
          break;
        default:
            console.log('3번');
      }
    
    console.log("[반복문 사용법]")
    value="0" 
    //이런 말도 안되는게 허용된다. 파이썬보다 직관적이지 않은 심하게 자유로운 구조
    while(value<10){
      console.log(value)
      value++
    }
    console.log('');
    value=[]
    for(let i=0;i<10;i++){
      value.push(i)
    }
    for(i in value)
    {
      console.log(i)
    }
    
    console.log("[그 외 내장함수 사용법]")
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    //모두 결과가 같다
    array.forEach(n => {
      console.log(n)  
    });//원소를 각각 반복

    array.map(n => console.log(n))// 원소를 각각 반복

    console.log("인덱스 찾기",array.indexOf("1")) //없는 값은 -1로, 있는 값은 인덱스로 반환
                                                //find는 찾아낸 값 자체를
                                                //findindex는 배열로 못찾는 객체일때 사용가능
    filteringArr=array.filter(n=>n%2===0)//조건에 맞는 배열(객체)를 반환가능   
    console.log("짝수로 필터링: ",filteringArr)
    //그 외에도 splice(특정 인덱스의 항목 삭제(자동할당)),slice(splice와 같고, 원배열 유지),
    //shift(unshift), pop(push) 같은 stl같은 함수도 존재
    //배열을 합치는 concat, 배열안의 값을 문자로 합치는 join 등도 존재


}
////////////////////////////////////////

/*
3 함수와 클래스
*/

/*
1. 함수의 디폴트 입력
2. 람다식은 {} 식과 바로 리턴식이 있다
*/

////////////////////////////////////////
function method(first=1, second=2){ //디폴트파라메터 사용법
    console.log("[함수 사용법]")
    console.log("변수값: ",first, second)

    console.log("[화살표 함수(람다) 사용법]")
    const add =(a,b)=>a+b
    console.log("입력값 합계: ",add(first,second))

    let useFunc=(func,first,second)=>func(first,second)
    const minus=(a,b)=>a-b
    console.log("입력값 차: ",useFunc(minus,first,second))

    useFunc=(func)=>{return func}
    console.log("입력값 차: ",useFunc(minus)(first,second))

    return first

}

function instance(){
    this.name="이름"
    this.func=function(){
        console.log(this.name)
    }
}//객체생성자1(객체를 생성할 때 마다 함수까지 포함해서 생성됨)
//프로토 타입을 이용하면 중복을 없앨수 있으나 보통 클래스를 씀
class instanceClassParent{
    constructor(name){
        this.name=name
        console.log(name)
    }//생성자
}
class instanceClass extends instanceClassParent{
    //자바계열의 extend 문법(c++, c#은 " : ", 파이썬은 " () " " )
    constructor(name="기본파라메터"){
        super(name)//부모 생성자 명시적으로 호출 해야함
    }//생성자

    func() {
        console.log(this.name)
    }
}

function useInstance(){
    useI=new instance()
    useC=new instanceClass("클래스 이름")
    useI.func()
    useC.func() 


}