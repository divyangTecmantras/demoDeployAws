import React from 'react';
import { FormattedMessage } from 'react-intl';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import image from '../../../assets/images/Tastes_on_way.png';
// import '../../../assets/styles/style.css';
import './HomeHeader.css';

const HomeHeader = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light NavHead NavbackWhite">
                <div className="container">
                    <a href="/" className="navbar-brand BrandLogo">
                        <img src={image} alt="" className="ImgWidthFix img-fluid" />
                    </a>
                    <ul className="navbar-nav DisplayHideResp">
                        <li className="nav-item">
                            <a
                                className="nav-link NavLinkColor"
                                href="/"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                <FormattedMessage id="Home_page.Login" defaultMessage="Login" />
                            </a>
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <Login />
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link NavLinkColor"
                                href="/"
                                data-toggle="modal"
                                data-target="#exampleModal1"
                            >
                                <FormattedMessage id="Home_page.SignUp" defaultMessage="Signup" />
                            </a>
                            <div
                                className="modal fade"
                                id="exampleModal1"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <SignUp />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default HomeHeader;
