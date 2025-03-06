import { CartContext } from "../store";
import { useContext, useState } from "react";

import productsData from "../assets/productsData";
export default function Products() {
  const [state, dispatch] = useContext(CartContext);

  return (
    <>
      <div className="row row-cols-3 g-3">
        {productsData.map((product) => {
          return (
            <div className="col" key={product.id}>
              <div className="card">
                <img src={product.img} className="card-img-top" alt="..." />
                <div className="card-body fw-bold">
                  <p className="card-title">
                    {product.title}
                    <span className="float-end">NT$ {product.price}</span>
                  </p>
                  <select
                    name=""
                    id=""
                    className="form-select"
                    value={product.quantity}
                    onChange={(e) => {
                      e.preventDefault();
                      const quantity = parseInt(e.target.value);

                      dispatch({
                        type: "CHANGE_PRODUCTS_QUANTITY",
                        payload: {
                          ...product,
                          quantity,
                        },
                      });
                    }}
                  >
                    {[...Array(20)].map((_, i) => {
                      return (
                        <option value={i + 1} key={i}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                  <button
                    type="button"
                    className="btn btn-outline-success w-100 fw-bold"
                    onClick={(e) => {
                      const quantity = parseInt(e.target.previousSibling.value);
                      e.target.previousSibling.value = 1;
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                          ...product,
                          quantity,
                        },
                      });
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
