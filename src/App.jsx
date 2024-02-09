import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import CategoryItem from "./pages/CategoryItem";
import BlogDetails from "./pages/BlogDetails";
import Header from "./components/Header";
import SavedBlogs from "./pages/SavedBlogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:catid" element={<CategoryItem />} />
        <Route path="/categories/:catid/:blogid" element={<BlogDetails />} />
        <Route path="/saved" element={<SavedBlogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
