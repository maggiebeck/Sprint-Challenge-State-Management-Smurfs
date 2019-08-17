import React, { useState, useEffect} from "react";
import "./App.css";
import {SmurfList} from './SmurfList'
import {Route, Link} from "react-router-dom"
import {Context} from "./contexts/Context.js"
import {SmurfForm} from "./SmurfForm"
import axios from "axios"

function App() {
    const [smurfs, setSmurfs] = useState([]);
	useEffect(() => {
    const fetchSmurfs = async () => {
    const result = await axios(
        'http://localhost:3333/smurfs',
    );
    setSmurfs(result.data);
    };
    fetchSmurfs();
}, []);

const addSmurf = (event, name, age, height) => {
    const newSmurf = {
    name: name, 
    age: age,
    height: height
    }
    event.preventDefault();
    axios 
    .post('http://localhost:3333/smurfs', newSmurf)
    .then (res => {
        setSmurfs(res.data)
    })
    .catch(err => {
        console.log(err.response)
    })
}	  



return (
		<div className="App">
			<Context.Provider value={{smurfs, addSmurf}}>
          {/* Routes */}
        <Link to="/form">Add a Smurf</Link>
        <Route
			exact
			path="/form"
			component={SmurfForm}
			/>

        <Link to="/">Go to the List</Link>
					<Route
						exact
						path="/"
						component={SmurfList}
					/>
       
			</Context.Provider>
		</div>
	);
}	
export default App;