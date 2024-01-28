const initialState = {
    data: [],
    status: false,
    loading: true,
    token: '',
    error: ""
};
export const Auth_reducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartLogin':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.token = ''
            temp.error = ''
            break;
        case 'SuccessLogin':
            temp.data = action.data.user
            temp.token = action.data.token
            temp.status = true
            temp.loading = false
            temp.error = ''
            break
        case 'ErrorLogin':
            temp.data = ''
            temp.token = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            break
        default:
            return temp;
    }
    return temp;
} 