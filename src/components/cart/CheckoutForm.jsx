import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart());
  };

  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_sOftcxs9pThVI9v4WLwV5Tb100XyKLkA3B"
        amount={total * 100}
        name="SWEssentials Ecommerce Website"
        email="sweedarbk@gmail.com"
        description="Payment Test"
      >
        <button className="w-full py-30 my-3 font-medium">
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
