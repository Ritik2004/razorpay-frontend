import React from 'react'

const Card = ({checkoutHandler}) => {
    const data = [
        {
            "name":"Phone",
            "price":1000,
            "category":"Expensive",
            "img1":  "https://media.wired.com/photos/5f401ecca25385db776c0c46/master/w_2560%2Cc_limit/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg"
        },
        {
            "name":"Laptop",
            "price":12000,
            "category":"Cheap",
            "img1":  "https://t2.gstatic.com/images?q=tbn:ANd9GcRi22Ow6E8LyjcK85K-ZhOFEa7eaIgD83J74Q7vKi0hV_BGXI9O"
        },
        {
            "name":"Ipod",
            "price":9000,
            "category":"music",
            "img1":  "https://images.unsplash.com/photo-1617464985170-8d97d2efd6d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBvZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        }
    ]
  return (
    <div className='card'>
       {
        data.map((c,ind)=>(
          <div className='info'>
            <img src= {c.img1} alt=''/>
            <h1>{c.name}</h1>
            <h2>{c.price}Rs</h2>
            <button onClick={()=>checkoutHandler(c.price)}>Buy</button>
          </div>
        ))
       }
    </div>
  )
}

export default Card 
