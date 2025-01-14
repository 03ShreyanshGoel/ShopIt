import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { toggleSearchBar } from "../../store/reducers/globalReducer";

const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  const { searchBar } = useSelector((state) => state.globalReducer);
  const { items } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav">
        <div className="my-container">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  className="h-[100px] object-cover"
                  alt="logo"
                />
                <p
                  className="hidden sm:block" // This will hide the name on screens smaller than 'sm'
                  style={{
                    fontFamily: '"DM Serif Text", serif',
                    fontSize: "42px",
                  }}
                >
                  ShopIt
                </p>
              </Link>
            </div>
            <ul className="flex items-center">
              <li className="nav-li cursor-pointer">
                <FiSearch
                  size={27}
                  onClick={() => dispatch(toggleSearchBar())}
                />
              </li>
              <li className="nav-li relative">
                <Link to="/cart">
                  <BsHandbag size={25} />
                  <span className="nav-circle">{items}</span>
                </Link>
              </li>
              {userToken ? (
                <li className="nav-li">
                  <Link to="/user" className="nav-link">
                    {user.name}
                  </Link>
                </li>
              ) : (
                <li className="nav-li">
                  <Link to="/login" className="nav-link">
                    sign in
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Search />
    </>
  );
};

export default Nav;
