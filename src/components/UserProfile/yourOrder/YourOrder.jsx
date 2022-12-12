import React, { useState } from 'react';
import OrderDetails from '../../common/OrderDetails';
import ErrorFallback from '../../common/ErrorFallback';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { ErrorBoundary } from 'react-error-boundary';
import searchiconprofile from '../../../assets/images/searchiconprofile.png';
import trackorder from '../../../assets/images/trackorder.png';
import rupee from '../../../assets/images/rupeeiconblack.png';
import phoneCall from '../../../assets/images/phone-call.png';
import star from '../../../assets/images/star.png';
import recorder from '../../../assets/images/reorder.png';
import './YourOrder.css';
const YourOrder = () => {
    const [searchValue, setSearchValue] = useState('');

    const { userOrderHistory } = useSelector((state) => ({
        userOrderHistory: state?.userOrderHistory?.payload?.data?.data,
    }));

    return (
        <>
            <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
            >
                <h2 className="respmargtopprof">
                    <FormattedMessage
                        id="UserProfile_page.Your Order"
                        defaultMessage="Your Order"
                    />
                </h2>

                <div className="input-group mt-4">
                    <div className="input-group-prepend">
                        <div className="input-group-text ProfImgContact">
                            <img
                                src={searchiconprofile}
                                className="ImgSearchIconProf"
                                alt="serchiconprofile"
                            />
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control InputTypeSearchProf"
                        id="inlineFormInput"
                        placeholder="Search By Restaurant"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>

                <div className="side-bar">
                    {userOrderHistory?.map((data) => (
                        <div className="row" key={data.id}>
                            <div className="col-lg-12">
                                <div className="card mt-4 BoxCardProf ">
                                    <h5 className="card-header Boxcardborderbottom">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <img
                                                    src={data.business_owner.avatar}
                                                    className="WidthProfImg"
                                                    alt="profiledeliciousdosa"
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <h5 className="HeadProfBox">
                                                    {data?.business_owner_address?.office_name}
                                                </h5>
                                                <div className="NormalTextProf">
                                                    {data?.business_owner_address?.address}
                                                </div>
                                                <div className="NormalTextProf">
                                                    {Math.round(data.user_address.distance * 100) /
                                                        100}
                                                    <FormattedMessage
                                                        id="UserProfile_page.KM"
                                                        defaultMessage="KM"
                                                    />
                                                </div>
                                            </div>
                                            {data.order_status == 'On The Way' &&
                                            data.order_status == 'Preparing' &&
                                            data.order_status == 'Prepared' ? (
                                                <div className="text-success col-lg-6 d-flex justify-content-end">
                                                    <div>{data.order_status}</div>
                                                </div>
                                            ) : (
                                                <div className="col-lg-6">
                                                    <div className="BadgeMainDiv">
                                                        <a
                                                            href="/Profile"
                                                            className="badge TrackOrder"
                                                            data-toggle="modal"
                                                            data-target="#exampleModaltrack"
                                                        >
                                                            <FormattedMessage
                                                                id="UserProfile_page.Track Order"
                                                                defaultMessage="Track Order"
                                                            />{' '}
                                                            <img
                                                                src={trackorder}
                                                                alt="trackorder"
                                                            />
                                                        </a>
                                                        <div
                                                            className="modal fade"
                                                            id="exampleModaltrack"
                                                            tabIndex={-1}
                                                            aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true"
                                                        >
                                                            <div className="modal-dialog">
                                                                <div className="modal-content ContentLeft">
                                                                    <div className="modal-header">
                                                                        <h4
                                                                            className="modal-title"
                                                                            id="exampleModalLabel"
                                                                        >
                                                                            <FormattedMessage
                                                                                id="UserProfile_page.Track Your Order"
                                                                                defaultMessage="Track Your Order"
                                                                            />
                                                                        </h4>
                                                                        <button
                                                                            type="button"
                                                                            className="close"
                                                                            data-dismiss="modal"
                                                                            aria-label="Close"
                                                                        >
                                                                            <span aria-hidden="true">
                                                                                ×
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <iframe
                                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2335572155607!2d72.5286881153765!3d23.015195184956738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85811e6e44f3%3A0xab464c480b78aa76!2sICONIC%20SHYAMAL!5e0!3m2!1sen!2sin!4v1667901434226!5m2!1sen!2sin"
                                                                            width="100%"
                                                                            title="abcd"
                                                                            height="450"
                                                                            style={{ border: '0' }}
                                                                            loading="lazy"
                                                                            referrerPolicy="no-referrer-when-downgrade"
                                                                        />

                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="card mt-4">
                                                                                    <div className="card-body">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-8">
                                                                                                <div className="stepper d-flex flex-column">
                                                                                                    <div className="d-flex mb-1">
                                                                                                        <div className="d-flex flex-column pr-4 align-items-center">
                                                                                                            <div className="rounded-circle py-2 px-2 bg-danger text-white mb-1" />
                                                                                                            <div className="lineVert" />
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <div className="text-dark TextContent">
                                                                                                                {
                                                                                                                    data
                                                                                                                        ?.business_owner_address
                                                                                                                        ?.address
                                                                                                                }
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="d-flex mb-1">
                                                                                                        <div className="d-flex flex-column pr-4 align-items-center">
                                                                                                            <div className="rounded-circle py-2 px-2 bg-danger text-white mb-1" />
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <div className="text-dark TextContent">
                                                                                                                {
                                                                                                                    data
                                                                                                                        .user_address
                                                                                                                        .address
                                                                                                                }
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-lg-4">
                                                                                                <div className="TextContent TextEnd">
                                                                                                    <img
                                                                                                        src={
                                                                                                            rupee
                                                                                                        }
                                                                                                        className="RupeeBlackWidth"
                                                                                                        alt="rupee"
                                                                                                    />
                                                                                                    {
                                                                                                        data.order_final_total
                                                                                                    }
                                                                                                </div>
                                                                                                <div className="TextContent TextEnd MargintopDist">
                                                                                                    {Math.round(
                                                                                                        data
                                                                                                            .user_address
                                                                                                            .distance,
                                                                                                    )}
                                                                                                    <FormattedMessage
                                                                                                        id="UserProfile_page.KM"
                                                                                                        defaultMessage="KM"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="card mt-4">
                                                                                    <div className="card-header cardheadwhite">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-2">
                                                                                                <img
                                                                                                    src={
                                                                                                        data
                                                                                                            ?.delivery_person
                                                                                                            ?.avatar
                                                                                                    }
                                                                                                    className="WidthProfImgRider"
                                                                                                    alt="john-rider"
                                                                                                />
                                                                                            </div>
                                                                                            <div className="col-lg-6">
                                                                                                <div className="HeadProfBoxRider">
                                                                                                    {
                                                                                                        data
                                                                                                            ?.delivery_person
                                                                                                            ?.name
                                                                                                    }
                                                                                                    |
                                                                                                    <FormattedMessage
                                                                                                        id="UserProfile_page.Rider"
                                                                                                        defaultMessage="Rider"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="NormalTextProfRide mt-3">
                                                                                                    <img
                                                                                                        src={
                                                                                                            phoneCall
                                                                                                        }
                                                                                                        className="WidthIconCall"
                                                                                                        alt="phoneCall"
                                                                                                    />
                                                                                                    {
                                                                                                        data
                                                                                                            ?.delivery_person
                                                                                                            ?.mobile_number
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-4">
                                                                                                <div className="TextEnd">
                                                                                                    <span className="TextColor TextContent">
                                                                                                        {
                                                                                                            data
                                                                                                                ?.rating[0]
                                                                                                                ?.rating
                                                                                                        }
                                                                                                    </span>
                                                                                                    <img
                                                                                                        src={
                                                                                                            star
                                                                                                        }
                                                                                                        className="RatingImg"
                                                                                                        alt="star"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer ModalHomeFooterProfile" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ErrorBoundary
                                                        FallbackComponent={ErrorFallback}
                                                    >
                                                        <OrderDetails data={data} />
                                                    </ErrorBoundary>
                                                </div>
                                            )}
                                        </div>
                                    </h5>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <span className="TextOverflowCard">
                                                    {data.order_detail[0].quantity} x{' '}
                                                    {data.order_detail[0].menu_items[0].name}
                                                </span>
                                                <div className="mt-2 TextColor">
                                                    {data.date_for_incoming_order} at{' '}
                                                    {data.time_for_incoming_order}
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="BadgeMainDiv">
                                                    <span>
                                                        <img
                                                            src={rupee}
                                                            className="RupeeBlackWidth"
                                                            alt="rupee"
                                                        />
                                                        {data.order_final_total}
                                                    </span>
                                                </div>
                                                <div className="BadgeMainDiv">
                                                    <button className="btn btn-danger mt-3">
                                                        <img src={recorder} alt="recorder" />{' '}
                                                        <FormattedMessage
                                                            id="UserProfile_page.Reorder"
                                                            defaultMessage="Reorder"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default YourOrder;
