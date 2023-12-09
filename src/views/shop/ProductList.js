import { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "../../components/Loading";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let mounted = true;
  useEffect(() => {
    const url = "https://gymboy.onrender.com/api/products";
    const getData = async () => {
      setLoading(true);
      const response = await fetch(url);
      if (mounted) {
        const result = await response.clone().json();
        setProducts(result);
        setLoading(false);
      }

      return () => {
        mounted = false;
      };
    };
    getData();
  }, []);
  // console.log();
  return (
    <div className="product-list">
      {loading ? (
        <Loading />
      ) : (
        products?.data?.products?.map((item) => (
          <Product
            key={item._id}
            id={item._id}
            productId={item._id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            oldPrice={item.oldPrice}
            category={item.category}
          />
        ))
      )}
    </div>
  );
}
