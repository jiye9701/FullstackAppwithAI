import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Link, NavLink } from "react-router-dom";
import "../css/style.css"

const Result = (props) => {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const { sepalLength, sepalWidth, petalLength, petalWidth, epoch, lr } =
    (props.location && props.location.state) || {};
  console.log('learing rate: ' + lr);

  const apiUrl = "http://localhost:3000/runwithparams";
  const body = {
    sepalLength: parseFloat(sepalLength),
    sepalWidth: parseFloat(sepalWidth),
    petalLength: parseFloat(petalLength),
    petalWidth: parseFloat(petalWidth),
    epoch: parseFloat(epoch),
    lr: parseFloat(lr),
  };

  //runs once after the first rendering of page
  useEffect(() => {
    const fetchData = async () => {
      axios
        .post(apiUrl, body)
        .then((result) => {
          console.log("result.data:", result.data);
          setData(result.data);
          setShowLoading(false);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);

  return (
    <div>

      { showLoading === false
        ? <div>
            {showLoading && <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner> }
            <br></br>
            <form>
            <h1>Prediction Results</h1>
            <br></br>
            <h2>The values for species will be:</h2>
            <br></br><br></br>
            <li>setosa: 1,0,0</li> 
            <li>virginica: 0,1,0</li>
            <li>versicolor: 0,0,1 </li>
            <br></br>
            <table className="App-table">
              <thead>
                <tr>
                  <th className="App-th">Test 1</th>
                  <th className="App-th">Test 2</th>
                  <th className="App-th">Test 3</th>
                </tr>
              </thead>
              
              <tbody>
                
                <tr>
                  <td className="App-td">
                    { data.row1.map((value, index) => (
                      <p key={index}>{value}</p>
                    ))}
                  </td>
                  <td className="App-td">
                  { data.row2.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                  </td>
                  <td className="App-td">
                  { data.row3.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                  </td>

                </tr>
              </tbody>
            </table>


              
              <br></br><br></br><br></br><br></br>
              <b><NavLink className="App-link" to = '/' activeClassName = 'active'>
                Go Back Home
              </NavLink></b>

              </form>
              

              
          </div>
        : 
        < div>
          {showLoading && <Spinner animation="border" role="status">
            <span className="sr-only">Waiting for results...</span>
          </Spinner> }
        </div>

      }
    </div>

  );
}
export default Result;