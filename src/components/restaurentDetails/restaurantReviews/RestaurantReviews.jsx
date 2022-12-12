import React from 'react';
import { FormattedMessage } from 'react-intl';
import previousSliderImg from '../../../assets/images/previous-slider.png';
import nextSliderImg from '../../../assets/images/next-slider.png';
import star from '../../../assets/images/star.png';
import starGroup from '../../../assets/images/star_group.png';
import './RestaurantReviews.css';
const RestaurantReviews = () => {
    return (
        <div className="row TopMargin">
            <div className="col-lg-12">
                <div className="">
                    <h3>
                        <FormattedMessage
                            id="RestaurentDetails.What People Are Saying"
                            defaultMessage="What People Are Saying"
                        />
                    </h3>
                    <div className="DeliciousDosaFont">
                        4.8 <img src={star} alt="" className="StarImgRest" /> 110 Rating{' '}
                        <span style={{ color: '#e70f0f' }}>
                            <FormattedMessage
                                id="RestaurentDetails.Tastes on way"
                                defaultMessage="Tastes on way"
                            />
                        </span>
                    </div>
                </div>

                <div className="DivClassControlsRestDetails">
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-target="#carouselExampleInterval1"
                        data-slide="prev"
                    >
                        <img src={previousSliderImg} alt="" className="ImgCarouselWidth" />
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-target="#carouselExampleInterval1"
                        data-slide="next"
                    >
                        <img src={nextSliderImg} alt="" className="ImgCarouselWidth" />
                    </button>
                </div>
                <div id="carouselExampleInterval1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner mt-5">
                        <div className="carousel-item active" data-interval="10000">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 RespMarTopCard">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Sophie{' '}
                                                <img src={starGroup} alt="" className="RatingImg" />
                                            </h5>
                                            <p className="card-text">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the
                                                industrys standardLorem Ipsum is simply dummy text
                                                of the printing and typesetting industry. Lorem
                                                Ipsum has been the industrys standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 RespMarTopCard">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Sophie{' '}
                                                <img src={starGroup} alt="" className="RatingImg" />
                                            </h5>
                                            <p className="card-text">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the
                                                industrys standardLorem Ipsum is simply dummy text
                                                of the printing and typesetting industry. Lorem
                                                Ipsum has been the industrys standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="2000">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 RespMarTopCard">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Sophie{' '}
                                                <img src={starGroup} alt="" className="RatingImg" />
                                            </h5>
                                            <p className="card-text">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the
                                                industrys standardLorem Ipsum is simply dummy text
                                                of the printing and typesetting industry. Lorem
                                                Ipsum has been the industrys standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 RespMarTopCard">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Sophie{' '}
                                                <img src={starGroup} alt="" className="RatingImg" />
                                            </h5>
                                            <p className="card-text">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the
                                                industrys standardLorem Ipsum is simply dummy text
                                                of the printing and typesetting industry. Lorem
                                                Ipsum has been the industrys standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 RespMarTopCard">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Sophie{' '}
                                                <img src={starGroup} alt="" className="RatingImg" />
                                            </h5>
                                            <p className="card-text">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the
                                                industrys standardLorem Ipsum is simply dummy text
                                                of the printing and typesetting industry. Lorem
                                                Ipsum has been the industrys standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 RespMarTopCard">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Sophie{' '}
                                                <img src={starGroup} alt="" className="RatingImg" />
                                            </h5>
                                            <p className="card-text">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the
                                                industrys standardLorem Ipsum is simply dummy text
                                                of the printing and typesetting industry. Lorem
                                                Ipsum has been the industrys standard.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantReviews;
