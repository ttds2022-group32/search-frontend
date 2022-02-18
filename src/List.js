import React, { useEffect, useState } from 'react'
import Item from './Item'

/**
 * @function List
 */
const List = (props) => {

  const data = props.results  
  var booklist = []
  for (var d in data) {
    booklist.push(data[d])
  }

  //console.log(booklist)

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-3">
        {booklist.map(book=>(
          <Item key={book._id} title={book.title} year={book.year} author={book.author} content={book.content} image={book.image_src}/>
        ))}
      </div>
    </div>
  )
}

export default List;
