import "./root.scss";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../router/ScrollToTop";
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
    <ScrollToTop>
      <Header />
      <main className={"page-main"}>
        <Outlet />
      </main>
      <Footer />
    </ScrollToTop>
  );
};
export default Root;
