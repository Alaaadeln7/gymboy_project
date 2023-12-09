import { useContext } from "react";
import "./shopping.scss";
import formateCaurrncy from "../formatCurrency";
import { appContext } from "../../App";
import { Link } from "react-router-dom";
export default function Shopping() {
  const dataContextProvider = useContext(appContext);
  const totalPrice = dataContextProvider.cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <section className="shopping-cart">
      <div className="container">
        <div className="container-items">
          <div className="cart-items-header">
            <span className="total-price">
              Total price : {formateCaurrncy(totalPrice)}
            </span>
            {dataContextProvider.cartItems.length !== 0 && (
              <button
                className="btn"
                onClick={() => dataContextProvider.handelClearShopping()}
              >
                Clear
              </button>
            )}
          </div>
          {/* <button >back</button> */}
          {dataContextProvider.cartItems.length === 0 && (
            <div>
              <h1>you not added any items</h1>
            </div>
          )}
          {dataContextProvider.cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="text">
                <h3>{item.title.slice(0, 50) + "..."}</h3>
                <p> price : {formateCaurrncy(item.price)}</p>
                <div className="btns">
                  <button
                    className="btn"
                    onClick={() => dataContextProvider.handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="btn"
                    onClick={() => dataContextProvider.removeProduct(item)}
                  >
                    -
                  </button>
                </div>
                <span>quantity : {item.quantity}</span>
                <span>price : {formateCaurrncy(item.price)}</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className="checkout"
          style={
            dataContextProvider.theme === false
              ? { background: "#32363c" }
              : { background: "#848484" }
          }
        >
          <h1>check out</h1>
          <p>
            The checkout section is an essential component of an online shopping
            platform or e-commerce website. It is the final step in the
            purchasing process where customers review and finalize their orders
            before making a payment. The checkout section typically includes
            several key elements and features
          </p>
          <Link className="btn">Check out</Link>
        </div>
      </div>
    </section>
  );
}
