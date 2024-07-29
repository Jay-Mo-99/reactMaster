
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  /*let post = "Sweet Potato";/**서버에서 가져왔다고 가정, 변수느 ㄴ자료 잠깐 저장 */
  let[title,titleSetter] = useState(['Tomato','Lettuce','Potato','Milk']);/**React에서 변수 저장, state 만들기  */
  /**useState에도 destructing처럼 ['Tomato', 함수] 가 존재한다.  */
  /** b와 d는 state의 변경을 도와준다 */


  /*let[logo,setLogo] = useState('Fridge Master');/**useState는 html이 자동 랜더링 되는게 최대 장점이라, logo같이 잘 안바뀌는건 useState할 필요 없다 */

  let[like,likeSetter]=useState(0);

  let[modal,setModal]=useState(false);



  let num = [1,2];
  // let first = num[0];
  // let second = num[1];

  let[first,second] = [1,2];

  [1,2,3].map();



  return (
    <div className="App">
      <div className="app-nav">
        <h4 >Fridge Master</h4>
      </div>
      <button onClick={()=>{
        let copyA = [...title];
        copyA.sort();
        titleSetter(copyA);

      }}>Sort alphabetically</button>
      <div className="list">
        <h4>{title[0]} <button onClick={()=> {
          console.log("Click the button");
          let copy = [...title];
          copy = ['Tomato 🍅','Lettuce 🥬','Potato 🥔','Milk 🥛'];
          titleSetter(copy);
          }}>Add the emoji to title</button></h4>
        <p>Post by, 1/11</p>
      </div>
      <div className="list">
        <h4>{title[1] }<span onClick={()=>{likeSetter(like+1)}}>👍</span>{like}</h4>
        <p>Post by, 1/11</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>Post by, 1/11</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}> {title[3]}</h4>
        {/* 삼항연산자 for Modal Page */}
        {
          modal == true ? <Modal/> : null
        }
        
        <p>Post by, 1/11</p>
      </div>



    </div>
    
  );
}

/**함수를 변수에 대입해서 component생성  */
let Component = () => {
  return <h4>I am component using variable</h4>;
};

/**1.Component에 대한 함수는 function App 밖에서 짜
 * 2. return 가로안에 내가 짜고 싶은 코드 덩어리 입력
 * 3. return에 무언가를 집어넣을 땐 반드시 하나의 tag만 입력해. 
 * 4. 함수의 이름을 컴포넌트라고 한다. 
 */
function Modal(){
  return(
      <div className='modal'>
        <h4>Title</h4>
        <p>Date</p>
        <p>Detail Description</p>
      </div>
  )
}



export default App;
