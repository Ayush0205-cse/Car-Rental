// import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import DefaultLayout from "../components/DefaultLayout";
// import Spinner from "../components/Spinner";
// import { getAllCars } from "../redux/actions/carsActions";
// import moment from "moment";
// import { bookCar } from "../redux/actions/bookingActions";
// import StripeCheckout from "react-stripe-checkout";
// import AOS from 'aos';

// import 'aos/dist/aos.css'; // You can also use <link> for styles
// const { RangePicker } = DatePicker;
// function BookingCar({ match }) {
//   const { cars } = useSelector((state) => state.carsReducer);
//   const { loading } = useSelector((state) => state.alertsReducer);
//   const [car, setcar] = useState({});
//   const dispatch = useDispatch();
//   const [from, setFrom] = useState();
//   const [to, setTo] = useState();
//   const [totalHours, setTotalHours] = useState(0);
//   const [driver, setdriver] = useState(false);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (cars.length == 0) {
//       dispatch(getAllCars());
//     } else {
//       setcar(cars.find((o) => o._id == match.params.carid));
//     }
//   }, [cars]);

//   useEffect(() => {
//     setTotalAmount(totalHours * car.rentPerHour);
//     if (driver) {
//       setTotalAmount(totalAmount + 30 * totalHours);
//     }
//   }, [driver, totalHours]);

//   //Date Picker gives momment object so we need to use momment npm package returns same format
//   //We mentioned diffrent states for calculating difference between From and To
//   function selectTimeSlots(values) {
//     setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
//     setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

//     setTotalHours(values[1].diff(values[0], "hours"));
//   }

  

//   function onToken(token){
//     const reqObj = {
//         token,
//         user: JSON.parse(localStorage.getItem("user"))._id,
//         car: car._id,
//         totalHours,
//         totalAmount,
//         driverRequired: driver,
//         bookedTimeSlots: {
//           from,
//           to,
//         },
//       };
  
//       dispatch(bookCar(reqObj));
//   }

//   return (
//     <DefaultLayout>
//       {loading && <Spinner />}
//       <Row
//         justify="center"
//         className="d-flex align-items-center"
//         style={{ minHeight: "90vh" }}
//       >
//         <Col lg={10} sm={24} xs={24} className='p-3'>
//           <img src={car.image} className="carimg2 bs1 w-100" data-aos='fade-down-right' data-aos-duration='1500'/>
//         </Col>

//         <Col lg={10} sm={24} xs={24} className="text-right">
//           <Divider type="horizontal" dashed>
//             Car Info
//           </Divider>
//           <div style={{ textAlign: "right" }}>
//             <p>{car.name}</p>
//             <p>{car.rentPerHour} Rent Per hour /-</p>
//             <p>Fuel Type : {car.fuelType}</p>
//             <p>Max Persons : {car.capacity}</p>
//           </div>

//           <Divider type="horizontal" dashed>
//             Select Time Slots
//           </Divider>
//           <RangePicker
//             showTime={{ format: "HH:mm" }}
//             format="MMM DD yyyy HH:mm"
//             onChange={selectTimeSlots}
//           />
//           <br />
//           <button
//             className="btn1 mt-2"
//             onClick={() => {
//               setShowModal(true);
//             }}
//           >
//             See Booked Slots
//           </button>
//           {from && to && (
//             <div>
//               <p>
//                 Total Hours : <b>{totalHours}</b>
//               </p>
//               <p>
//                 Rent Per Hour : <b>{car.rentPerHour}</b>
//               </p>
//               <Checkbox
//                 onChange={(e) => {
//                   if (e.target.checked) {
//                     setdriver(true);
//                   } else {
//                     setdriver(false);
//                   }
//                 }}
//               >
//                 Driver Required
//               </Checkbox>

//               <h3>Total Amount : {totalAmount}</h3>

//               <StripeCheckout
//                 shippingAddress
//                 token={onToken}
//                 currency='inr'
//                 amount={totalAmount * 100}
//                 stripeKey="pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ"
//               >
//                   <button className="btn1">
//                 Book Now
//               </button>
//               </StripeCheckout>

              
//             </div>
//           )}
//         </Col>

//         {car.name && (
//           <Modal
//             visible={showModal}
//             closable={false}
//             footer={false}
//             title="Booked time slots"
//           >
//             <div className="p-2">
//               {car.bookedTimeSlots.map((slot) => {
//                 return (
//                   <button className="btn1 mt-2">
//                     {slot.from} - {slot.to}
//                   </button>
//                 );
//               })}

//               <div className="text-right mt-5">
//                 <button
//                   className="btn1"
//                   onClick={() => {
//                     setShowModal(false);
//                   }}
//                 >
//                   CLOSE
//                 </button>
//               </div>
//             </div>
//           </Modal>
//         )}
//       </Row>
//     </DefaultLayout>
//   );
// }

// export default BookingCar;


import { Col, Row, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles
const { RangePicker } = DatePicker;
function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id === match.params.carid));
    }
  }, [cars]);

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  }



  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(bookCar(reqObj));
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        {/* <div>

          <div className="booking-box">
            <div className="car-image-container">
              <img src={car.image} className="carimg2 b-1 w-100" data-aos='flip-left' data-aos-duration='1500' />
            </div>

            {/* Payment button */}
        {/* <button className="payment-button">Pay Now</button> 
          </div>  */}

        <Col lg={10} sm={24} xs={24} className='imga'>
          <img src={car.image} className="carimg2 bs1 w-100" data-aos='flip-left' data-aos-duration='1500' alt=""/>
        </Col>

        <Col lg={10} sm={50} xs={24} className="display">

          <div className="car-detail">
          <h3><b>{car.name}</b></h3>
          <p>Fuel Type : {car.fuelType}  </p>
          <p>Capacity : {car.capacity}</p>
          <p> Charges : Rs. {car.rentPerHour} /hr</p>
          </div>
          {/* <div className="car-details">
              <h3><b>{car.name}</b></h3>
              <p>Fuel Type : {car.fuelType}</p>
              <p>Max Persons : {car.capacity}</p>
              <p>{car.rentPerHour} Rent Per hour /-</p>
              {/* Payment button */}
          {/* <button className="payment-button">Pay Now</button> 
            </div>  */}

          
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
          />
          <br />
          <button className="btnSee m-5" onClick={() => { setShowModal(true); }} >
            See Booked Slots
          </button>
          {from && to && (
            <div>
              <p className="seeinfo">
                Total Hours : <b>{totalHours}</b>
              </p>
              <p className="seeinfo">
                Rent Per Hour : <b>{car.rentPerHour}</b>
              </p>
              <Checkbox
              className="check"
                onChange={(e) => {
                  if (e.target.checked) {
                    setdriver(true);
                  } else {
                    setdriver(false);
                  }
                }}
              >
                Driver Required
              </Checkbox>

              <h4 className="totalAmount">Total Rs. {totalAmount}</h4>
              <button className="Paymentbtn ">Book Now</button>

              <StripeCheckout
                shippingAddress
                token={onToken}
                currency='inr'
                amount={totalAmount * 100}
                stripeKey="pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ"
                // stripeKey="pk_test_51P02U7SJbIBcmhCCuRP1CCKGU4vIY3T0QZ5RIaT663x7uYM2AChb2keJ2GdggI456WpcHQ6xRdT05o1FvUG0wKDb00SQTarR79"
              >
                  <button className="btn1">
                Book Now
              </button>
              </StripeCheckout> 


            </div>
          )}
        </Col>
        {/* </div> */}

        {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )} 
      </Row>
    </DefaultLayout >
  );
}

export default BookingCar;