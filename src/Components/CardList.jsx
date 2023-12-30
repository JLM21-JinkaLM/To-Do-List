import React from 'react'
import './card.css'

function CardList({ globalArray, editHandler, deleteHandler }) {

   return (
      <div>
         <div className='carder'>
            {globalArray.length === 0 && <h1 className='noFound'>No Data Found</h1>}
            {
               globalArray.length > 0 && globalArray.map((data, i) => {
                  return <div className="card" style={{display:'flex',width:'300px'}}>
                     <div className="card-header">
                        {data.id}
                     </div>
                     <div className="card-body">
                        <h5 className="card-title">{data.text}</h5>
                        <button onClick={() => { editHandler(data.id) }} className="btn btn-primary mx-1">Edit</button>
                        <button onClick={() => { deleteHandler(data.id) }} className="btn btn-primary mx-1">Delete</button>
                     </div>
                  </div>
               })
            }
            {/* {globalArray.length > 0 &&
               globalArray.map((data, i) => {
                  return <div key={i} className='cardBox'>
                     <h1>{data.text}</h1>
                     <button onClick={() => { editHandler(data.id) }}>Edit</button>
                     <button onClick={() => { deleteHandler(data.id) }}>Delete</button>
                  </div>
               })
            } */}
         </div>
      </div>
   )
}

export default CardList