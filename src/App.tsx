import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createPost } from "./redux/posts";
import { useDispatch, connect } from "react-redux";
import { bindActionCreators } from "redux";

function App({createPost}: any) {
  return (
    <div
      onClick={() => {
        createPost({});
      }}
      className="App"
    >
      Chess App
    </div>
  );
}
const mapDispatchToProps = {
  createPost
}

export default connect(undefined, mapDispatchToProps)(App);
