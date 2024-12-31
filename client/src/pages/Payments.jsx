import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../features/payment/paymentSlice";

const Payments = () => {
  console.log(import.meta.env.VITE_REACT_APP_STRIPE_KEY);
  const dispatch = useDispatch()
  function SubmitToken(token){
        dispatch(handleToken(token));
  }
  return (
    <div>
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => SubmitToken(token)}
        stripeKey={import.meta.env.VITE_REACT_APP_STRIPE_KEY}
        className = ""
      >
        <button className="">Add Credits</button>
        
      </StripeCheckout>
    </div>
  );
};

export default Payments;
