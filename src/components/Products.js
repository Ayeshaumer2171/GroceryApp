import React from 'react'
import GrocCards from './GrocCards'

 export default function Products({increment,items}) {
  return (
    <>
    <div className='row row-cols-1 row-cols-md-3 g-4 '>
      {items.map(item=> <GrocCards key={item.id} item={item} increment={increment}/>)}
    </div>
    <br>
    </br>
    
    </>
  )
}
