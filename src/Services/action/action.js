import {
    ErrorGetCategory, ErrorGetOrder, ErrorGetProduct, ErrorGetUser, ErrorLogin, ErrprGetSinglUser,
    ErrorCreatProduct, ErrorCreatStoryTeam, ErrorDeletCategory, ErrorEditOrder, ErrorGetAllUSer, ErrorGetBreand, ErrorGetCollections, ErrorGetForAge, ErrorGetGenders, ErrorGetMyOrder, ErrorGetPlatforms, ErrorGetReducer, ErrorGetSinglOrder, ErrorGetSinglProfil, ErrorGetSinglStory, ErrorGetSlider, ErrorGetStoryTeam, ErrorSinglPageAction, ErrorUpdateProduct, ErrorGetComments, ErrorGetSinglProduct, ErrorGetPadborki, ErrorGertPeau
} from "./errorAction";
import {
    StartGetCategory, StartGetOrders, StartGetProduct, StartGetSinglUser, StartGetUser, StartLogin,
    StartCreatPorduct, StartCreataStoryTeam, StartDeletCategory, StartDeletStoryTeam, StartEditOrder, StartGetALLUser, StartGetBreands, StartGetCollections, StartGetForAge, StartGetGenders, StartGetMyOrder, StartGetPlatofrms, StartGetProducts, StartGetSinglOrder, StartGetSinglPageAction, StartGetSinglProfil, StartGetSinglStory, StartGetSlider, StartGetStoryTeam, StartUpdateProduct, StartGetComments, StartGetSinglProduct, StartGetPadborki, StartGetPeau
} from "./startAction";
import {
    SuccessGetCategory, SuccessGetOrders, SuccessGetProduct, SuccessGetUser,
    SuccessCreatProduct, SuccessCreateStoryTeam, SuccessDelectCategory, SuccessGetBreand, SuccessGetChatRedcuer, SuccessGetCollections, SuccessGetForAge, SuccessGetGenders, SuccessGetMyOrder, SuccessGetPlatforms, SuccessGetProducts, SuccessGetSinglOrder, SuccessGetSinglProfil, SuccessGetSinglStory, SuccessGetSinglUser, SuccessGetSlider, SuccessGetStoryTeam, SuccessLastSlider, SuccessLogin, SuccessSinglPageChat, SuccessUpdateProduct, SucessGetAllUser, SuccessGetComments, SuccessGetComments1, SuccessGetSinglProduct, SuccessGetPadborki, SuccessGetPeau

} from "./successAction";

let api = 'https://basrarusbackend.justcode.am/api/admin'
let api2 = 'https://basrarusbackend.justcode.am/api'

let token = localStorage.getItem('token')


export const GetCategory = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetCategory())
        fetch(`${api}/get_category?platform_id=${id}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetCategory(r))
                }
                else {
                    dispatch(ErrorGetCategory())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetCategory())
            });
    }
}

export const LoginAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartLogin())
        fetch(`${api}/login`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessLogin(r))
                }
                else {
                    dispatch(ErrorLogin())
                }
            })
            .catch((error) => {
                dispatch(ErrorLogin())
            });
    }
}

export const GetAllUsersAction = (page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,

    };
    return (dispatch) => {
        dispatch(StartGetUser())
        fetch(`${api}/all_users?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetUser(r.data))
                }
                else {
                    dispatch(ErrorGetUser())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetUser())
            });
    }
}
export const GetAllProducts = (page, data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetProduct())
        fetch(`${api}/get_products?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetProduct(r.data))
                    // dispatch(SuccessGetUser(r.data))
                }
                else {
                    dispatch(ErrorGetProduct())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetProduct())
            });
    }
}

export const GetAllOrder = (data, page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetOrders())
        fetch(`${api}/get_orders?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetOrders(r.data))
                }
                else {
                    dispatch(ErrorGetOrder())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetOrder())
            });
    }
}

export const GetSinglUser = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglUser())
        fetch(`${api}/single_page_user`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglUser(r))
                }
                else {
                    dispatch(ErrprGetSinglUser())
                }
            })
            .catch((error) => {
                dispatch(ErrprGetSinglUser())
            });
    }
}



export const DeletCategoryAction = (data, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartDeletCategory())
        fetch(`${api}/delete_category`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCategory(id))
                    dispatch(SuccessDelectCategory(r))
                }
                else {
                    dispatch(ErrorDeletCategory())
                }
            })
            .catch((error) => {
                dispatch(ErrorDeletCategory())
            });
    }
}

