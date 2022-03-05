import Item from './Item'

import React, { useState } from 'react';

/**
 * @function List
 */

const List = (props) => {
/*   const [results, setResults] = useState()
 */
  const data = props.results  
  var booklist = []
  for (var d in data) {
    booklist.push(data[d])
  }

  /* const addSearch = (event) => {
    event.preventDefault()
    axios
        .get("http://localhost:8000/book/book_id="+book._id)
        .then(response => {
            console.log(response)
            setResults(response.data)
        })

  } */

  //console.log(booklist)

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-3" /*onClick={addSearch}*/>
        {booklist.map(book=>(
          <Item key={book._id} title={book.title} year={book.year} author={book.author} content={book.content} image={book.image_src}/>
        ))}
      </div>
    </div>
  )
}

export default List;
