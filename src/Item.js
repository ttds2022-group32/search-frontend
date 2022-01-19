import React from 'react';

const Item = (props) => {
    return (
        <div className="p-2 bg-white shadow-lg rounded-md w-xxl">
            <div className="container grid grid-cols-5 shrink">
                <div className="w-full mx-auto">
                    <img className="rounded-md" src={props.image} alt="" />
                </div>
                <div className="col-span-3">
                    <div className="text-xl font-bold text-black mb-2">
                        {props.title}
                    </div>
                    <ul>
                        <li>
                            <strong>Author: </strong>
                            {props.author}
                        </li>
                        <li>
                            <strong>Published Year: </strong>
                            {props.year}
                        </li>
                        <li>
                            <strong>Description: </strong>
                            {props.content}
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #tag1
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #tag2
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #tag3
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Item;