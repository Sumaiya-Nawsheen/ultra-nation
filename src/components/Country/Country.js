import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country">
 <div className="country-container">
            <div>
            <h2>Country Name: {name}</h2>
            <p>Population: {population}</p>
            <p><small>Region {region}</small></p>
            </div>
           
            <div> <img src={flag} alt="/" ></img> </div>
        </div>
           <button onClick= {() => handleAddCountry(props.country)}>Add Country</button>
        </div>
       
    );
};

export default Country;