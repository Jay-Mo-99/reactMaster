
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


  let num = [1,2];
  // let first = num[0];
  // let second = num[1];

  let[first,second] = [1,2];




  return (
    <div className="App">
      <div className="app-nav">
        <h4 >Fridge Master</h4>
      </div>
      <div className="list">

        <h4>{title[3]} <button onClick={()=> {
          let copy = title;/**임시 변수에 원본의 값을 대입 */
          copy[3] = "Chocolate Milk";
          titleSetter(copy);}}>Update the Ingredient</button></h4>
        <p>Post by, 1/11</p>
      </div>
      <div className="list">
        <h4>{title[0] }<span onClick={()=>{likeSetter(like+1)}}>👍</span>{like}</h4>
        <p>Post by, 1/11</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>Post by, 1/11</p>
      </div>
      <div className="list">
        <h4> {title[2]}</h4>
        <p>Post by, 1/11</p>
      </div>

    </div>
    
  );
}

export default App;
