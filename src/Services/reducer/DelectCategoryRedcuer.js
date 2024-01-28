// const initialState = {
//     status: false,
//     loading: false,
// };
// export const DelectCategoryRedcuer = (state = initialState, action) => {
//     let temp = { ...state }
//     switch (action.type) {
//         case 'StartLogin':
//             temp.data = []
//             temp.status = false
//             temp.loading = true
//             temp.token = ''
//             temp.error = ''
//             break;
//         case 'SuccessDelectCategory':
//             temp.data = action.data.user
//             temp.token = action.data.token
//             temp.status = true
//             temp.loading = false
//             temp.error = ''
//             break
//         case 'ErrorDeletCategory':
//             temp.data = ''
//             temp.token = ''
//             temp.status = false
//             temp.loading = false
//             temp.error = action.data
//             break
//         default:
//             return temp;
//     }
//     return temp;
// } 