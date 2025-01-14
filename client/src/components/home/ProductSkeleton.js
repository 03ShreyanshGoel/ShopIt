import Skeleton from "../skeleton/Skeleton";
import Thumbnail from "../skeleton/Thumbnail";
import Text from "../skeleton/Text";
const ProductSkeleton = () => {
  return (
    <div className="flex flex-wrap -mx-5 mt-16">
      {[1, 2, 3, 4].map((item) => (
        <div
          className="w-full sm:w-6/12 md:w-4/12 lg:4/12 xl:w-3/12 px-5 py-10"
          key={item}
        >
          <Skeleton>
            <Thumbnail height="310px" />
            <Text mt="10px" />
            <Text mt="10px" />
          </Skeleton>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
