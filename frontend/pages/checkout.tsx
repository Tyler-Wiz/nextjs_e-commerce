import React, { FC, useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector, getTotals } from "@/Redux/reducer/cartSlice";
import BillingForm from "@/components/Form/BillingForm";
import { getFromLocalStorage } from "@/Helpers/useLocalStorage";

const Checkout: FC = () => {
  const cartItems = useSelector(cartSelector);
  const cart = cartItems.cartItem;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
    getFromLocalStorage("cartItems");
  }, [cartItems, dispatch]);

  let shipping = 100;

  return (
    <Layout title="CheckOut">
      <div className="flex flex-col md:flex-row md:mx-auto md:max-w-[80%] font-display py-20 gap-10">
        <div className="md:w-3/5 w-[90%] mx-auto">
          <BillingForm cart={cart} />
        </div>
        <div className="md:w-2/5 w-[90%] mx-auto">
          <h3 className="chechouth3 underline">Cart Total</h3>
          <div className="px-8 py-10 mt-10 bg-stone-200">
            <div className="">
              <div className="flex justify-between mb-10">
                <h3 className="chechouth3">Product</h3>
                <h3 className="chechouth3">Total</h3>
              </div>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <p className="checkoutp mb-2">
                    {item.name} x {item.cartQuantity}
                  </p>
                  <p className="checkoutp mb-2">{item.price}</p>
                </div>
              ))}

              <div className="checkoutTb">
                <p className="checkoutp">SubTotal</p>
                <p className="checkoutp">{cartItems.cartTotalAmount}</p>
              </div>
              <div className="checkoutTb">
                <p className="checkoutp">Shipping Fee</p>
                <p className="checkoutp font-semibold">{shipping}</p>
              </div>
              <div className="flex justify-between mt-10">
                <h3 className="chechouth3">Grand Total</h3>
                <h3 className="chechouth3">
                  {cartItems.cartTotalAmount + shipping}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
