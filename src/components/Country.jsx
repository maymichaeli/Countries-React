import React from 'react'

export const Country = ({ cardData }) => {
  const { name, flag, population, region, capital } = cardData;

  return (
      <>
          <a href="details.html" className="country scale-effect" data-country-name={name}>
              <img className="country-flag" src={flag} alt="card" />
              <div className="country-info">
                  <h2 className="country-title">{name}</h2>
                  <ul className="country-brief">
                      <li><strong>Population: </strong>{population}</li>
                      <li><strong>Region: </strong>{region}</li>
                      <li><strong>Capital: </strong>{capital}</li>
                  </ul>
              </div>
          </a>
      </>
  );
};