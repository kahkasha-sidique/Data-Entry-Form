import React,{useState} from 'react';
import './App.css';



function Form() {
  function validation(e){

    e.preventDefault();

  }

  function update(){

   
    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let email=document.getElementById("email").value;
    let city=document.getElementById("city").value;
    let amt=document.getElementById("amt").value;




    let  Table = document.getElementById("tabel");
    let tabRow = document.createElement("tr");
    

    let tabRowParent= Table.appendChild(tabRow);


    let tabData1 = document.createElement("td");
    let tabData2 = document.createElement("td");
    let tabData3 = document.createElement("td");
    let tabData4 = document.createElement("td");
    let tabData5 = document.createElement("td");
   



    
    let tabName = document.createTextNode(name);
    let tabMob = document.createTextNode(mobile);
    let tabEmail = document.createTextNode(email);
    let tabCity = document.createTextNode(city);
    let tabAmt = document.createTextNode(amt);
    






  

   tabRowParent.appendChild(tabData1).appendChild(tabName);
   tabRowParent.appendChild(tabData2).appendChild(tabMob);
   tabRowParent.appendChild(tabData3).appendChild(tabEmail);
   tabRowParent.appendChild(tabData4).appendChild(tabCity);
   tabRowParent.appendChild(tabData5).appendChild(tabAmt);


    


    
  }

return (
<div className="App App-header">

    <div className="form">

        <h2>Data Entry Form</h2>

    <form onSubmit={validation}>

   <input type="text" placeholder="Name" id="name" /><br />
   <input type="text" placeholder="Mobile" id="mobile" /><br />
   <input type="text" placeholder="Email " id="email" /><br />
   <input type="text" placeholder="City" id="city" /><br />
   <input type="text" placeholder="Amount" id="amt" /><br />

    </form>

    <button onClick={update}>Submit</button>

    </div>

    <table id="tabel">

        <tr>
            <th>Name</th> <th>Mobile</th> <th>Email</th> <th>City</th> <th>Amount</th>
        </tr>


    </table>
     
  

</div>
);
  }
  
  export default Form; 