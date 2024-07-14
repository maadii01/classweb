// CountryInformation.js 

import React, { useState } from 'react'; 
import './CountryInformation.css'; 
import CountryInfo from './CountryInfo'; 

function CountryInformation() { 
	const [countryName, setCountryName] = useState(''); 
	const [countryData, setCountryData] = useState(null); 
	const [error, setError] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);

	const handleSearch = () => { 
		if (!countryName) { 
			setError('The input field cannot be empty'); 
			setCountryData(null); 
			return; 
		} 

      
		setIsLoading(true);

		setTimeout(() => { const finalURL = `https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`; 
		fetch(finalURL) 
			.then((response) => response.json()) 
			.then((data) => { 
                setIsLoading(false);
				if(data.message === "Not Found"){ 
					setError("Country Information is not Found"); 
					setCountryData(null); 
				}else if (data.length === 0) { 
					setError('Please enter a valid country name.'); 
					setCountryData(null); 
				} else { 
					setError(''); 
					setCountryData(data[0]); 
				} 
			}) 
			.catch(() => {
				setIsLoading(false); 
				setError('An error occurred while fetching data.');
				setCountryData(null);
			});
	}, 400);
};
const handleKeyPress = (e) => {
	if (e.key === 'Enter') {
		handleSearch();
	}
};
	return ( 
		<div className="container"> 
			<div className="search"> 
				<input 
					type="text"
					id="countryName"
					placeholder="Enter a country name here..."
					value={countryName} 
					onChange={(e) => setCountryName(e.target.value)}
                    onKeyPress={handleKeyPress}
                /> 
				<button id="search-btn" onClick={handleSearch}> 
					Search 
				</button> 
			</div> 
			<div id="result"> 
            {isLoading && <div className="loader"></div>} 
				{error && !isLoading && <h3>{error}</h3>} 
                {countryData && !isLoading && <CountryInfo countryData={countryData} />} 
			</div> 
		</div> 
	); 
} 

export default CountryInformation; 