export const UpdateCategoryAction = (data, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", data.name);
    if (data.image) {
        formdata.append("photo", data.photo, "file");
    }
    formdata.append("category_id", data.id);
    formdata.append("platform_id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/update_category`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCategory(id))
                }
            })
            .catch(error => {
            });
    }
}

export const GetBrandAction = (page, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetBreands())
        fetch(`${api}/get_brands`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetBreand(r))
                }
                else {
                    dispatch(ErrorGetBreand())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetBreand())
            });
    }
}

export const UpdateBrendCategory = (data, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", data.name);
    if (data.image) {
        formdata.append("photo", data.photo, "file");
    }
    formdata.append("brand_id", data.id);
    formdata.append("platform_id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/update_brand`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetBrandAction(id))
                }
            })
            .catch(error => {
            });
    }

}

export const DelectBrandAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartDeletCategory())
        fetch(`${api}/delete_brand`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetBrandAction(data.page, data.platform_id))
                }
            })
            .catch((error) => {
            });
    }
}

export const GetCollectionAction = (page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetCollections())
        fetch(`${api}/all_podborki?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetCollections(r))
                }
                else {
                    dispatch(ErrorGetCollections())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetCollections())
            });
    }
}

export const DeletCollectionAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartDeletCategory())
        fetch(`${api}/delete_podborka`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCollectionAction())
                }
            })
            .catch((error) => {
            });
    }

}

export const UpdateCollectionAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("podborka_id", data.id);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/update_podborki`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetCollectionAction())
                }
            })
            .catch(error => {
            });
    }
}

export const GetGendersAction = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetGenders())
        fetch(`${api2}/get_genders`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetGenders(r))
                }
                else {
                    dispatch(ErrorGetGenders())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetGenders())
            });
    }
}
export const GetForAge = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetForAge())
        fetch(`${api2}/get_for_age`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetForAge(r))
                }
                else {
                    dispatch(ErrorGetForAge())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetForAge())
            });
    }
}

export const GetPlatforms = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetPlatofrms())
        fetch(`${api2}/get_platforms`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetPlatforms(r))
                }
                else {
                    dispatch(ErrorGetPlatforms())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetPlatforms())
            });
    }
}


export const CreatProductAction = (data) => {
    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", data.name)
    formdata.append("price", data.price);
    formdata.append("discount", data.discount);
    formdata.append("product_count", data.product_count);
    formdata.append("volume", data.volume);
    formdata.append("vendor_code", data.vendor_code);
    formdata.append("skin_type", data.skin_type);
    formdata.append("parent_category_id", data.parent_category_id);
    // formdata.append("category_id", data.category_id);
    // formdata.append("brands_id", data.brands_id);
    // formdata.append("gender_id", data.gender_id);
    formdata.append("for_age_id", data.for_age_id);
    // formdata.append("platform_id", data.platform_id);
    formdata.append("description", data.description);
    formdata.append("characteristics", data.characteristics);
    formdata.append("compound", data.compound);
    formdata.append("peau_id", data.peau_id);
    for (const image of data.photos) {
        formdata.append("photos[]", image);
    }
    for (const podborki of data.podborki) {
        formdata.append("podborki[]", podborki);
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartCreatPorduct())
        fetch(`${api}/create_product`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessCreatProduct(r))
                }
                else {
                    console.log(r)
                    dispatch(ErrorCreatProduct())
                }
            })
            .catch(error => {
                dispatch(ErrorCreatProduct())
            });
    }
}


export const DelectPorducetsAction = (data, page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartDeletCategory())
        fetch(`${api}/delete_product`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetAllProducts({ page: page }))
                }
            })
            .catch((error) => {
            });
    }
}

export const GetSinglProductAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    };
    return (dispatch) => {
        dispatch(StartGetSinglProfil())
        fetch(`${api}/single_page_product`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglProfil(r.data))
                }
                else {
                    dispatch(ErrorGetSinglProfil())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetSinglProfil())
            });
    }
}

