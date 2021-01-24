import React, { useState } from 'react';
import { faPhone, faEnvelope, faLock, faCaretDown, faHeart, faShoppingCart, faUser, faShoppingBasket, faTag, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Styles.css';
import GoogleFontLoader from 'react-google-font-loader';
import ProductComponent from '../UserComponents/ProductComponent';

const UserHome = () => {

    const [shopDropdownHeight,setShopDropdownHeight] = useState('0vh');
    const [categoriesText,setCategoriesText] = useState("All Categories");

    return(
        <div>
            <GoogleFontLoader fonts={[{font: 'Lemonada'}]}/>

            <div className = "header">
                <div className = "contact-container">
                    <div className = "phone-container">
                        <FontAwesomeIcon icon = {faPhone} />
                        <span className = "header-text">(91) 9876 543 210</span>
                    </div>
                    <div className = "mail-container">
                        <FontAwesomeIcon icon = {faEnvelope}/>
                        <span className = "header-text">info@thinkershut.com</span>
                    </div>
                </div>
                <div className = "login-container">
                    <FontAwesomeIcon icon = {faLock}/>
                    <span className = "header-text">Sign In</span>
                </div>
            </div>

            <div className = "body">
                <div className = "nav-bar">
                    <div className = "logo-container">
                        <img className = "logo-img" alt = "logo" src = {require('../Images/rice-logo.png')}/>
                    </div>

                    <div className = "nav-container d-none d-md-block">
                        <ul style = {{fontFamily:"Lemonada"}}>
                            <li>
                                <div className = "nav-items">Home</div>
                            </li>
                            <li 
                                className = "nav-shop"
                                // onMouseEnter = {() => setShopDropdownHeight('50vh')}
                                // onMouseLeave = {() => setShopDropdownHeight('0vh')}
                            >
                                <div className = "nav-items">
                                    <span className = "nav-item-text">Shop</span>
                                    {/* <FontAwesomeIcon icon = {faCaretDown}/> */}
                                    <div className = "categories-dropdown" style = {{height:shopDropdownHeight}}>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className = "nav-items">Best Sellers</div>
                            </li>
                            <li>
                                <div className = "nav-items">Deal of The Day</div>
                            </li>
                            <li>
                                <div className = "nav-items">Contact Us</div>
                            </li>
                        </ul>
                    </div>

                    <div className = "nav-icons row">
                        <FontAwesomeIcon icon = {faHeart}/>
                        <FontAwesomeIcon icon = {faShoppingCart}/>
                        <FontAwesomeIcon icon = {faUser}/>
                    </div>
                </div>

                <div className = "search-and-categories row">
                    <div className = "categories-bar dropdown">
                        <div className="dropdown-toggle" type="button" data-toggle="dropdown">
                            {categoriesText}
                        </div>
                        <div className= "dropdown-menu">
                            <span className="dropdown-item" onClick = {() => setCategoriesText("All Categories")}>All Categories</span>
                            <span className="dropdown-item" onClick = {() => setCategoriesText("Basmati Rice")}>Basmati Rice</span>
                            <span className="dropdown-item" onClick = {() => setCategoriesText("Seeraga Samba")}>Seeraga Samba</span>
                            <span className="dropdown-item" onClick = {() => setCategoriesText("Brown Rice")}>Brown Rice</span>
                        </div>
                    </div>
                    <div className = "search-bar">
                        <input className = "col-10" type="text" placeholder="Search.." name="search"/>
                        <button className = "col-2 btn btn-primary search-btn" type="submit">Submit</button>
                    </div>
                </div>

                <div id  = "slider" className="carousel slide slider-container" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" class="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block slider-image" src={require('../Images/slide1.jpg')} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block slider-image" src={require('../Images/slide2.jpg')} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block slider-image" src={require('../Images/slide3.jpg')} alt="Third slide"/>
                        </div>
                    </div>
                </div>

                <div className = "products-header" style = {{fontFamily:"Lemonada"}}>Our Products</div>
                <div className = "products-main-container">
                    <div className = "products-container">
                        <ProductComponent/>
                        <ProductComponent/>
                        <ProductComponent/>
                        <ProductComponent/>
                    </div>
                    <div className = "products-container">
                        <ProductComponent/>
                        <ProductComponent/>
                        <ProductComponent/>
                        <ProductComponent/>
                    </div>
                </div>
            </div>

            <div className = "Footer">
                <div className = "top-footer">
                    <div className="layer-container">
                        <FontAwesomeIcon icon = {faHeart} size = "3x" color = "#89c74a"/>
                        <div>
                            <div style = {{fontWeight:"500",color:"#89c74a"}}>100% Satisfaction</div>
                            <div>Lorem ipsum dolor</div>
                        </div>
                    </div>
                    <div className="layer-container">
                        <FontAwesomeIcon icon = {faShoppingBasket} size = "3x" color = "#89c74a"/>
                        <div>
                            <div style = {{fontWeight:"500",color:"#89c74a"}}>Best Quality Provided</div>
                            <div>Lorem ipsum dolor</div>
                        </div>
                    </div>
                    <div className="layer-container">
                        <FontAwesomeIcon icon = {faTag} size = "3x" color = "#89c74a"/>
                        <div>
                            <div style = {{fontWeight:"500",color:"#89c74a"}}>Great Deals Available</div>
                            <div>Lorem ipsum dolor</div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className = "details-footer">
                    <div className = "info-logo-container">
                        <div className = "logo-container">
                            <img className = "logo-img" alt = "logo" src = {require('../Images/rice-logo.png')}/>
                        </div>
                        <div className = "info-container">
                            <div style = {{display:"flex"}}>
                                <span style = {{width:"20%"}}><FontAwesomeIcon icon = {faPhone} flip = "horizontal"/></span>
                                <span>+00 254 321</span>
                            </div>
                            <div style = {{display:"flex"}}>
                                <span style = {{width:"20%"}}><FontAwesomeIcon icon = {faMobile}/></span>
                                +91 9876 543 210
                            </div>
                            <div style = {{display:"flex"}}>
                                <span style = {{width:"20%"}}><FontAwesomeIcon icon = {faEnvelope}/></span>
                                thinkershut@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className = "footer-categories">
                        <h5>CATEGORIES</h5>
                        <div className = "d-flex" style = {{flexDirection:"column",color:"gray"}}>
                            <span>Basmati Rice</span>
                            <span>Brown Rice</span>
                            <span>Seeraga Samba</span>
                            <span>Half Boiled</span>
                        </div>
                    </div>

                    <div className = "footer-categories">
                        <h5>ABOUT US</h5>
                        <div className = "d-flex" style = {{flexDirection:"column",color:"gray"}}>
                            <span>Company Information</span>
                            <span>Store Location</span>
                            <span>Blog</span>
                            <span>Copyright</span>
                        </div>
                    </div>
                </div>

                <div className = "copyright-footer">
                    <div>CopyRight 2020. Thinkershut. All Rights Reserved</div>
                    <div className = "payment-options-container">
                        <img alt = "paymnet-options" src= {require("../Images/cards.png")}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHome