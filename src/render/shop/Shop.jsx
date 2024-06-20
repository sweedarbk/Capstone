import { productList } from "../../assets/navMenu/navMenu";
import { ProductCard } from "../../router";


export const Shop = () => {
    return (
        <>
        <div className="py-20 bg-zinc-800">
        <section className="container mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
        </section>
        </div>
        </>
    );
};
// 2:07:08