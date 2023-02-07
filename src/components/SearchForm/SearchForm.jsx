import React, { useRef, useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.js';
import "./SearchForm.css";


const SearchForm = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();
        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            setSearchTerm("Javascript");
            setResultTitle("Please Enter Something ...");
        } else {
            setSearchTerm(searchText.current.value);
        }

        navigate("/book");
    };
    // Usage
    function App() {
        // State value and setter for our example
        const [count, setCount] = useState(0);
        // Get the previous value (was passed into hook on last render)
        const prevCount = usePrevious(count);
        // Display both current and previous count value
        return (
            <div>
                <h1>
                    Now: {count}, before: {prevCount}
                </h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    }
    // Hook
    function usePrevious(value) {
        // The ref object is a generic container whose current property is mutable ...
        // ... and can hold any value, similar to an instance property on a class
        const ref = useRef();
        // Store current value in ref
        useEffect(() => {
            ref.current = value;
        }, [value]); // Only re-run if value changes
        // Return previous value (happens before update in useEffect above)
        return ref.current;
    }
    function resetInputField() { };
    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handleSubmit}{...App} {...InputField} {...resetInputField}>
                        <div className='search-form-elem flex flex-sb bg-white'>
                            <input type="text" className='form-control' placeholder='Javascript' ref={searchText} />
                            <button type="submit" className='flex flex-c' onClick={handleSubmit}{...App} {...InputField} {...resetInputField}>
                                <FaSearch className='text-purple' size={25} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

function InputField() {
    // State to store value from the input field
    const [inputValue, setInputValue] = useState("");

    // Input Field handler
    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    // Reset Input Field handler
    const resetInputField = () => {
        setInputValue("");
    };

    return (
        <div>
            {/* Input Field */}
            <input type="text" value={inputValue} onChange={handleUserInput} />

            {/* Reset button */}
            <button onClick={resetInputField}>reset</button>
        </div>
    );
}
export default SearchForm