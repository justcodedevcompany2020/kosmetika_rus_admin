const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
};
export const UpdateProductReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartUpdateProduct':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessUpdateProduct':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorUpdateProduct':
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