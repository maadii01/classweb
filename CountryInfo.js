// CountryInfo.js 

import React from 'react'; 

function CountryInfo({ countryData }) { 
	const formattedPopulation = countryData.population.toLocaleString();
	const fotmattedData= countryData.area.toLocaleString();
	return ( 
		<div> 
			<img src={countryData.flags.svg} alt="Flag" className="flagImage" /> 
			<h2>{countryData.name.common}</h2> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Capital:</h4> 
					<span>{countryData.capital[0]}</span> 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Continent:</h4> 
					<span>{countryData.continents[0]}</span> 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Population:</h4> 
					<span>{formattedPopulation}</span> 
				</div> 
			</div> 
			
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Common Languages:</h4> 
					<span> 
						{Object.values(countryData.languages) 
							.toString() 
							.split(',') 
							.join(', ')} 
					</span> 
				</div> 
			</div> 
			
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Area Per Sqaure Meter:</h4> 
					<span>{fotmattedData}</span> 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Country Code:</h4> 
					<span>{countryData.idd.root}{countryData.idd.suffixes[0]}</span> 
				</div> 
			</div> 
			
			<div className="row"> 
				<div className="dataRow"> 
					<h4>TimeZones:</h4> 
					<span> 
						{Object.values(countryData.timezones) 
							.toString() 
							.split(',') 
							.join(', ')} 
					</span> 
				</div> 
			</div> 
		</div> 
	); 
} 

export default CountryInfo;
        