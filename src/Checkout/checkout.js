import React from "react";
import "./Checkout.css";
import Logo from "../assests/react_image.png";
import Product from "../assests/product.png";
export default function Checkout() {
  return (
    <div className="container">
      <section className="mt-4 mb-4 shipping_style">
        <div className="row">
          <div className="col-md-4 col-sm-12 set_height">
            <span className="current_page">
              <img src={Logo} alt="logo" />
              SHOPPINGBAG
            </span>
          </div>
          <div className="col-md-4 col-sm-12 set_height">
            <span className="current_page">
              <img src={Logo} alt="logo" />
              SHIPPING AND CHECKOUT
            </span>
          </div>
          <div className="col-md-4 col-sm-12 set_height">
            <span className="next_page">
              <img src={Logo} alt="logo" />
              CONFIRMATION
            </span>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5">
        <div className="row mr-2">
          <div className="row cart_name mb-4">CHECKOUT</div>
          <div className="col-md-6 col-sm-12">
            <div className="row cart_header">BILLING DETAILS</div>
            <div className="row form_border">
              <div className="pl-4 pr-4 pt-4">
                <div className="w-100">
                  <div className="d-flex">
                    <input
                      type="text"
                      className="input_style w-50"
                      name="firstname"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      className="input_style w-50"
                      name="secondname"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="mt-3 mb-3">
                    <input
                      type="text"
                      className="input_style"
                      name="shipping_address"
                      placeholder="Shipping address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="input_style"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="input_style w-50"
                      name="country"
                      placeholder="Country"
                    />
                    <input
                      type="text"
                      className="input_style w-50"
                      name="province"
                      placeholder="Province"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="input_style"
                      name="Postcode"
                      placeholder="Post Code/ ZIP"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="input_style"
                      name="Phonenumber"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="input_style"
                      name="email"
                      placeholder="EmailAddress"
                    />
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <input type="checkbox" className="checkbox_style" />
                    </div>
                    <div> Save this Information</div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 mt-2">
                      <button className="btn-bts">Back to Shopping</button>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                      <button className="btn-pays">Payment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row cart_header">YOUR ORDER</div>
            <div className="row">
              <div className=" d-flex w-100 pl-4 pr-4 pt-4">
                <div className="w-25">
                  <img src={Product} alt="" width="100" height="100" />
                </div>
                <div className="w-75">
                  <div>Sample Product</div>
                  <div>Color:Red</div>
                  <div>Size:L</div>
                  <div className="total_color">$200.00</div>
                </div>
              </div>
              <div className=" d-flex w-100 pl-4 pr-4 pt-4 pb-4">
                <div className="w-25">
                  <img src={Product} alt="" width="100" height="100" />
                </div>
                <div className="w-75">
                  <div>Sample Product</div>
                  <div>Color:Red</div>
                  <div>Size:L</div>
                  <div className="total_color">$200.00</div>
                </div>
              </div>
              <div className="mr-2">
                <hr />
              </div>
              <div className="col-md-12 col-sm-12 mt-2">
                <div className="d-flex pt-4 pr-4 pl-4 w-100 pricing_style">
                  <div className="w-50">
                    <span>SubTotal</span>
                  </div>
                  <div className="w-50">
                    <span>$400.00</span>
                  </div>
                </div>
                <div className="d-flex pt-4 pr-4 pl-4 w-100 pricing_style">
                  <div className="w-50">
                    <span>Shipping</span>
                  </div>
                  <div className="w-50">
                    <span>$20.00</span>
                  </div>
                </div>
                <div className="d-flex pt-4 pr-4 pl-4 w-100 pricing_style total_color">
                    <div className="w-50">TOTAL</div>
                    <div className="w-50">$420.00</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
