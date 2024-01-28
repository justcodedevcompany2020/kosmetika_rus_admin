const initialState = {
    data: [],
    status: false,
    loading: false,
    error: "",
    deletLoading: false,
};
export const GetStoryTeamReducer = (state = initialState, action) => {
    let temp = { ...state }
    switch (action.type) {
        case 'StartGetStoryTeam':
            temp.data = []
            temp.status = false
            temp.loading = true
            temp.error = ''
            temp.deletLoading = false
            break;
        case 'SuccessGetStoryTeam':
            temp.data = action.data
            temp.status = true
            temp.loading = false
            temp.error = ''
            temp.deletLoading = false
            break
        case 'ErrorGetStoryTeam':
            temp.data = ''
            temp.status = false
            temp.loading = false
            temp.error = 'error'
            temp.deletLoading = false

            break
        case "StartDeletStoryTeam":
            temp.deletLoading = true
            break
        default:
            return temp;
    }
    return temp;
} 