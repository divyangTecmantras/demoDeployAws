import React, { useState } from 'react';
import * as yup from 'yup';
import { Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import { addUserAddress } from '../../../redux/actions/user/addUserAddress';
import { setItem } from '../../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import home from '../../../assets/images/home.png';
import addNewAddress from '../../../assets/images/addnewaddress.png';
import './CartAddress.css';
import { setUserAddress } from '../../../redux/actions/user/userAddress';
const CartAddress = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const { userAddress } = useSelector((state) => ({
        userAddress: state?.userAddress?.payload?.data,
    }));

    const handleShow = () => setShow(!show);

    const handelDeliverHere = (id, address, area, landMark, city, pinCode) => {
        const currentAddress = {
            id: id,
            address: address,
            area: area,
            landMark: landMark,
            city: city,
            pinCode: pinCode,
        };
        setItem('currentAddress', JSON.stringify(currentAddress));
        dispatch(setUserAddress(currentAddress));
    };
    const formik = useFormik({
        initialValues: {
            Address: '',
            Area: '',
            Landmark: '',
            City: '',
            Zip: '',
            AddressType: '',
        },
        validationSchema: yup.object({
            Address: yup.string().required('Address is Required'),
            Area: yup.string().required('Area is Required'),
            Landmark: yup.string().required('Landmark is Required'),
            City: yup.string().required('City is Required'),
            Zip: yup.string().max(6, 'Please Enter Valid Zip Code').required('Zip is Required'),
            AddressType: yup.string().required('Please Select Address Type'),
        }),
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            const apiData = {
                city_name: values.City,
                address: values.Address,
                area: values.Area,
                land_mark: values.Landmark,
                pin_code: values.Zip,
                address_type: values.AddressType,
                latitude: '23.0120',
                longitude: '72.5108',
            };
            dispatch(addUserAddress(apiData));
            resetForm();
            setShow(!show);
        },
    });
    return (
        <div className="col-lg-8">
            <div className="row">
                <div className="DivDeliveryAddress">
                    <div className="DeliciousDosaFont">Choose a delivery address</div>
                    {userAddress?.length > 1 ? (
                        <div className="TextColor">Multiple addresses in this location</div>
                    ) : (
                        ''
                    )}

                    <div className="row">
                        {userAddress?.length > 0 &&
                            userAddress?.map((d) => {
                                return (
                                    <div className="col DivBoxAddress" key={d.id}>
                                        <img src={home} alt="homeIcon" />
                                        <span className="HomeAddress">Home</span>
                                        <p className="TextAdd">
                                            {userAddress
                                                ? `${d.address},${d.area},${d.land_mark},${d.pin_code}.`
                                                : ''}
                                        </p>
                                        {/* <p>38 mins</p> */}
                                        <button
                                            type="button"
                                            className="btn btn-danger mt-5 BtnDeliverHere"
                                            data-dismiss="modal"
                                            onClick={() =>
                                                handelDeliverHere(
                                                    d.id,
                                                    d.address,
                                                    d.area,
                                                    d.land_mark,
                                                    d.city_name,
                                                    d.pin_code,
                                                )
                                            }
                                        >
                                            Deliver Here
                                        </button>
                                    </div>
                                );
                            })}

                        <div className="col DivBoxAddress">
                            <img src={addNewAddress} alt="addNewAddress" />
                            <span className="HomeAddress">Add New Address</span>
                            <p></p>
                            <button
                                type="button"
                                className="btn btn-danger BtnAddnewAdd"
                                onClick={() => handleShow()}
                            >
                                Add New
                            </button>
                        </div>
                    </div>
                    <Modal show={show} onHide={handleShow} animation={false}>
                        <div className="modal-content ContentLeft">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">
                                    Add New Address
                                </h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span onClick={() => handleShow()} aria-hidden="true">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row AddAddressModal">
                                    <div className="col-lg-12">
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Address</label>
                                                <input
                                                    name="Address"
                                                    type="text"
                                                    className="form-control AddAddressModal"
                                                    id="inputAddress"
                                                    placeholder="1006, hospitality exacel"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.Address}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.errors.Address && (
                                                    <p style={{ color: 'red' }}>
                                                        {formik.errors.Address}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress2">Area</label>
                                                <input
                                                    name="Area"
                                                    type="text"
                                                    className="form-control AddAddressModal"
                                                    id="inputAddress2"
                                                    placeholder="shyamal"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.Area}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.errors.Area && (
                                                    <p style={{ color: 'red' }}>
                                                        {formik.errors.Area}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress2">Landmark</label>
                                                <input
                                                    name="Landmark"
                                                    type="text"
                                                    className="form-control AddAddressModal"
                                                    id="inputAddress2"
                                                    placeholder="Ahmedabad"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.Landmark}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.errors.Landmark && (
                                                    <p style={{ color: 'red' }}>
                                                        {formik.errors.Landmark}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputCity">City</label>
                                                    <input
                                                        name="City"
                                                        type="text"
                                                        className="form-control AddAddressModal"
                                                        id="inputCity"
                                                        placeholder="Ahmedabad"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.City}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.City && (
                                                        <p style={{ color: 'red' }}>
                                                            {formik.errors.City}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputZip">Zip</label>
                                                    <input
                                                        name="Zip"
                                                        type="text"
                                                        className="form-control AddAddressModal"
                                                        id="inputZip"
                                                        placeholder="380015"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.Zip}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.Zip && (
                                                        <p style={{ color: 'red' }}>
                                                            {formik.errors.Zip}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputState">Address Type</label>
                                                    <select
                                                        name="AddressType"
                                                        id="inputState"
                                                        className="form-control"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.AddressType}
                                                    >
                                                        <option
                                                            selected="{true}"
                                                            className="selectoption"
                                                        >
                                                            Select Address Type
                                                        </option>
                                                        <option value="1">Home</option>
                                                        <option value="2">Work</option>
                                                        <option value="3">Other</option>
                                                    </select>
                                                    {formik.errors.AddressType && (
                                                        <p style={{ color: 'red' }}>
                                                            {formik.errors.AddressType}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-danger AddAddressModal"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                Add Address
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer ModalHomeFooterProfile" />
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default CartAddress;
