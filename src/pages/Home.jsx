import React from "react";
import datajson from "../assets/CountriesData.json"
import { Header } from "../components/Header"
import { Filters } from "../components/Filters";
import { CountriesGrid } from "../components/CountriesGrid";
import { useState } from "react";

console.log(datajson)

const Home = () => {
    const [filteredCards, setFilteredCards] = useState(datajson);

    // const handleSearch = (searchValue) => {
    //     const filtered = datajson.filter((card) =>
    //         card.name.toLowerCase().includes(searchValue.toLowerCase())
    //     );
    //     setFilteredCards(filtered);
    // };

    const handleSearch = (searchValue) => {
        const filtered = datajson.filter((card) => {
            const values = Object.values(card).map(value => value.toString().toLowerCase());
            return values.some(value => value.includes(searchValue.toLowerCase()));
        });
        setFilteredCards(filtered);
    };


    const handleFilter = (region) => {
        if (region === "all") {
            setFilteredCards(datajson);
        } else {
            const filtered = datajson.filter(
                (card) => card.region.toLowerCase() === region
            );
            setFilteredCards(filtered);
        }
    };

    return (
        <div>
            <Header />
            <Filters onSearch={handleSearch} onFilter={handleFilter} />
            <div className="main">
                <div className="container">
                    <CountriesGrid countries={filteredCards} />
                </div>
            </div>
        </div>

    );
};


export default Home;
