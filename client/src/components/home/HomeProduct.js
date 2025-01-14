import { Link } from "react-router-dom";
import { useCatProductsQuery } from "../../store/services/homeProducts";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";
const HomeProduct = ({ category }) => {
  const { data, isFetching } = useCatProductsQuery({
    name: category.name,
    page: "",
  });
  console.log(data, isFetching);
  return isFetching ? (
    <ProductSkeleton />
  ) : (
    data?.products?.length > 0 && (
      <>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-semibold capitalize">
            {category.name}
          </span>
          <span className="capitalize">
            <Link to={`/cat-products/${category.name}`}>see all<i className="bi bi-arrow-right-short"></i></Link>
          </span>
        </div>
        <div className="flex flex-wrap -mx-5">
          {data?.products.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
        </div>
      </>
    )
  );
};

export default HomeProduct;
