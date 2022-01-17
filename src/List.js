import React, { useState } from 'react'

/**
 * @function List
 */
const featuredImages = ['img-1', 'img-2', 'img-3'];
const List = (props) => {
  console.log(props)
  return <div className="p-2  max-w-3xl my-4 bg-white shadow-lg flex items-center space-x-4">
    {/*  */}
    <div className="shrink-0 mx-2">
      <img className="h-12 w-12" src="https://source.unsplash.com/random" alt="ChitChat Logo" />
    </div>
    <div>
      <div className="text-xl font-medium text-black">{props.results}</div>
      <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officia labore culpa voluptas sequi possimus pariatur assumenda laudantium rem nostrum cum corporis autem distinctio, molestiae accusamus temporibus? Aliquam, architecto autem?</p>
    </div>
  </div>
}

export default List