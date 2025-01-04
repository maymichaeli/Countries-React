export const Modal = ({ name, flag, population, region, capital, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
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
        </div>
    );
};
