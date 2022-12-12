import React from 'react';
import { removeItem } from '../../../utils/utils';
import { userOtpClean } from '../../../redux/actions/user/userOtp';
import { userLoginClean } from '../../../redux/actions/user/userLogin';
import Toastify from '../../common/Toastify';
import { LOGOUT_SUCCESSFULL, SUCCESS_TOASTIFY_TYPE } from '../../../utils/enum';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import image from '../../../assets/images/Tastes_on_way.png';
import './UserProfileHeader.css';

const UserProfileHeader = () => {
    const { userInfo } = useSelector((state) => ({
        userInfo: state?.userInfo?.payload?.data,
    }));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        removeItem('token');
        dispatch(userOtpClean());
        dispatch(userLoginClean());
        navigate('/');
        Toastify(LOGOUT_SUCCESSFULL, SUCCESS_TOASTIFY_TYPE);
    };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light NavHead NavbackWhite">
                <div className="container">
                    <a href="/" className="navbar-brand BrandLogo">
                        <img src={image} className="ImgWidthFix img-fluid" alt="img" />
                    </a>

                    <div>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn"
                                onClick={() => navigate('/profile')}
                            >
                                <img
                                    style={{ width: '51px', height: '51px', borderRadius: '50%' }}
                                    src={userInfo?.avatar}
                                    alt="avatar"
                                />
                                <span className="Prtext">{userInfo?.name}</span>
                            </button>
                            <button
                                type="button"
                                className="btn BtnDropDown dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                data-reference="parent"
                            />
                            <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={logOut}>
                                    <FormattedMessage
                                        id="UserProfile_page.Logout"
                                        defaultMessage="Logout"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default UserProfileHeader;
