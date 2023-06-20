import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Paymentsuccess = () => {

    const searchQuery = useSearchParams()[0];


    const referenceNum = searchQuery.get("reference")
  return (
 
    <div className='order'>
      <h1>Order success</h1>
      <h3>Reference nos:{referenceNum}</h3>
    </div>
    
  )
}

export default Paymentsuccess
