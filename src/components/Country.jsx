import React, { useState } from 'react'
import { Modal } from './Modal';

export const Country = ({ cardData }) => {
    const { name, flag, population, region, capital } = cardData;

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true); // isModalOpen=true
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }
    return (
        <>
            <div href="details.html" className="country scale-effect" data-country-name={name} onClick={handleOpenModal}>
                <img className="country-flag" src={flag} alt="card" />
                <div className="country-info">
                    <h2 className="country-title">{name}</h2>
                    <ul className="country-brief">
                        <li><strong>Population: </strong>{population}</li>
                        <li><strong>Region: </strong>{region}</li>
                        <li><strong>Capital: </strong>{capital}</li>
                    </ul>
                </div>
            </div>

            {isModalOpen && (
               <Modal
               name={name}
               flag={flag}
               population={population}
               region={region}
               capital={capital}
               onClose={handleCloseModal}
           />
            )}
        </>
    );
};