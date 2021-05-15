import React from "react";
import Logo from "../assests/react_image.png";
import "./Cart.css";
import Watch from '../assests/product.png'

export default function Cart() {
  return (
    <div className="container">
      <section className="mt-4 mb-4">
        <div className="row cart_title_style">
          <div className="col-md-4 col-sm-12 col-xs-12 cart_height">
            <img src={Logo} alt="logo" />
            <span className="current_page">SHOPPING BAG</span>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 cart_height">
            <span className="next_page">
              <img src={Logo} alt="logo" />
              SHOPPING AND CHECKOUT
            </span>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 cart_height">
            <span className="next_page">
              <img src={Logo} alt="logo" />
              CONFIRMATION
            </span>
          </div>
        </div>
      </section>
      <section className="mt-4 mb-4 table-responsive">
        <div className="cart_title">CART</div>
        <table className="mt-4 table_design">
          <thead>
            <tr>
              <th></th>
              <th>IMAGE</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QTY</th>
              <th>TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="checkbox_style" />
              </td>
              <td>
                <img className="img_box" src={Watch} alt="watch"/>
              </td>
              <td>
                <div>Sample Product Image</div>
                <div>Color:Red</div>
                <div>Size:L</div>
              </td>
              <td>$200.00</td>
              <td>
                <input value="1" type="text" className="input_field" />
              </td>
              <td>$200.00</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" className="checkbox_style" />
              </td>
              <td>
                <img className="img_box" src={Watch} alt="watch" />
              </td>
              <td>
                <div>Sample Product Image</div>
                <div>Color:Red</div>
                <div>Size:L</div>
              </td>
              <td>$200.00</td>
              <td>
                <input value="1" type="text" className="input_field" />
              </td>
              <td>$200.00</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className=" cart_total_price">
         <div className="cart_total">TOTAL</div>
         <div className="cart_price">$600.00</div>
        </div>
        <hr/>
      </section>
      <section className="mt-4 mb-4 cart_footer">
      <div className="col-md-6 col-sm-12">
          <div className="cart_voucher_title mb-3">VOUCHER</div>
          <div className="voucher_label mb-3"><label htmlFor="voucher">Enter your coupon code if you have one</label></div>
          <div className="mb-3"><input className="voucher_input" name="voucher" id="voucher" type="text" placeholder="Voucher Code/Gift Code"/></div>
          <div><button className="btn_voucher">Apply Now</button></div>
          </div>
      <div className="col-md-6 col-sm-12 checkout_total mb-3">
          <div className="d-flex cart_dividing_price mb-2">
              <div className="w-50">SubTotal</div>
              <div className="w-50">$400.00</div>
          </div>
          <div className="d-flex cart_dividing_price mb-2">
              <div className="w-50">Shipping</div>
              <div className="w-50">$20.00</div>
          </div>
          <div className="d-flex cart_dividing_totalprice mb-2">
              <div className="w-50">TOTAL</div>
              <div className="w-50">$420.00</div>
          </div>
          <div><button className="checkout_button">CheckOut</button></div>
      </div>
      </section>
    </div>
  );
}
