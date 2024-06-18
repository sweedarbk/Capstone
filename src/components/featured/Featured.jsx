import { featuredList } from "../../assets/navMenu/navMenu";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title, BodyOne, Caption } from "../pageDefaults/CustomComponents";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 left-96 lg:left-1/2 slider-btn"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 left-96 lg:left-[46.5%] slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

export const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <section className="h-[50vh] lg:h-[90vh] mt-20 bg-zinc-800 relative z-1">
        <Slider {...settings}>
          {featuredList.map((item) => (
            <FeaturedItem
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export const FeaturedItem = ({ title, description, image, price }) => {
  return (
    <>
      <section className="content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        <div className="left w-1/2 p-8 lg:p-32 lg:py-64">
          <Title
            level={1}
            className="leading-none font-medium md:text-3xl lg:text-[70px] lg:leading-snug"
          >
            {title}
          </Title>
          <BodyOne>{description}</BodyOne>
          <div className="flex items-start gap-8 my-5">
            <div>
              <Caption>Price</Caption>
            </div>
            <div className="mt-3">
              <Title level={5}>{price}</Title>
            </div>

            <div className="flex items-center gap-8">
              <button className="primary-btn uppercase">View Details</button>
              <button className="secondary-btn uppercase">View Shop</button>
            </div>
          </div>
        </div>
        <div className="right p-5 w-1/2 h-full flex justify-center items-center relative z-50">
          <img src={image} alt="" className="h-[70vh] w-full object-contain" />
        </div>
      </section>
    </>
  );
};


FeaturedItem.propTypes = {
  title: PropTypes.isRequired,
  description: PropTypes.isRequired,
  image: PropTypes.isRequired,
  price: PropTypes.isRequired,
};