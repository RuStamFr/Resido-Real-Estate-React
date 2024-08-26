import "./root.scss";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAgents} from "../../store/slices/agentsSlice";
import {fetchCategories} from "../../store/slices/categoriesSlice";
import {fetchLocations} from "../../store/slices/locationsSlice";
import {fetchPropertyPosts} from "../../store/slices/propertyPostsSlice";

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgents());
    dispatch(fetchCategories());
    dispatch(fetchLocations());
    dispatch(fetchPropertyPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={"page-main"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;
