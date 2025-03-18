import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import PageToEdit from "./folderToEdit/pageToEdit";
export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/urlToEdit" element={<PageToEdit />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
