import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

/**
 * @function Search
 */

const Search = (props) => {
    const [searchTerms, setSearchTerms] = useState('')
    const [results, setResults] = useState()

    const addSearch = (event) => {
        event.preventDefault()
        console.log('button clicked', searchTerms)
        axios
            .get("http://localhost:8000/search/?query="+searchTerms)
            .then(response => {
                console.log(response)
                console.log("Data:"+response.data)
                setResults(response.data)
            })

    }

    const solid_Search = (event) => {
        event.preventDefault()
        console.log('button clicked', searchTerms)
        axios
            .get("http://localhost:8000/solid_search/?query="+searchTerms)
            .then(response => {
                console.log(response)
                console.log("Data:"+response.data)
                setResults(response.data)
            })

    }

    const handleKeyDown = (event) => {
        if (event.key == "Enter"){
            event.preventDefault()
            console.log("press Enter", searchTerms)
            axios
            .post("http://localhost:8080/", searchTerms)
            .then(response =>{
                console.log("response is", response)
                setResults(response.data)
            })
        }
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setSearchTerms(event.target.value)
    }

    return (
        <div>
            <div className='bg-gradient-to-r from-cyan-700'>
                <div className='flex justify-center items-center h-[300px]'>
                    <input value={searchTerms} onKeyDown={handleKeyDown} onChange={handleChange} className='w-[480px] h-[50px] rounded-l-full shadow-lg shadow-zinc-300 outline-none
                        font-thin text-xl px-4' placeholder='quote; book name; author; published year...'></input>
                    <button onClick={addSearch} className='h-[50px] w-[100px] bg-sky-600 rounded-r-full text-xl font-bold
                        shadow-lg shadow-zinc-300 text-white hover:bg-sky-800'>Search</button>
                </div>
            </div>
            {results && results["expand"] ? <h3>You mean {results["expand"]}</h3>:undefined}
            {results && results["expand"] ? <h3>If you feel Sick then <button onClick={solid_Search}>{results["original"]}</button></h3>: undefined}
            <Results results={results} />
        </div>
    )
}

export default Search