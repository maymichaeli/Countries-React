import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';  // For Dropdown.jsx


export const Dropdown = ({onFilter}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilter = (region) => {
        onFilter(region);
        setIsOpen(false);
    };

    return (
        <div className={`dropdown-wrapper ${isOpen ? "open" : ""}`}>
            <div
                className="dropdown-header flex flex-jc-sb flex-ai-c"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>Filter by Region</span>
                <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </div>
            {isOpen && (
                <div className="dropdown-body">
                    <ul>
                        {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
                            (region) => (
                                <li key={region} onClick={() => handleFilter(region.toLowerCase())}>
                                    {region}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};