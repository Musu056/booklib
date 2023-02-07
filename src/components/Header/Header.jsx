import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";


const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-black'>
                    <h2 className='header-title text-capitalize'>All the Books you want are here.</h2>
                    <p><b><ul><h3>Trending subjects</h3>
                        <li>Javascript </li>
                        <li>Harry Potter</li>
                        <li>Indian History</li>
                        <li>Crypto Currency</li>
                        <li>Criminal Law</li></ul>
                    </b> </p><br></br>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header