const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
};
export const CreateProductReducet = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartCreatPorduct':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessCreatProduct':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorCreatProduct':
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