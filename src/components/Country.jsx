import React from 'react'

export const Country = ({cardData}) => {
  return (
    <>
    <a href="details.html" className="country scale-effect" data-country-name={cardData.name}>
    <img className="country-flag" src={cardData.flag}  alt="card"/>
      <div className="country-info">
        <h2 className="country-title">{cardData.name}</h2>
        <ul className="country-brief">
          <li><strong>population: </strong>{cardData.population}</li>
          <li><strong>Region:</strong> {cardData.region}</li>
          <li><strong>Capital:</strong> {cardData.capital}</li>
        </ul>
      </div>
    </a>
    </>
  )
}