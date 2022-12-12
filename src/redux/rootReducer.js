import { combineReducers } from 'redux';
import countryDataReducer from './reducers/countryData/CountryDataReducer';
import registerUserReducer from './reducers/user/userRegisterReducer';
import loginUserReducer from './reducers/user/userLoginReducer';
import userOtpReducer from './reducers/user/UserOtpReducer';
import kitchenOwnerListReducer from './reducers/kitchenOwner/KitchenOwnerListReducer';
import kitchenOwnerMenuListReducer from './reducers/kitchenOwner/KitchenOwnerMenuListReducer';
import kitchenOwnerMenuItemListReducer from './reducers/kitchenOwner/KitchenOwnerMenuItemListReducer';
import kitchenOwnerDetailsReducer from './reducers/kitchenOwner/KitchenOwnerDetailsReducer';
import cartReducer from './reducers/cart/CartReducer';
import userInfoReducer from './reducers/user/userInfoReducer';
import userOrderHistoryReducer from './reducers/user/userOrderHistoryReducer';
import userAddressReducer from './reducers/user/userAddressReducer';
import customerSupportReducer from './reducers/user/customerSupportReducer';
import addUserAddressReducer from './reducers/user/addUserAddressReducer';
import deleteAddressReducer from './reducers/user/deleteAddressReducer';
import updateUserInfoReducer from './reducers/user/updateUserInfoReducer';
import viewCartReducer from './reducers/cart/ViewCartReducer';
import addToCartReducer from './reducers/cart/AddToCartReducer';
import createOrderReducer from './reducers/order/createOrderReducer';
import createOrderTransactionReducer from './reducers/order/createOrderTransactionReducer';
import createOrderDetailsReducer from './reducers/order/createOrderDetailsReducer';
import getPromoCodeReducer from './reducers/promoCode/getPromoCodeReducer';
import applyPromoCodeReducer from './reducers/promoCode/applyPromoCodeReducer';
import removePromoCodeReducer from './reducers/promoCode/removePromoCodeReducer';
import cancelOrderReducer from './reducers/order/cancelOrderReducer';
import topFiveRestaurantsListReducer from './reducers/kitchenOwner/TopFiveRestaurantsListReducer';
import orderAgainListReducer from './reducers/kitchenOwner/OrderAgainListReducer';
const rootReducer = combineReducers({
    countryData: countryDataReducer,
    loginUser: loginUserReducer,
    registerUser: registerUserReducer,
    otpUser: userOtpReducer,
    kitchenOwnerList: kitchenOwnerListReducer,
    kitchenOwnerDetails: kitchenOwnerDetailsReducer,
    kitchenOwnerMenuList: kitchenOwnerMenuListReducer,
    kitchenOwnerMenuItemList: kitchenOwnerMenuItemListReducer,
    topFiveRestaurantsList: topFiveRestaurantsListReducer,
    orderAgainList: orderAgainListReducer,
    cartItems: cartReducer,
    userInfo: userInfoReducer,
    userOrderHistory: userOrderHistoryReducer,
    userAddress: userAddressReducer,
    customerSupport: customerSupportReducer,
    addUserAddress: addUserAddressReducer,
    deleteAddress: deleteAddressReducer,
    updateUserProfile: updateUserInfoReducer,
    viewCartItems: viewCartReducer,
    addToCart: addToCartReducer,
    createOrder: createOrderReducer,
    createOrderTransaction: createOrderTransactionReducer,
    orderDetails: createOrderDetailsReducer,
    promoCodes: getPromoCodeReducer,
    applyPromoCode: applyPromoCodeReducer,
    removePromoCode: removePromoCodeReducer,
    cancelOrder: cancelOrderReducer,
});

export default rootReducer;
