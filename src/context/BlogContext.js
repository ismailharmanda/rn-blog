import React, { useReducer, useEffect } from "react";
import createDataContext from "./createDataContext";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return [
        ...state,
        {
          title: payload.title
            ? payload.title
            : `Blog Post Title #${state.length + 1}`,
          content: payload.content
            ? payload.content
            : `Blog Post Content #${state.length + 1}`,
          id: Math.floor(Math.random() * 10000),
        },
      ];
      break;
    case "PUT":
      return state.map((blogPost) =>
        blogPost.id === payload.id ? payload : blogPost
      );
      break;
    case "DELETE":
      return state.filter((post) => post.id !== payload);
      break;
    default:
      return state;
      break;
  }
};
const addBlogPost = (dispatch) => {
  return ({ title, content, cb }) => {
    dispatch({ type: "ADD", payload: { title, content, cb } });
    cb?.();
  };
};

const editBlogPost = (dispatch) => {
  return ({ id, title, content, cb }) => {
    dispatch({ type: "PUT", payload: { id, title, content, cb } });
    cb?.();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "DELETE", payload: id });
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
