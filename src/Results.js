import List from './List'

const Results = ({results}) => {
    if (!results){
        return <h1 className="font-bold flex justify-center items-center text-[42px]"> Boogle</h1>
    }else if (results === "None"){
        return (
            <div>
                <h1 className="font-bold flex justify-center items-center text-[42px]">No Match!</h1>
                <h1 className="font-normal flex justify-center items-center text-[21px]">Please check the search item and search again</h1>
            </div>
        )
    }else {
        return <List results={results}/>
    }
    
}

export default Results