import React from "react";
import Logo from "../assests/react_image.png";
import "./Confirmation.css";
import photo from '../assests/product.png';
export default function Confirmation() {
  return (
    <div class="container">
      <section className="mt-3">
        <div className="row">
          <div class="col-md-4 col-sm-12 height_style">
            <span className="current_page">
              <img src={Logo} alt="logo" /> SHOPPING BAG
            </span>
          </div>
          <div className="col-md-4 col-sm-12 height_style">
            <span className="current_page">
              <img src={Logo} alt="logo" />
              SHIPPING AND CHECKOUT
            </span>
          </div>
          <div className="col-md-4 col-sm-12 height_style">
            <span className="current_page">
              <img src={Logo} alt="logo" /> CONFIRMATION
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="row mt-4 title_header"> CHECKOUT</div>
        <div class="row">
        <div className="col-md-6 col-sm-12">
          <div className="row mt-3 confirmation_style">
            SHIPPING CONFIRMATION
          </div>
          <div className="row content_style">
            <div className="mt-4 mb-3 changeColor">Change</div>
            <div className="box_border p-4 mt-3">
              <div className="d-flex w-100 mt-2 underline">
                <div className="w-25">Contact</div>
                <div className="w-75">Youremail@gmail.com</div>
              </div>
              <div className="d-flex w-100 mt-2 underline">
                <div className="w-25">Ship to</div>
                <div className="w-75"> Address- City, Country</div>
              </div>
              <div className="w-100 d-flex mt-2">
                <div className="w-25"> Method</div>
                <div className="w-75">$420.00 (international Shipping)</div>
              </div>
            </div>
            <div className="mt-4">YOUR CREDIT CARD</div>
            <div className="w-100 mt-4">
              <input
                type="text"
                placeholder=" Card Number"
                className="input_style"
              />
            </div>
            <div className=" w-100 mt-3">
              <input
                type="text"
                placeholder="Name on Card"
                className="input_style"
              />
            </div>
            <div className="w-100 mt-3 d-flex">
              <div className="w-50">
                <input
                  type="text"
                  placeholder="Expiration(MM/YY)"
                  className="input_style"
                />
              </div>
              <div className="w-50">
                <input
                  type="text"
                  placeholder="Security Code"
                  className="input_style"
                />
              </div>
            </div>
            <div className="mt-3">
              <input type="checkbox" className="checkbox_style" /> Save this Information
            </div>
            <div className="mt-3 w-100 d-flex">
                <div className="w-50"><button className="back_shopping">Back to Shopping</button></div>
                <div className="w-50"> <button className="payment">Payment</button></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
            <div className="row">
                <div className="row  mt-3 confirmation_style">YOUR ORDER</div>
                <div className="w-100 d-flex pt-4 pr- 4 pl-4">
                    <div className="w-25"><img src={photo} width="100px" height="100px" alt =""/></div>
                    <div className="w-75">
                        <div>Sample Product Image</div>
                        <div>Color: Red</div>
                        <div>Size: L</div>
                        <div className="total_price">$200.00</div>
                    </div>
                </div>
                <div className="w-100 d-flex pt-4 pr-4 pl-4 mb-3">
                    <div className="w-25"><img src={photo} width="100px" height="100px" alt="" /></div>
                    <div className="w-75">
                        <div>Sample Product Image</div>
                        <div>Color: Red</div>
                        <div>Size: L</div>
                        <div className="total_price">$200.00</div>
                    </div>
                </div>
                <hr/>
                <div className="mt-4">
                    <div className="w-100 d-flex pr-4 pl-4 pb-4">
                        <div className="w-50">Subtotal</div>
                        <div className="w-50">$400.00</div>
                    </div>
                    <div className="w-100 d-flex pr-4 pl-4 pb-4">
                        <div className="w-50">Shipping</div>
                        <div className="w-50">$20.00</div>
                    </div>
                    <div className="d-flex w-100 pr-4 pl-4 pb-4">
                        <div className="w-50">Total</div>
                        <div className="w-50 total_price">$420.00</div>
                    </div>
                </div>
            </div >
        </div>
           
        </div>
      </section>
    </div>
  );
}
