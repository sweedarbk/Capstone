import { TbShoppingCartCode } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { TfiStar } from "react-icons/tfi";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Title, BodyOne } from "../pageDefaults/CustomComponents";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slice/cartSlice";
import { LuMinus } from "react-icons/lu";
import { HiOutlinePlus } from "react-icons/hi2";


export const RenderRatingStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStars = rating % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<IoStarSharp key={i} color="#ffffff" />);
    } else if (hasHalfStars && i === fullStars + 1) {
      stars.push(<IoStarHalfSharp key={i} color="#ffffff" />);
    } else {
      stars.push(<TfiStar key={i} color="#ffffff" />);
    }
  }
  return stars;
};
export const ProductCard = ({
  key,
  id,
  title,
  description,
  images,
  rating,
  featured,
  price,
  color,
  category,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const addToCart = () => {
    const priceValue = price[0]?.value || 0;
    dispatch(CartActions.addToCart({ id, title, price:priceValue, images }));
  };

  return (
    <>
      <div className="product card">
        <div className="images h-96">
          {images.map((cover, index) => (
            <img
              key={index}
              src={cover?.image}
              alt=""
              className="w-full h-full object-contain"
            />
          ))}
          <div className="flex justify-between w-full p-6 absolute top-0 right-6">
            {featured && (
              <button className="feature-btn">
                {featured === true && "Featured"}
              </button>
            )}
          </div>
          <div className="overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5">
            <button
              onClick={openPopup}
              className="quick-view-btn product-btn primary-btn bottom-2"
            >
              Quick View
            </button>
            <button
              onClick={addToCart}
              className="add-to-cart-btn product-btn primary-btn bottom-2"
            >
              <TbShoppingCartCode size={23} />
            </button>
            <button className="love-btn product-btn primary-btn bottom-2">
              <IoMdHeartEmpty size={23} />
            </button>
          </div>
        </div>
        <div className="details flex items-center flex-col bg-purple-900 pt-3 -mt-3 rounded">
          <NavLink to={`/product-details/${id}`}>
            <BodyOne className="text-center">{title}</BodyOne>
          </NavLink>
          <div className="flex items-center gap-2 -mt-2 mb-2">
            {RenderRatingStars(rating)}
          </div>
          <div className="flex items-center gap-3">
          <BodyOne className="text-white-100">
              ${price[0]?.value || 0}
            </BodyOne>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <>
          <div className="overlay-bg" onClick={closePopup}>
            <div className="popup-overlay" onClick={closePopup}>
              <div
                className="popup-content flex justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-1/2 h-[500px] overflow-hidden">
                  {images.slice(0, 1).map((cover, index) => (
                    <img
                      key={index}
                      src={cover?.image}
                      alt={id}
                      className=" popup-image w-full h-full object-cover"
                    />
                  ))}
                </div>
                <div className="popup-details w-1/2 h-[500px] overflow-y-scroll p-9">
                  <Title level={2}>{title}</Title>
                  <div className="flex items-center gap-1 -mt-1 mb-1">
                    {RenderRatingStars(rating)}
                  </div>
                  <Title level={3} className="text-white">
                    ${price[0]?.value || 0}
                  </Title>
                  <BodyOne className="text-base leading-6">
                    {description}
                  </BodyOne>
                  <div className="flex items-center gap-3">
                  <button className="w-12 h-12 grid place-items-center bg-zinc-800 text-primary-purple border border-white-100">
                  <LuMinus size={24} />
                </button>
                    <input
                      type="text"
                      value="1"
                      className="w-12 h-12 bg-zinc-800 text-white-100 outline-none border-2 border-white-100 px-4"
                    />
                    <button className="w-12 h-12 grid place-items-center bg-zinc-800 text-primary-purple border border-white-100">
                  <HiOutlinePlus size={24} />
                </button>
                    <button className="primary-btn">ADD TO CART</button>
                  </div>
                  <hr className="my-5" />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Title level={5} className="text-lg">
                        Category:
                        <span className="font-normal"> BEST SELLERS</span>
                      </Title>
                    </div>
                    <button
                      className="close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-purple-800 text-white-100"
                      onClick={closePopup}
                    >
                      <IoCloseOutline size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// 1:13:03
