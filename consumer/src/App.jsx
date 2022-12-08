import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "remote/Counter";
import { Header } from "host/Header";
import { BlogDetail } from "host/BlogDetail"

import "./index.css";
import { BlogCard } from "host/BlogCard";

const Home = () => (
  <div className="container">
    <Header />
    <div style={{padding:8}}>Just a consumer</div>
    <Counter />
    <BlogCard />
  </div>
)

const App = () => (
  <BrowserRouter>

    <Routes>
      <Route exact path={'/'} element={<Home />} />
      <Route path={`/blog-detail/:id`} element={<BlogDetail />} />
    </Routes>

  </BrowserRouter>


);
ReactDOM.render(<App />, document.getElementById("app"));
