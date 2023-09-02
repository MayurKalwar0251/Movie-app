import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark  nav-fix fixed-top " >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            IMDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/movie"
                >
                  Movie
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/series"
                >
                  Series
                </Link>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
              <input
                onChange={(event) => {
                  //   setTimeout(() => {
                  //     props.searched(event.target.value);
                  //   }, 500);
                  props.searched(event.target.value);
                }}
                className="overflow-hidden form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                onClick={(event) => {
                  event.preventDefault();
                }}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
