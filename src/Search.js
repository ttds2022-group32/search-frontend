import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import boogle from "./images/Boogle.jpg";
import logo from "./images/logo_pic.png"


/**
 * @function Search
 */

const Search = (props) => {
    const [searchTerms, setSearchTerms] = useState('')
    const [results, setResults] = useState()

    const ip_address = "http://104.155.22.157:80/"

    const addSearch = (event) => {
        event.preventDefault()
        console.log('button clicked', searchTerms)
        axios
            .get(ip_address+"search/?query="+searchTerms)
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
            .get(ip_address+"solid_search/?query="+searchTerms)
            .then(response => {
                console.log(response)
                console.log("Data:"+response.data)
                setResults(response.data)
            })

    }


    const handleChange = (event) => {
        console.log(event.target.value)
        setSearchTerms(event.target.value)
    }

    var expand_query = results && results["expand"] ? results["expand"] : undefined
    var original_query = results && results["expand"] ? results["original"] : undefined
    console.log(expand_query)
    console.log(original_query)
    let change = results && results["expand"] && results["expand"] !== results["original"]
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-gradient-to-r from-cyan-700'>
            <div className="flex">
                <img src={boogle} alt = "" width="150"/>
                
            </div>
            <img src={logo} alt ="" width="500"/>
                <div className='flex justify-center items-center-top h-[150px]'>
                    <input value={searchTerms} onChange={handleChange} className='w-[480px] h-[50px] rounded-l-full shadow-lg shadow-zinc-300 outline-none
                        font-thin text-xl px-4' placeholder='quote; book name; author; published year...'></input>
                    <button onClick={addSearch} className='h-[50px] w-[100px] bg-sky-600 rounded-r-full text-xl font-bold
                        shadow-lg shadow-zinc-300 text-white hover:bg-sky-800'>Search</button>
                </div>
            </div>
            
            {change ? <div>
                    <div className= 'text-xl'>Showing results for  <b>{results["expand"]}</b></div>
                    <div>Search instead for <button className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" onClick={solid_Search}>{results["original"]}</button></div>
                </div> : undefined
            }
            <Results results={results} />
        </div>
    )
}

export default Search