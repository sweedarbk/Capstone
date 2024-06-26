import { useEffect, useState } from "react";
import { productList } from "../../assets/navMenu/navMenu";
import { ProductCard } from "../../router";

export const Shop = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const sortedList = [...productList].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });
    setSortedProducts(sortedList);
  }, [sortOrder]);

  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <div className="py-20 bg-zinc-800">
        <div className="container mt-36 flex justify-end mb-4">
          <select 
            className="p-2 bg-white text-black rounded"
            onChange={handleSort}
            value={sortOrder}
          >
            <option value="asc">Sort by Rating: Low to High</option>
            <option value="desc">Sort by Rating: High to Low</option>
          </select>
        </div>
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {sortedProducts.map((product) => (
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