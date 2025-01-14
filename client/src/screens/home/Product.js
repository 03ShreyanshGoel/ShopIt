import { FiChevronRight } from "react-icons/fi";
import Nav from "../../components/home/Nav";
import { Link, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/services/productService";
import DetailsCard from "../../components/home/DetailsCard";
import ProductLoader from "../../components/home/ProductLoader";
const Product = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetProductQuery(id);
  console.log(data, isFetching);
  console.log(id);
  return (
    <>
      <Nav />
      <div className="my-container mt-[120px]">
        {isFetching ? (
          <ProductLoader />
        ) : (
          <>
            <ul className="flex items-center">
              <li className="capitalize text-gray-600">
                <Link to="/">home</Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/cat-products/${data.category}`}>
                  {data.category}
                </Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/product/${data._id}`}>{data.title}</Link>
              </li>
            </ul>
            <div className="flex flex-wrap">
              {data && <DetailsCard product={data} />}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