export const UpdateProduct = (data) => {
    let token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", data.name)
    formdata.append("price", data.price);
    formdata.append("discount", data.discount);
    formdata.append("product_count", data.product_count);
    formdata.append("volume", data.volume);
    formdata.append("vendor_code", data.vendor_code);
    formdata.append("skin_type", data.skin_type);
    formdata.append("parent_category_id", data.parent_category_id);
    formdata.append("category_id", data.category_id);
    // formdata.append("brands_id", data.brands_id);
    // formdata.append("gender_id", data.gender_id);
    formdata.append("for_age_id", data.for_age_id);
    // formdata.append("platform_id", data.platform_id);
    formdata.append("description", data.description);
    formdata.append("characteristics", data.characteristics);
    formdata.append("compound", data.compound);
    formdata.append("product_id", data.product_id)
    formdata.append("peau_id", data.peau_id)

    for (const image of data.photos) {
        formdata.append("photos[]", image);
    }
    for (const podborki of data.podborki) {
        formdata.append("podborki[]", podborki);
    }
    for (const dpodborki of data.deleted_podborki) {
        formdata.append("deleted_podborki[]", JSON.stringify(dpodborki));

    }
    for (const dimg of data.deleted_photo) {
        formdata.append("deleted_photo[]", dimg);
    }
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    console.log('11')
    return (dispatch) => {
        dispatch(StartUpdateProduct())
        fetch(`${api}/update_product`, requestOptions)
            .then(response => response.json())
            .then(r => {
                console.log(r)
                if (r.status) {
                    dispatch(SuccessUpdateProduct(r))
                }
                else {
                    dispatch(ErrorUpdateProduct())
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(ErrorUpdateProduct())
            });
    }
}

export const CreateStoryTeamAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("photo", data.img);
    formdata.append("order", data.order);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartCreataStoryTeam())
        fetch(`${api}/create_story_theme`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessCreateStoryTeam(r.data))
                }
                else {
                    dispatch(ErrorCreatStoryTeam())
                }
            })
            .catch((error) => {
                dispatch(ErrorCreatStoryTeam())
            });
    }
}

export const GetStoryTeamAction = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetStoryTeam())
        fetch(`${api}/get_all_story_theme`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetStoryTeam(r.data))
                }
                else {
                    dispatch(ErrorGetStoryTeam())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetStoryTeam())
            });
    }
}

export const DeleteStoryTeamAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartDeletStoryTeam())
        fetch(`${api}/delete_story_theme`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetStoryTeamAction())
                }
                else {
                    dispatch(ErrorGetStoryTeam())

                }
            })
            .catch((error) => {
                dispatch(ErrorGetStoryTeam())
            });
    }
}

export const SinglStoryAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglStory())
        fetch(`${api}/single_page_story`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglStory(r.data))
                }
                else {
                    dispatch(ErrorGetSinglStory())

                }
            })
            .catch((error) => {
                dispatch(ErrorGetSinglStory())
            });
    }
}

export const EditStoryOrder = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartEditOrder())
        fetch(`${api}/change_order_for_story`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetStoryTeamAction())
                    dispatch(SuccessGetSinglStory(r.data))
                }
                else {
                    dispatch(ErrorEditOrder())

                }
            })
            .catch((error) => {
                dispatch(ErrorEditOrder())
            });
    }
}

export const ClearEditOrder = () => {
    return {
        type: "ClearEditOrder"
    }
}

export const CreatBannerAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("slider", data.type);
    formdata.append("file[]", data.img);
    formdata.append("platform_id", data.platformid);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartCreataStoryTeam())
        fetch(`${api}/create_baner`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetSliderAction('first', data.platformid))
                    dispatch(GetSliderAction('last', data.platformid))

                }
                else {
                }
            })
            .catch((error) => {
            });
    }
}

export const GetSliderAction = (data, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetSlider())
        fetch(`${api}/get_slider?slider=${data}&platform_id=${id}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {

                    if (data === 'first') {
                        dispatch(SuccessGetSlider(r.data))
                    }
                    else {
                        dispatch(SuccessLastSlider(r.data))
                    }

                }
                else {
                    dispatch(ErrorGetSlider())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetSlider())
            });
    }
}

export const DeletSlideAction = (data, type, id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        // dispatch(StartDeletStoryTeam())
        fetch(`${api}/delete_baner`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetSliderAction('first', id))
                    dispatch(GetSliderAction('last', id))
                }
                else {
                }
            })
            .catch((error) => {
            });
    }
}
export const AddPhotoOrVidioStroyMedia = (data) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("story_id", data.type);
    formdata.append("file[]", data.img);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    return (dispatch) => {
        // dispatch(StartCreataStoryTeam())
        fetch(`${api}/add_photo_or_video_in_story`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SinglStoryAction({ story_id: data.type }))
                }
                else {
                }
            })
            .catch((error) => {
            });
    }
}

export const DeletStroyMedia = (data, type) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        // dispatch(StartDeletStoryTeam())
        fetch(`${api}/delete_photo_or_video_in_story`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SinglStoryAction({ story_id: type }))
                    // dispatch(GetSliderAction(type))
                }
                else {
                }
            })
            .catch((error) => {
            });
    }
}


export const GetMyChatRoom = (data, page) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };
    return (dispatch) => {
        // dispatch(StartGetChatReducer())
        fetch(`${api}/get_my_chat_rooms?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetChatRedcuer(r.data.data))
                }
                else {
                    dispatch(ErrorGetReducer())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetReducer())
            });
    }
}


