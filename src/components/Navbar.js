import { useContext } from "react";
import { CartContext } from "../store";

export default function Navbar() {
  const [state] = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">甜點蛋糕店</span>

          <button
            className="btn btn-outline-warning position-relative fw-bold"
            type="submit"
          >
            購物車
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {state.cartList.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
