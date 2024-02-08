import { createContext, useEffect, useReducer } from "react";

export const BlogContext = createContext();

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
};

const blogReducer = (state, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case "REMOVE":
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(state.blogs));
  }, [state]);

  return (
    <BlogContext.Provider value={[state, dispatch]}>
      {children}
    </BlogContext.Provider>
  );
};