export const GetSinglPageChatRoom = (data, page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };
    return (dispatch) => {
        dispatch(StartGetSinglPageAction())
        fetch(`${api}/single_page_chat?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessSinglPageChat(r.data))
                }
                else {
                    dispatch(ErrorSinglPageAction())
                }
            })
            .catch((error) => {
                dispatch(ErrorSinglPageAction())
            });
    }
}

export const NewMsgAction = (data) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };
    return (dispatch) => {
        fetch(`${api}/new_message`, requestOptions)
            .then((r) => r.json())
            .then(r => {
            })
            .catch((error) => {
            });
    }
}

export const AddMsgAction = (data) => {
    return {
        type: "AddMsgAction",
        data
    }
}

export const LogOutAction = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartLogin())
        fetch(`${api}/logout`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    localStorage.removeItem('token')
                    dispatch(SuccessLogin(r))
                }
                else {
                    dispatch(ErrorLogin())
                }
            })
            .catch((error) => {
                dispatch(ErrorLogin())
            });
    }
}

export const GetOrderAction = (data, page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetMyOrder())
        fetch(`${api}/get_orders?page=${page}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetMyOrder(r.data))
                }
                else {
                    dispatch(ErrorGetMyOrder())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetMyOrder())
            });
    }
}

export const GetSinglOrder = (data) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglOrder())
        fetch(`${api}/single_page_order`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetSinglOrder(r.data))
                }
                else {
                    dispatch(ErrorGetSinglOrder())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetSinglOrder())
            });
    }
}

export const GetAllUser = (page) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetALLUser())
        fetch(`${api}/all_users?page=${page}`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SucessGetAllUser(r.data))
                }
                else {
                    dispatch(ErrorGetAllUSer())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetAllUSer())
            });
    }
}

export const GetComments = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetComments())
        fetch(`${api}/get_comments`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetComments(r.data))
                }
                else {
                    dispatch(ErrorGetComments())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetComments())
            });
    }
}

export const ChangeStarStatus = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        // dispatch(StartGetComments())
        fetch(`${api}/change_status_comment`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(GetComments({ status: data.id }))
                }
                else {
                    // dispatch(ErrorGetComments())
                }
            })
            .catch((error) => {
                // dispatch(ErrorGetComments())
            });
    }
}


export const GetSinglPorduct = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        dispatch(StartGetSinglProduct())
        fetch(`${api}/single_page_order`, requestOptions)
            .then((r) => r.json())
            .then(r => {

                if (r.status) {
                    console.log(r.data, 'ds')
                    dispatch(SuccessGetSinglProduct(r.data))
                }
                else {
                    dispatch(ErrorGetSinglProduct())
                }
            })
            .catch((error) => {
                dispatch(ErrorGetSinglProduct())
            });
    }
}


export const ChangeOrderStatus = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
    };
    return (dispatch) => {
        fetch(`${api}/change_status_for_order`, requestOptions)
            .then((r) => r.json())
            .then(r => {
            })
            .catch((error) => {
            });
    }
}

export const GetPorductWhitePadborki = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetPadborki())
        fetch(`https://basrarusbackend.justcode.am/api/app/get_podborki_with_products`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                if (r.status) {
                    dispatch(SuccessGetPadborki(r.data))
                }
            })
            .catch((error) => {
                dispatch(ErrorGetPadborki())
            });
    }
}

export const GetTypePeau = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    return (dispatch) => {
        dispatch(StartGetPeau())
        fetch(`${api}/get_TypePeau`, requestOptions)
            .then((r) => r.json())
            .then(r => {
                console.log('ss')
                if (r.status) {
                    dispatch(SuccessGetPeau(r.data))
                }
                else {
                    dispatch(ErrorGertPeau())
                }
            })
            .catch((error) => {
                dispatch(ErrorGertPeau())
            });
    }
}