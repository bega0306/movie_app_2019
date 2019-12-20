# Movie App 2019

본 프로젝트는 리액트를 배우기 위해 만들어졌습니다.

강의: <https://www.youtube.com/watch?v=JtHRa-4MTG4&list=PL7jH19IHhOLPp990qs8MbSsUlzKcTKuCf&index=1>

url: <https://bega0306.github.io/movie_app_2019/>

리액트: <https://ko.reactjs.org/>

<br/><br/><br/>

### 주요 내용 정리

* * *

### #0 Introduction

> 2019.07 버전 리액트 입문 수업

##### #0 1 Requirements

> **Node.js** 설치 (node -v로 확인)
> >**npx** = 패키지가 로컬에 안 남음, 항상 새로운 버전

> **git** 설치 (git --version으로 확인)

##### #0 2 Theory Requirements

> ...

##### #0 3 Why React

> 자바스크립트 (jsx를 제외하고 따로 언어가 없음)
> 
> 압도적인 수요 (커뮤니티, 자습서, 컴포넌트)

<br/><br/>

* * *

### #1 0 Creating your first React App

> **npx create-react-app #** : Babel, webpack, build 도구가 설정되어 있음

> **npm start** : 리액트 실행 (개발 서버)

##### #1 1 Creating a Github Repository
> **git init**
>>저장소 생성
>>>**git remote add origin [url]**
>>>>**git add .**
>>>>>**git commit -m "message"**
>>>>>>**git push origin master**

##### #1 2 How does React work?
> favicon : 탭 아이콘

> root에 component를 채움

</br>

> ### **Virutal DOM**
> 참고: <https://velopert.com/3236>
>> DOM 문제 : 각 조작이 레이아웃 변화, 트리 변화와 렌더링을 일으킴
>> 
>> = 노드 30개 수정 -> 30번의 (잠재적인) 레이아웃 재계산과 리렌더링
>>
>> 이 과정을 오프라인 돔에서 한 후 실제 DOM 1번만 전달
>>
>> = 연산 횟수 ↓ 속도 ↑
>>> +각각의 DOM fragment를 관리하는 과정 자동화, 추상화
>>>
>>> = 각 변화들의 동기화 작업 X 모든 작업을 하나로 묶어줄 수 있음

<br/><br/>

* * *

### #2 0 Creating your first React Component
> **jsx** : javascript 안의 HTML : Component를 만들고 사용 (Component는 대문자)
>>```javascript
>> // function
>> function App() {
>> 	  return(jsx);
>> }
>> 
>> //class
>> class App extends React.Component {
>> 	  render(){
>> 		return(jsx);
>> 	  }
>> }
>>```

##### #2 1 Reusable Components with JSX + Props
> **properties (props)** : component 사용 시 값 전달
>>ex => &lt;Food **name=값** **asdfg=값**/&gt;
>>
>>***props.name*** or {name, asdfg} = props 후, ***name***

##### #2 2 Dynamic Component Generation
> **array.map 함수** : 각 item마다 function 실행됨, array를 return 함
>```javascript
>const friends = ["a", "b", "c", "d"];
>friends.map(friend => {
>	console.log(friend);
>	return friend + "♥";
>});
>```
> = 콘솔: abcd, 리턴 값 ["a♥", "b♥", "c♥", "d♥"]

##### #2 3 map Recap
> map 사용 시 **key** prop을 지정해줘야 함 (id, index 등)

##### #2 4 Protection with PropTypes
> npm i prop-types : **PropTypes** 설치
>>```javascript
>> ComponenetName.propTypes = {
>> 	str: PropTypes.string.isRequired;
>> 	float: PropTypes.number.isRequired;
>> }
>>```
>>prop-types: <https://www.npmjs.com/package/prop-types>

<br/><br/>

* * *

### #3 0 Class Components and State
> **state** : 동적인 데이터를 다룰 때 사용

##### #3 1 All you need to know about State
> **setState** : state의 데이터를 **바꿀 때** 사용 => state를 refresh 하고 render 함수를 호출함.
>> **현재 state 가져오기**
>>```javascript
>>this.setState(current => ({ count: ++current.count }));

##### #3 2 Component Life Cycle
> **constructor()** : 생성자
>```javascript
>constructor(props) {
>	super(props);
>	this.state = {key: value};
>}
>```
> **componentDidMount()** : DOM에 렌더링 된 후에 호출
>
>**componentDidUpdate()** : 업데이트 직후에 호출
>
> **componentWillUnmount()** : DOM에서 삭제된 후에 호출
> > 자세히: <https://ko.reactjs.org/docs/react-component.html>


##### #3 3 Planning the Movie Component
> 삼항 연산자 : **condition ? exprIfTrue : exprIfFalse**

> 시간 지연 함수 : **setTimeout(function, milliseconds)**

<br/><br/>

* * *

### #4 0 Fetching Movies from API
> **axios** : **비동기** 방식으로 HTTP 데이터 요청을 실행
>> npm i axios

> **async & await** : 자바스크립트의 비동기 처리 패턴
>>```javascript
>> getData = async () => {
>> 	  const data = await axios.get('json url');
>> }

##### #4 1 Rendering the Movies

> ...


##### #4 2 Styling the Movies

> ...

##### #4 3 Adding Genres

> DOM 엘리먼트 헷갈리는 속성 지정
>> X | O!!
>> :---:|:---:
>> class | **className**
>> onclick | **onClick**
>> for | **htmlFor**

##### #4 4 Styles Timelapse

> ...

##### #4 5 Cutting the summary

> 문자열 자르기 : **str.slice(beginIndex[, endIndex])**

<br/><br/>

* * *

### #5 0 Deploying to Github Pages
>**npm i gh-pages** : **gh-pages** 설치
>> package.json에 homepage 추가 :
>> ```json
>>"homepage": "https://{github_username}.github.io/{project_name(소문자)}/"

>> package.json에 script 추가 :
>>```json
>> "deploy": "gh-pages -d build",
>> "predeploy": "npm run build"
>>```
>>>**npm run deploy** : predeploy를 먼저 실행 후 나온 build 파일을 gh-pages를 통해 올림