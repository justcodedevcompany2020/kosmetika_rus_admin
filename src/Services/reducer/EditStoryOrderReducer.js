const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
};
export const EditStoryOrderReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartEditOrder':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            break;
        case 'SuccessGetSinglStory':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorEditOrder':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        case 'ClearEditOrder':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = ''
            break
        default:
            return temp;
    }
    return temp;
} 