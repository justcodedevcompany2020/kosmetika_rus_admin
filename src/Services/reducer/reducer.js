import { combineReducers } from "redux";
import { Auth_reducer } from './auth_reducer'
import { GetUserReducer } from "./GetUserReducer";
import { GetAllProductsReducer } from "./GetAllProductsReducer";
import { GetAllOrdersReducer } from "./GetAllOrdersReducer";
import { GetSinglUserReducer } from "./GetSinglUserReducer";
import { GetCategoryReducer } from './GetCategoryReducer'
import { GetBrandsReducer } from './GetBrandsReducer'
import { GetCollectionsReducer } from './GetCollectionsReducer'
import { GetGendersReducer } from './GetGendersReducer'
import { GetForAgeReducer } from './GetForAgeReducer'
import { GetPlatformsReducer } from './GetPlatformsReducer'
import { CreateProductReducet } from './CreateProductReducet'
import { GetSinglProductReducer } from './GetSinglProductReducer'
import { UpdateProductReducer } from './UpdateProductReducer'
import { CreateStoryTeamReducer } from './CreateStoryTeamReducer'
import { GetStoryTeamReducer } from './GetStoryTeamReducer'
import { GetSinglStoryReducer } from './GetSinglStoryReducer'
import { EditStoryOrderReducer } from './EditStoryOrderReducer'
import { GetSliderRderucer } from './GetSliderRderucer'
import { GetSinglPageChatRoomReducer } from './GetSinglPageChatRoomReducer'
import { GetMyOrderReducer } from './GetMyOrderReducer'
import { GetSinglOrderReducer } from './GetSinglOrderReducer'
import { GetAllUSerReducer } from './GetAllUSerReducer'
import { GetCommentsReducer } from "./GetCommentsReducer";
import { GetSinglProductPage } from "./GetSinglProductPage";
import { GetProductPadborki } from "./GetProductPadborki";
import { GetPeauReducer } from "./GetPeauReducer";

export default combineReducers({
    Auth_reducer,
    GetUserReducer: GetUserReducer,
    GetAllProductsReducer: GetAllProductsReducer,
    GetAllOrdersReducer: GetAllOrdersReducer,
    GetSinglUserReducer: GetSinglUserReducer,
    getCategory: GetCategoryReducer,
    getBrand: GetBrandsReducer,
    getCollections: GetCollectionsReducer,
    getGender: GetGendersReducer,
    getForAge: GetForAgeReducer,
    getPlatfors: GetPlatformsReducer,
    createProduct: CreateProductReducet,
    getProducts: GetAllProductsReducer,
    getSinglProduct: GetSinglProductReducer,
    updateProduct: UpdateProductReducer,
    createStoryTeam: CreateStoryTeamReducer,
    getStoryTeam: GetStoryTeamReducer,
    getSinglStory: GetSinglStoryReducer,
    editStoryOrder: EditStoryOrderReducer,
    getSlider: GetSliderRderucer,
    getSinglChat: GetSinglPageChatRoomReducer,
    getMyOrder: GetMyOrderReducer,
    getSinglOrder: GetSinglOrderReducer,
    getAllUser: GetAllUSerReducer,
    getSinglUSer: GetSinglUserReducer,
    GetCommentsReducer: GetCommentsReducer,
    GetSinglProductPage: GetSinglProductPage,
    GetProductPadborki: GetProductPadborki,
    getPeau: GetPeauReducer
})