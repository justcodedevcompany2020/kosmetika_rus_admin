const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
    DeletStatus: false,
    DeletLoading: false
};
export const GetCategoryReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetCategory':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            temp.DeletLoading = false
            temp.DeletStatus = false
            break;
        case 'SuccessGetCategory':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            temp.DeletLoading = false
            temp.DeletStatus = false
            break
        case 'ErrorGetCategory':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            temp.DeletLoading = false
            temp.DeletStatus = false
            break
        case 'StartDeletCategory':
            temp.DeletLoading = true
            temp.DeletStatus = false
            break
        case 'SuccessDelectCategory':
            temp.DeletLoading = false
            temp.DeletStatus = true
            break
        case 'ErrorDeletCategory':
            temp.DeletLoading = false
            temp.DeletStatus = false
            break
        default:
            return temp;
    }
    return temp;
} 