const initialState = {
    data: [],
    status: false,
    loading: false,
    lastSlider: [],
    error: "",
};
export const GetSliderRderucer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetSlider':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetSlider':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorGetSlider':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        case 'SuccessLastSlider':
            temp.lastSlider = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        default:
            return temp;
    }
    return temp;
} 