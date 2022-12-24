import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exactpath="/" element={<><News
              key="general"
              pageSize={this.pageSize}
              country="in"
              category="general" />
            </>
            }
            />
            <Route
              exact
              path="/science"
              element={
                <>
                  {" "}
                  <News
                    key="science"
                    pageSize={this.pageSize}
                    country="in"
                    category="science"
                  />
                </>
              }
            />
            <Route
              exact
              path="//buisness"
              element={
                <>
                  {" "}
                  <News
                    key="buisness"
                    pageSize={this.pageSize}
                    country="in"
                    category="business"
                  />
                </>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <>
                  <News
                    key="techno;ogy"
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                  />
                </>
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <>
                  {" "}
                  <News
                    key="sports"
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                  />
                </>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <>
                  <News
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="in"
                    category="entertainment"
                  />
                </>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <>
                  <News
                    key="health"
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                  />
                </>
              }
            />
            <Route
              exact
              path="/general"
              element={
                <>
                  <News
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
