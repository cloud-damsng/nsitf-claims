import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';


import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


const HomePage =() =>{
  return(
  <div>
    <h1>HOME PAGE</h1>
  </div>
  )
  };

  const TopicsPage =() =>{
    return(
    <div>
    <h1>TOPICS PAGE</h1>
    </div>
    )
    };

    const TopicDetailsPage =() =>{
      return(
      <div>
        <h1>TOPIC DETAILS PAGE</h1>
      </div>
      )
      };



class  App extends Component {
render() {
 return (
<Router>
		<div>
		<Routes>
				<Route exact path='/' element={< HomePage />}></Route>
				<Route exact path='/topics' element={< TopicsPage />}></Route>
				<Route exact path='/details' element={< TopicDetailsPage />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;

