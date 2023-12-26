import React,{useState} from 'react';
import './App.css';



function Form1() {
  const[data1,setData1]=useState(null);
  const[data2,setData2]=useState(null);
  const[data3,setData3]=useState(null);

  function datalikho1(data){
  setData1(data.target.value);
  }
  function datalikho2(data){
    setData2(data.target.value);
    }
    function datalikho3(data){
      setData3(data.target.value);
      }
      
 
    return (
      <div className="App">
        <form>
        <label>NAME</label>
        <input type="text" placeholder="type" onChange={datalikho1} /><br></br>
        <label>SALARY</label>
        <input type="text" placeholder="type" onChange={datalikho2} /><br></br>
        <label>EMPLOYEE ID</label>
        <input type="text" placeholder="type" onChange={datalikho3} /><br></br>
        </form>
        <div>
            <br></br>
            <table>
       <tr>
        <th>NAME</th>
        <th>SALARY</th>
        <th>EMPLOYEE ID</th>
        </tr>
        <tr>
        <td>{data1}</td>
        <td>{data2}</td>
        <td>{data3}</td>
        </tr>
        </table>
        </div>
        </div>
    );
  }
  
  export default Form1; 