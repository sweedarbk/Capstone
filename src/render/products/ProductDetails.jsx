import { useParams } from "react-router-dom";
import { productList } from "../../assets/navMenu/navMenu";
import { Title } from "../../components/pageDefaults/CustomComponents";

const colorsValue = {
  black: "#09090b",
  blue: "#1de440af",
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
  if (!product) {
    return <div>Product Not Found</div>;
  }
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
                {images.map((image, index) => (
                  <img src={image.image} key={index} alt="" />
                ))}
              </div>
            </div>
            <div className="details lg:w-1/2 px-16 pt-16">
              <Title level={2} className="my-2">{title}</Title>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
