const initialState = {
    data: {},
    status: false,
    loading: false,
    error: "",
};
export const GetSinglProductPage = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetSinglProduct':
            temp.data = {}
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetSinglProduct':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorGetSinglProduct':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 