import React, { useState } from 'react'
import axios from 'axios';
import List from './List';

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
            .post("http://localhost:8080/", searchTerms)
            .then(response => {
                console.log(response)
                setResults(response.data)
            })

    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setSearchTerms(event.target.value)
    }

    return (
        <div className='bg-zinc-200 h-[100vh] w-[100vw]'>
            <div className='absolute inset-60'>
                <input value={searchTerms} onChange={handleChange} className='w-[400px] h-[50px] rounded-l-full shadow-lg shadow-zinc-300 outline-none
                font-thin text-xl px-4' placeholder='book name; author; published year...'></input>
                <button onClick={addSearch} className='h-[50px] w-[100px] bg-zinc-400 rounded-r-full text-xl font-thin
                shadow-lg shadow-zinc-300 text-white hover:bg-zinc-500'>Search</button>

                {results && <List results={results} />}
            </div>

        </div>

    )
}

export default Search