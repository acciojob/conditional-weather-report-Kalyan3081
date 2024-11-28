import React from 'react'

const WeatherDisplay=(props)=>{
  const {info}=props

  const style={
    color: info.temperature  20 ? "red" :"blue"  
};
return (
        <div>
            <p>Temperature: <span style={tempStyle}>{info.temperature}</span></p>
            <p>Conditions: {info.conditions}</p>
        </div>
    );
};
  
export default WeatherDisplay;
