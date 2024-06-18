import { productList } from "../../assets/navMenu/navMenu";
import { Title, BodyOne } from "../../components/pageDefaults/CustomComponents";
import { ProductCard } from "../../router";

export const Product = () => {
  return (
    <>
      <section className="py-20 bg-zinc-800">
        <div className="container">
          <Title level={4}>Most Popular Items</Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm text-primary-purple">
              Best Sellers (6)
            </BodyOne>
            <BodyOne className="text-sm">All Products (17)</BodyOne>
          </div>
          <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                images={product.images}
                rating={product.rating}
                featured={product.featured}
                price={product.price}
                color={product.color}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
