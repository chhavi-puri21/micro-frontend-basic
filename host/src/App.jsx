import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Counter } from 'remote/Counter'
import { Typography } from '@mui/material'
import { Header } from "./Header";
import { BlogCard } from './BlogCard'
import { BlogDetail } from './BlogDetail'

const Home = () => (
  <div className="container">
    <Header />
    <Typography style={{ paddingTop: 8 }}>
      I am a host, responsible for Header, blogcards, & BlogDetail
    </Typography>
    {/* <Counter /> */}
    <BlogCard />

  </div>
)


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path={`/blog-detail/:id`} element={<BlogDetail />} />
      </Routes>

    </BrowserRouter>

  )
};
ReactDOM.render(<App />, document.getElementById("app"));
