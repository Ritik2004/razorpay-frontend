import React from 'react'
import Card from './Card'
import axios from 'axios'
const Home = () => {
 
    const checkoutHandler = async (amount) => {

      const {data:{key}} = await axios.get("http://localhost:4000/api/getkey")
      const {data :{order}} = await axios.post("http://localhost:4000/api/checkout",{
            amount
         })
         const options = {
          key, // Enter the Key ID generated from the Dashboard
          amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Ritik Gaur",
          description: "Test Transaction",
          image: "https://drive.google.com/file/d/1xyox0notTQiWRCsA_yEVrkTVZGRwwAp_/view?usp=sharing",
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: "http://localhost:4000/api/paymentverification",
          prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "9000090000"
          },
          notes: {
              "address": "Razorpay Corporate Office"
          },
          theme: {
              "color": "#3399cc"
          }
      };
      const razor = new window.Razorpay(options);
   
          razor.open();
     
      
     
    }
  return (
    <div>
      <Card checkoutHandler={checkoutHandler}/>
    </div>
  )
}

export default Home
