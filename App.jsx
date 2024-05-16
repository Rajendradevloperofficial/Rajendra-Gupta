import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
  }
  changeLangauge = (data) => {
    this.setState({ language: data });
  };
  changeSearch = (data) => {
    this.setState({ search: data });
  };
  render() {
    return (
      <BrowserRouter>
        <Navbar
          changeLangauge={this.changeLangauge}
          changeSearch={this.changeSearch}
        />
        <Routes>
          <Route
            path="/"
            element={<Home language={this.state.language} search={this.state.search} q="All" />}
          />
          <Route
            path="/All"
            element={<Home language={this.state.language} search={this.state.search} q="All" />}
          />
          <Route
            path="/Politics"
            element={<Home language={this.state.language} search={this.state.search} q="Politics" />}
          />
          <Route
            path="/Entertainment"
            element={<Home language={this.state.language} search={this.state.search} q="Entertainment" />}
          />
          <Route
            path="/Crime"
            element={<Home language={this.state.language} search={this.state.search} q="Crime" />}
          />
          <Route
            path="/Education"
            element={<Home language={this.state.language} search={this.state.search} q="Education" />}
          />
          <Route
            path="/Sports"
            element={<Home language={this.state.language} search={this.state.search} q="Sports" />}
          />
          <Route
            path="/Cricket"
            element={<Home language={this.state.language} search={this.state.search} q="Cricket" />}
          />
          <Route
            path="/IPL"
            element={<Home language={this.state.language} search={this.state.search} q="IPL" />}
          />
          <Route
            path="/Covid-19"
            element={<Home language={this.state.language} search={this.state.search} q="Covid-19" />}
          />
          <Route
            path="/Technology"
            element={<Home language={this.state.language} search={this.state.search} q="Technology" />}
          />
          <Route
            path="/India"
            element={<Home language={this.state.language} search={this.state.search} q="India" />}
          />
          <Route
            path="/World"
            element={<Home language={this.state.language} search={this.state.search} q="World" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
