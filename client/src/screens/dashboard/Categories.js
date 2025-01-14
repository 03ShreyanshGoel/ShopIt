import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
import {
  useGetQuery,
  useDeleteCategoryMutation,
} from "../../store/services/categoryService";

import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";

const Categories = () => {
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  console.log("Your page :", page);
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  console.log(success);
  const { data = [], isFetching } = useGetQuery(page ? page : 1);
  console.log(data, isFetching);
  const [removeCategory, response] = useDeleteCategoryMutation();
  console.log(response);
  const deleteCat = (id) => {
    if (window.confirm("Do you really want to delete the category?")) {
      removeCategory(id);
    }
  };
  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setSuccess(response?.data?.message));
    }
  }, [response?.data?.message]);
  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, []);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-category" className="btn-dark">
          Add Categories <i className="bi bi-plus"></i>
        </Link>
      </ScreenHeader>

      {success && <div className="alert-success">{success}</div>}

      {!isFetching ? (
        data?.categories?.length > 0 && (
          <div>
            <table className="w-full bg-gray-900 rounded-md">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="p-3 uppercase text-sm  font-medium text-gray-500">
                    Name
                  </th>
                  <th className="p-3 uppercase text-sm  font-medium text-gray-500">
                    Edit
                  </th>
                  <th className="p-3 uppercase text-sm  font-medium text-gray-500">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.categories?.map((category) => (
                  <tr key={category._id} className="odd:bg-gray-800">
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      {category.name}
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      <Link
                        to={`/dashboard/update-category/${category._id}`}
                        className="btn btn-warning"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteCat(category._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              path="dashboard/categories"
              page={parseInt(page)}
              perPage={data.perPage}
              count={data.count}
            />
          </div>
        )
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

export default Categories;
