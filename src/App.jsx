import "./App.css";
import React, { useState, useEffect } from "react";  //import hooks

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())  //promise
      .then((d) => setData(d))
  }


  useEffect(() => {    //hooks
    fetchInfo();
  }, []);  //when component load it runs  function for 1 time  only  because brackets are empty 

  return (     //javascript html
    <div className="App">  
      <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
               }}
               >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.username}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;