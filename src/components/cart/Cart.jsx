import { IoMdHeartEmpty } from "react-icons/io";
import { CartInv, Title } from "../pageDefaults/CustomComponents";
import { TbShoppingCartCode } from "react-icons/tb";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectTotalQuantity,
} from "../../redux/slice/cartSlice";

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
          <CartInv color="bg-primary-purple">{totalQuantity}</CartInv>
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

export const CartProduct = () => {
  return <div>cart</div>;
};
// 2:57:03