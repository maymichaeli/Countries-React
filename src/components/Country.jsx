import React from 'react'

export const Country = ({cardData}) => {
  return (
    <div className="country">
      <img className="country-flag" src={cardData.flag}  alt="card"/>
      <div className="country-info">
        <h1 className="country-title">{cardData.name}</h1>
        <ul className="country-brief">
          <li>Population: {cardData.population}</li>
          <li>Region: {cardData.region}</li>
          <li>Capital: {cardData.capital}</li>
        </ul>
      </div>
     
    </div>
  )
}