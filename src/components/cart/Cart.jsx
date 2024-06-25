import { IoMdHeartEmpty } from "react-icons/io";
import { BodyOne, CartInv, Title } from "../pageDefaults/CustomComponents";
import { TbShoppingCartCode } from "react-icons/tb";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  CartActions,
  selectTotalPrice,
  selectTotalQuantity,
} from "../../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const openCart = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closedCart = () => {
    setIsClosed(true);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosed(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <button className="relative z-20" onClick={openCart}>
        <IoMdHeartEmpty size={23} />
        <div className="absolute -top-2 -right-1.5">
          <CartInv color="bg-primary-purple">0</CartInv>
        </div>
      </button>
      <button className="relative z-20" onClick={openCart}>
        <TbShoppingCartCode size={23} />
        <div className="absolute -top-2 -right-1.5">
          <CartInv color="bg-primary-purple">{totalQuantity}</CartInv>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closedCart}></div>
          <div className={`cart p-16 text-primary ${isClosed ? "closed" : ""}`}>
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "cart" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("cart")}
              >
                SHOPPING CART
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary-purple">
                  {totalQuantity}
                </span>
              </button>
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "wishlist" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("wishlist")}
              >
                WISHLIST
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary-purple">
                  0
                </span>
              </button>
            </div>
            <div className="line-container">
              <div
                className={`line ${activeTab === "cart" ? "active" : ""}`}
              ></div>
              <div
                className={`line ${activeTab === "wishlist" ? "active" : ""}`}
              ></div>
            </div>
            {activeTab == "cart" ? (
              <>
                {cartItems.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>SubTotal:</Title>
                  <Title level={6}>${totalPrice.toFixed(2)}</Title>
                </div>
                <NavLink to="/cart">
                  <button className="checkout primary-btn w-full">VIEW CART</button>
                </NavLink>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CartProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();

  const removeCartItems = () => {
    dispatch(CartActions.removeFromAllCart(id));
  };
  return (
    <>
      <div className="mt-5 border-b-2 border-white-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0,1).map((images,i) => (
              <img src={images?.image} alt="" key={i} className="w-full h-full object-cover" />
            ))}
          </div>
          <div className="details w-1/2 text-purple-800">
          <BodyOne>{name}</BodyOne>
          <p className="text-purple-800">
            {quantity} x ${price?.toFixed(2)}
          </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-purple-800">
            <IoCloseOutline size={25} onClick={removeCartItems} />
          </button>
        </div>
      </div>
    </>
  );
};
// 3:05:29
