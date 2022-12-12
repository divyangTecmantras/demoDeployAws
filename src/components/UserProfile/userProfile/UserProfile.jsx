import React, { useEffect } from 'react';
import Profile from '../profile/Profile';
import EditProfile from '../editProfile/EditProfile';
import Activity from '../activity/Activity';
import Loader from '../../common/Loader';
import { fetchUserInfo } from '../../../redux/actions/user/userInfo';
import { fetchUserOrderHistory } from '../../../redux/actions/user/userOrderHistory';
import { fetchUserAddress } from '../../../redux/actions/user/userAddress';
import { fetchKitchenOwnerList } from '../../../redux/actions/kitchenOwner/KitchenOwnerList';
import { useDispatch, useSelector } from 'react-redux';
import '../../../assets/styles/media.css';
import './UserProfile.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { deleteUserAddress } = useSelector((state) => ({
        deleteUserAddress: state?.deleteAddress?.payload,
    }));

    const { customerSupportLoading } = useSelector((state) => ({
        customerSupportLoading: state?.customerSupport?.loading,
    }));

    const { customerSupport } = useSelector((state) => ({
        customerSupport: state?.customerSupport?.payload.data,
    }));

    const { addUserAddresssuccess } = useSelector((state) => ({
        addUserAddresssuccess: state?.addUserAddress?.payload?.data,
    }));

    const { updateUserProfile } = useSelector((state) => ({
        updateUserProfile: state?.updateUserProfile?.payload?.data,
    }));

    useEffect(() => {
        const apiData = {
            date_filter: 'all',
            latitude: '23.0747676',
            longitude: '72.535598',
            radius: '6',
        };
        const kitchenListData = {
            lat: '23.0363817',
            long: '72.542188',
            city_name: 'Ahmedabad',
            radius: '5',
            search_by: '',
            area_name: 'Prahlad Nagar',
        };
        dispatch(fetchUserInfo());
        dispatch(fetchUserOrderHistory(apiData));
        dispatch(fetchUserAddress());
        dispatch(fetchKitchenOwnerList(kitchenListData));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteUserAddress, customerSupport, addUserAddresssuccess, updateUserProfile]);
    return (
        <>
            {customerSupportLoading ? (
                <div className="loader">
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="ProfilePage">
                        <Profile />
                    </div>
                    <div className="container">
                        <EditProfile />
                        <Activity />
                    </div>
                </>
            )}
        </>
    );
};

export default UserProfile;
