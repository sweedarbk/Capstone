import { useDispatch, useSelector } from "react-redux";
import { CartActions, clearCart, selectTotalPrice } from "../redux/slice/cartSlice";
import BgImage from "../assets/defaultImages/background.png";
import { BodyOne, Title } from "../components/pageDefaults/CustomComponents";
import { HiOutlinePlus } from "react-icons/hi2";
import { LuMinus } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { CheckoutForm } from "../components/cart/CheckoutForm";

export const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const handlePaymentSuccess = () => {
    console.log("Payment Success")
    clearCart()
  }
  return (
    <>
      <section className="py-20 bg-zinc-800">
        <section className="mt-16">
          <div className="h-[50vh]">
            <div className="images absolute top-0 left-0 w-full h-1/2">
              <img
                src={BgImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text absolute top-48 left-[25%]">
              <Title level={1}>YOU HAVE GREAT TASTE</Title>
            </div>
          </div>
          <div className="container flex justify-between">
            <div className="w-2/3">
              <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-sm text-white-100 uppercase">
                    <tr>
                      <th scope="col" className="px-16 py-5">
                        Thumbnail
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Subtotal
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <CartPageCard
                        key={item?.id}
                        id={item?.id}
                        cover={item?.cover}
                        name={item?.name}
                        price={item?.price}
                        quantity={item?.quantity}
                        totalPrice={item?.totalPrice}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-2/6 ml-16">
              <div className="bg-purple-800 p-5">
                <p className="text-lg font-medium text-white-100">Cart Total</p>
                <hr className="my-2 h-[2px]" />
                <div className="text-lg font-medium text-white-100 flex items-center gap-5">
                  <p className="w-32">Subtotal</p>{" "}
                  <p className="text-sm font-normal">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <hr />
                <div className="text-lg font-medium text-white-100 flex items-center gap-5 mt-2">
                  <p className="w-32">Shipping</p>{" "}
                  <p className="text-sm font-normal">
                    Enter your address to view shipping options.
                  </p>
                </div>
                <hr className="my-3 h-[2px]" />
                <div className="text-lg font-medium text-white-100 flex items-center gap-5">
                  <p className="w-32">Total:</p>{" "}
                  <p className="text-sm font-normal">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>

                <button className="primary-btn mt-5">
                  <CheckoutForm
                    total={totalPrice}
                    handlePaymentSuccess={handlePaymentSuccess}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export const CartPageCard = ({
  id,
  cover,
  name,
  price,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const incCartItems = () => {
    dispatch(CartActions.addToCart({ id, name, price }));
  };
  const removeCartItem = () => {
    dispatch(CartActions.removeFromCart(id));
  };
  const removeCartItems = () => {
    dispatch(CartActions.removeFromAllCart(id));
  };
  return (
    <>
      <tr className="bg-zinc-800 border-b">
        <td className="p-4">
          {cover?.slice(0, 1).map((image, i) => (
            <img
              key={i}
              src={image.image}
              alt={i}
              className="w--24 h-24 object-cover"
            />
          ))}
        </td>
        <td className="px-6 py-4">
          <BodyOne>{name}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${price.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={removeCartItem}
              className="w-12 h-12 grid place-content-center bg-zinc-800 text-primary-purple border border-white-100"
            >
              <LuMinus size={24} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 h-12 bg-zinc-800 text-white-100 outline-none border border-white-100 px-6"
            />
            <button
              onClick={incCartItems}
              className="w-12 h-12 grid place-content-center bg-zinc-800 text-primary-purple border border-white-100"
            >
              <HiOutlinePlus size={22} />
            </button>
          </div>
        </td>
        <td className="px--6 py-4">
          <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={removeCartItems}
            className="w-12 h-12 bg-primary-purple rounded full flex items-center justify-center text-white-100"
          >
            <IoCloseOutline size={25} />
          </button>
        </td>
      </tr>
    </>
  );
};
