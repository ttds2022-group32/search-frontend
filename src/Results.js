import List from './List'
const Results = ({results}) => {
    if (!results){
        return <h1>Great search engine</h1>
    }else if (results[0].length === 0){
        // server handling not found as {"0":[]}
        return <h1>Results not found</h1>
    }else {
        return  <List results={results}/>
    }
    
}

export default Results