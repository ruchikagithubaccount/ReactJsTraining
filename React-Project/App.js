import React from "react";
import ReactDOM from "react-dom/client";

/*Components*/
import Header from "./view/Header";
import MainPage from "./view/MainPage";
import Footer from "./view/Footer";

/*Style*/
import "./css/style.css";

const FragmentTag = function () {
  return (
       <>
          <Header/>
            <MainPage/>
          <Footer/>
       </>
      
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FragmentTag />);
