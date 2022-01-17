/**
 * @function Search
 */

const Search = () => {
    return (
        <div className='bg-zinc-200 h-[100vh] w-[100vw]'>
            <div className='absolute inset-60'>
                <input className='w-[400px] h-[50px] rounded-l-full shadow-lg shadow-zinc-300 outline-none
                font-thin text-xl px-4' placeholder='book name; author; published year...'></input>
                <button className='h-[50px] w-[100px] bg-zinc-400 rounded-r-full text-xl font-thin
                shadow-lg shadow-zinc-300 text-white hover:bg-zinc-500'>Search</button>
            </div>    
        </div>
    )
}

export default Search