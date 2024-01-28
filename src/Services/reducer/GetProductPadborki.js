const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
};
export const GetProductPadborki = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetPadborki':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetPadborki':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorGetPadborki':
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