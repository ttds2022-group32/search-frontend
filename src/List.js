import React, { useState } from 'react'

/**
 * @function List
 */
const featuredImages = ['img-1', 'img-2', 'img-3'];
const List = () => {
  return <div class="p-2 mx-auto rounded-full bg-white shadow flex items-center space-x-4">
    {/*  */}
    <div class="shrink-0">
      <img class="h-12 w-12" src="../public/logo512.png" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">A Wizard of the EarthSea</div>
      <p class="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officia labore culpa voluptas sequi possimus pariatur assumenda laudantium rem nostrum cum corporis autem distinctio, molestiae accusamus temporibus? Aliquam, architecto autem?</p>
    </div>
  </div>
}

export default List