// //App.js 

// import { Oval } from 'react-loader-spinner'; 
// import React, { useState } from 'react'; 
// import axios from 'axios'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faFrown } from '@fortawesome/free-solid-svg-icons'; 
// import './App.css'; 

// function GfGWeatherApp() { 
// 	const [input, setInput] = useState(''); 
// 	const [weather, setWeather] = useState({ 
// 		loading: false, 
// 		data: {}, 
// 		error: false, 
// 	}); 

// 	const toDateFunction = () => { 
// 		const months = [ 
// 			'January', 
// 			'February', 
// 			'March', 
// 			'April', 
// 			'May', 
// 			'June', 
// 			'July', 
// 			'August', 
// 			'September', 
// 			'October', 
// 			'November', 
// 			'December', 
// 		]; 
// 		const WeekDays = [ 
// 			'Sunday', 
// 			'Monday', 
// 			'Tuesday', 
// 			'Wednesday', 
// 			'Thursday', 
// 			'Friday', 
// 			'Saturday', 
// 		]; 
// 		const currentDate = new Date(); 
// 		const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()] 
// 			}`; 
// 		return date; 
// 	}; 

// 	const search = async (event) => { 
// 		if (event.key === 'Enter') { 
// 			event.preventDefault(); 
// 			setInput(''); 
// 			setWeather({ ...weather, loading: true }); 
// 			const url = 'https://api.openweathermap.org/data/2.5/weather'; 
// 			const api_key = 'f00c38e0279b7bc85480c3fe775d518c'; 
// 			await axios 
// 				.get(url, { 
// 					params: { 
// 						q: input, 
// 						units: 'metric', 
// 						appid: api_key, 
// 					}, 
// 				}) 
// 				.then((res) => { 
// 					console.log('res', res); 
// 					setWeather({ data: res.data, loading: false, error: false }); 
// 				}) 
// 				.catch((error) => { 
// 					setWeather({ ...weather, data: {}, error: true }); 
// 					setInput(''); 
// 					console.log('error', error); 
// 				}); 
// 		} 
// 	}; 

// 	return ( 
// 		<div className="App"> 
// 			<h1 className="app-name"> 
// 				 Weather App React Js Project 
// 			</h1> 
// 			<div className="search-bar"> 
// 				<input 
// 					type="text"
// 					className="city-search"
// 					placeholder="Enter City Name.."
// 					name="query"
// 					value={input} 
// 					onChange={(event) => setInput(event.target.value)} 
// 					onKeyPress={search} 
// 				/> 
// 			</div> 
// 			{weather.loading && ( 
// 				<> 
// 					<br /> 
// 					<br /> 
// 					<Oval type="Oval" color="black" height={100} width={100} /> 
// 				</> 
// 			)} 
// 			{weather.error && ( 
// 				<> 
// 					<br /> 
// 					<br /> 
// 					<span className="error-message"> 
// 						<FontAwesomeIcon icon={faFrown} /> 
// 						<span style={{ fontSize: '20px' }}>City not found</span> 
// 					</span> 
// 				</> 
// 			)} 
// 			{weather && weather.data && weather.data.main && ( 
// 				<div> 
// 					<div className="city-name"> 
// 						<h2> 
// 							{weather.data.name}, <span>{weather.data.sys.country}</span> 
// 						</h2> 
// 					</div> 
// 					<div className="date"> 
// 						<span>{toDateFunction()}</span> 
// 					</div> 
// 					<div className="icon-temp"> 
// 						<img 
// 							className=""
// 							src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} 
// 							alt={weather.data.weather[0].description} 
// 						/> 
// 						{Math.round(weather.data.main.temp)} 
// 						<sup className="deg">°C</sup> 
// 					</div> 
// 					<div className="des-wind"> 
// 						<p>{weather.data.weather[0].description.toUpperCase()}</p> 
// 						<p>Wind Speed: {weather.data.wind.speed}m/s</p> 
// 					</div> 
// 				</div> 
// 			)} 
// 		</div> 
// 	); 
// } 

// export default GfGWeatherApp;

// import PersonList from "./PersonList";

// export default function App() {
//   return (
//     <div ClassName="App">
//       <PersonList/>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTask = () => {
//     if (inputValue.trim() !== '') {
//       setTasks([...tasks, { id: Date.now(), title: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   };

//   const completeTask = id => {
//     const updatedTasks = tasks.map(task => {
//       if (task.id === id) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const removeTask = id => {
//     const updatedTasks = tasks.filter(task => task.id !== id);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="app">
//       <h1>Simple To-Do List</h1>
//       <div className="add-task">
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//           onKeyDown={e => {
//             if (e.key === 'Enter') {
//               addTask();
//             }
//           }}
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="todo-list">
//         {tasks.map(task => (
//           <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
//             <span>{task.title}</span>
//             <div>
//               <button onClick={() => completeTask(task.id)}>
//                 {task.completed ? 'Undo' : 'Complete'}
//               </button>
//               <button onClick={() => removeTask(task.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js 

import './CountryInformation.css'; 
import CountryInformation from './CountryInformation'; 

function App() { 
return ( 
	<div className="App"> 
	<CountryInformation /> 
	</div> 
); 
} 

export default App; 
