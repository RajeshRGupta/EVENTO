import React, { useContext, useEffect, useState } from 'react'
import useRazorpay from "react-razorpay";
import NoteContext from '../../context/NotContext'
import CartGet from '../../axios/cart/CartGet'
import axios from 'axios'
import CartDataDelet from '../../axios/cart/CartDataDelet';
import { useNavigate } from 'react-router-dom';

const Payment = () => {



  const [allCartvalues, setAllCartValues] = useState([])
  const [count, setCount] = useState(0)
  const [countdl, setCountdl] = useState(0)
  const [totale, setTotale] = useState(0)
  const [quantity1, setQuantity1] = useState(0)

  const [allTotle, setAllTotle] = useState(500)

  const [servisCharg,setServisCharg]=useState(0)

  const [gst,setGst]=useState(0)
  const [gID,setGID]=useState(null)

  const  navigate=useNavigate(null)

  const [Razorpay] = useRazorpay();



  useEffect(() => {
    const GetCartValues = (value) => {
      setAllCartValues(value)
      const quantity = (value.map((data) => data.quantity))
      const price = (value.map((data) => data.events.price))
      var totle1 = 0
      for (var i = 0; i < quantity.length; i++) {
        totle1 += (quantity[i] * price[i])
      }
      setGID(value.map((data) => data.events.id)[0])
      setQuantity1(quantity[0])
      setTotale(totle1)
      setServisCharg(parseFloat((totle1 * 5) / 100).toFixed(0))
      setGst(parseFloat((totle1 * 5) / 100).toFixed(0))
      setAllTotle(parseFloat(((totle1 * 5) / 100)+((totle1 * 5) / 100)+totle1).toFixed(0))
    }
    CartGet({ GetCartValues })
  }, [count, countdl])
  

  console.log("setQuantity1:--------------------------",quantity1," ",gID)


  const complete_payment=(payment_id,order_id,signature)=>{
    const authToken = `Bearer ${localStorage.getItem('access_token')}`;  // Ensure the token is correct and stored in localStorage
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken  // Include the token in the request
        },
    };
    console.log('///////////////////////////////////////////')
    console.log({
      "payment_id": payment_id,
      "order_id": order_id,
      "signature": signature,
      "amount": allTotle,
      "events": gID,
      "quantity":quantity1
    });
    axios.post('http://127.0.0.1:8000/order/completed/',{
      "payment_id": payment_id,
      "order_id": order_id,
      "signature": signature,
      "amount": allTotle,
      "events":gID,
      "quantity":quantity1
    },config)
    .then((response)=>{
      allCartvalues.map((data)=>CartDataDelet(data.id))
      navigate('/User-dashbord-all/Tekets')
    })
    .catch((error)=>{
      console.log("error:-",error.response)
    })
  }


  const razorpayPayment=()=>{
    const authToken = `Bearer ${localStorage.getItem('access_token')}`;
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': authToken
        },
    };
    axios.post('http://127.0.0.1:8000/order/create/',{"amount": Number(allTotle),"currency": "INR"},config)
    .then((response)=>{
      console.log(response)

      const order_id=response.data.data.id

      console.log("order_id",order_id)

      const options = {
        key: "rzp_test_zHQ3I5uHbddZoq", // Enter the Key ID generated from the Dashboard
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          complete_payment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          )
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
    
      const rzp1 = new Razorpay(options);
    
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
    
      rzp1.open();
  
    })
    .catch((error)=>{
      console.log(error)
    })
  }




  return (
    <div className='py-5 d-flex justify-content-center'>
      <div className="" style={{ width: '50%', }}>
        <div class="card">
          <div class="card-header">
            <h4>TICKETS</h4>
          </div>

          <div class="card-body p-3">
            <div className=" border rounded p-3">
              <div className="row">

                {
                  allCartvalues &&
                  allCartvalues.map((data, inx) => (
                  <>
                    <div className="col-6 d-flex justify-content-start m-0"><h6 class="card-title m-0" >{data.events.title}</h6></div>
                    <div className="col-6 d-flex justify-content-end mt-1" > </div>
                    <div className="col-6 d-flex justify-content-start m-0"><p class="card-text px-2"> {data.quantity} Tekets</p></div>
                    <div className="col-6 d-flex justify-content-end" >₹ {data.events.price}</div>
                  </>
                  ))}
                <div className="col-6 d-flex justify-content-start mt-2"><h6 class="card-title m-0" >TOTLE</h6></div>
                <div className="col-6 d-flex justify-content-end mt-2" >+ ₹ {totale}</div>
              </div>
            </div>
          </div>
          <div class="card-body p-3">
            <div className=" border rounded p-3">
              <div className="row">
                <div className="col-6 d-flex justify-content-start m-0 mb-3"><h6 class="card-title m-0" >CHARGES & TEX</h6></div>
                <div className="col-6 d-flex justify-content-end" > </div>
                <div className="col-6 d-flex justify-content-start m-0"><p class="card-text px-2">SERVIS CHARG 5% </p></div>
                <div className="col-6 d-flex justify-content-end" >₹ {servisCharg}</div>
                <div className="col-6 d-flex justify-content-start m-0"><p class="card-text px-2">GST 5% </p></div>
                <div className="col-6 d-flex justify-content-end" >₹ {gst}</div>
                <div className="col-6 d-flex justify-content-start m-0"><p class="card-text px-2">TOTLE</p></div>
                <div className="col-6 d-flex justify-content-end" >+ ₹ {(parseFloat((((totale * 5) / 100) + ((totale * 5) / 100))).toFixed(0))}</div>
              </div>
            </div>
          </div>

          <div class="card-body p-3">
            <div className=" border rounded p-3">
              <div className="row">
                <div className="col-6 d-flex justify-content-start m-0"><h6 class="card-title m-0" >TOTLE</h6></div>

                <div className="col-6 d-flex justify-content-end" >₹ {allTotle}</div>
              </div>
            </div>
          </div>


          <div class="card-body p-3">
            <div className=" border rounded">
              <div className="btn m-0 w-100 btn-secondary px-4 fs-5 fw-bold" onClick={razorpayPayment} >Continue</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Payment
