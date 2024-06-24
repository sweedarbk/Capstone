import { useParams } from "react-router-dom";
import { productList } from "../../assets/navMenu/navMenu";
import { Caption, Title } from "../../components/pageDefaults/CustomComponents";
import { RenderRatingStars } from "../../components/products/ProductCard";
import { useState } from "react";
import { LuMinus } from "react-icons/lu";
import { HiOutlinePlus } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colorsValue = {
  black: "#09090b",
  blue: "#1d4ed8",
  green: "#14532d",
  grey: "#94a3b8",
  multi: "#f9a8d4",
  white: "#fafafa",
};

export const ProductDetails = () => {
  const { productId } = useParams();
  const product = productList.find(
    (product) => product.id === parseInt(productId)
  );
  const { title, images, price, description, rating, color } = product;

  const [selectedColor, setSelectedColor] = useState(color[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = price.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const CustomPage = ({ index, onClick }) => (
    <div>
      <img src={images[index].image} alt="" onClick={onClick} />
    </div>
  );
  const settings = {
    customPaging: (i) => <CustomPage index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="py-20 bg-zinc-800">
        <section className="container mt-32 slideproduct">
          <div
            className="flex justify-between flex-col lg:flex-row"
            key={productId}
          >
            <div className="images lg:w-1/2">
              <div>
                <Slider {...settings} className="mb-6 sliderimage">
                {images.map((image, index) => (
                  <img src={image.image} key={index} alt="" />
                ))}
                </Slider>
              </div>
            </div>
            <div className="details lg:w-1/2 px-16 pt-16">
              <Title level={2} className="my-2">
                {title}
              </Title>
              <div className="flex items-center gap-2 mt-4 mb-5 text-white-100">
                <div className="flex items-center gap-1 text-white-100">
                  {RenderRatingStars(rating)}
                </div>
                <p>{product.rating} Review</p>
              </div>
              <p className="text-[20px] text-white-100">{description}</p>
              <br />
              <div className="text-white-100">
                <Caption>Colors</Caption>
                <div className="flex items-center gap-3 mt-5">
                  {color.map((colorOption, index) => (
                    <div
                      key={index}
                      onClick={() => handleColorClick(colorOption.value)}
                      className={`w-4 h-4 rounded-full -mt-3 curser-pointer border-gray-300 ${
                        selectedColor === colorOption.value ? "selected" : ""
                      }`}
                      style={{
                        backgroundColor: colorsValue[colorOption.value],
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-white-100">
                <Caption>Price :</Caption>
                <div className="flex items-center gap-3">
                  {price.slice(0, 1).map((priceItem, index) => (
                    <>
                      <Title level={4} key={index}>
                        ${priceItem.value}
                      </Title>
                    </>
                  ))}
                </div>
              </div>
              <br />
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 grid place-items-center bg-zinc-800 text-primary-purple border border-white-100">
                  <LuMinus size={24} />
                </button>
                <input
                  type="text"
                  value="1"
                  className="w-14 h-12 text-white-100 bg-zinc-800 outline-none border border-white-100 px-6"
                />
                <button className="w-12 h-12 grid place-items-center bg-zinc-800 text-primary-purple border border-white-100">
                  <HiOutlinePlus size={24} />
                </button>
                <button className="primary-btn">ADD TO CART</button>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <button className="flex items-center gap-2 secondary-btn">
                  <IoMdHeartEmpty size={24} />
                  ADD TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
