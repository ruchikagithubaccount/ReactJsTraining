import React from "react";
import ReactDOM from "react-dom/client";

/*Json File*/
const ProductJson = require("../product.json");

const ProductList = ({ product }) => {
  const ProductItem = product.map((data) => {
    return (
      <div className="col-3 ProductItemCss" key={data.title}>
        <img src={data.images} width="100%" height="150" />
        <h4>{data.title}</h4>
        <h5>
          {data.brand} - {data.category}
        </h5>
        <h4>
          <b>${data.price}</b>
        </h4>
        <p>{data.description}</p>
      </div>
    );
  });
  return <div>{ProductItem}</div>;
};

function MainPage() {
  return (
    <>
      <h4>Product List</h4>

      <div className="row">
        <ProductList product={ProductJson} />
      </div>
    </>
  );
}
export default MainPage;
