// import React, { createContext, useReducer } from "react";
// import { EditorState } from "draft-js";

// let AppContext = createContext('');

    

// const initialState = {
//     authState: false,
//     id: {},
//     user: {},
//     editId: '',
//     draftHtml: EditorState.createEmpty(),
//     openFormModal: false,
//     modalUpdateFlag: false,
//     orgLogin: false,
//     editData: {},
//     editUserGroupData: {},
//     editUserGroupDataBool: false,
//     imageUrl: '',
//     tabsPersmission: [],
//     valTel: '',
//     usersObj: {},
// }
// let reducer = (state, action) => {
//     // eslint-disable-next-line default-case
//     switch (action.type) {
//         case "setAuthState": {
//             console.log("action", action.payload);
//             return {
//                 ...state,
//                 // authState: action.payload.authState,
//                 user: action.payload.user
//             }
//         }
//         case "setModal": {
//             return {
//                 ...state,
//                 modalUpdateFlag: action?.payload?.modalUpdateFlag || false,
//                 openFormModal: action?.payload?.openFormModal,
//                 editData: {}
//             }
//         }
//         case "setEditData": {
//             console.log("sami", action.payload);
//             return {
//                 ...state,
//                 editData: action.payload
//             }
//         }
//         case "setEditUserGroupData": {
//             console.log("User Group edit data in state", action.payload);
//             return {
//                 ...state,
//                 editUserGroupData: action.payload
//             }
//         }
//         case "setEditUserGroupDataBool": {
//             console.log("User Group edit data Bool in state", action.payload);
//             return {
//                 ...state,
//                 editUserGroupDataBool: action.payload
//             }
//         }
//         case "setEditId": {
//             console.log("Edit Id in state", action.payload)
//             return {
//                 ...state,
//                 editId: action.payload
//             }
//         }
//         case "setImageUrl": {
//             console.log('image', action.payload);
//             return {
//                 ...state,
//                 imageUrl: action.payload
//             }
//         }
//         case "tabsPermission": {
//             console.log("a", action.payload);
//             return {
//                 ...state,
//                 tabsPersmission: action.payload
//             }
//         }
//         case "ORGlogin": {
//             console.log("org", action.payload)
//             return {
//                 ...state,
//                 orgLogin: action.payload
//             }
//         }
//         case "setValTel": {
//             console.log("org", action.payload)
//             return {
//                 ...state,
//                 valTel: action.payload
//             }
//         }
//         case "setUsersObj": {
//             console.log("org", action.payload)
//             return {
//                 ...state,
//                 usersObj: action.payload
//             }
//         }
//     }
//     return state;
// };

// function AppContextProvider(props) {
//     const fullInitialState = {
//         ...initialState,
//     }

//     let [
//         state,
//         dispatch
//     ] = useReducer(reducer, fullInitialState);
//     let value = { state, dispatch };


//     return (
//         <AppContext.Provider
//             value={value}
//         >
//             {props.children}
//         </AppContext.Provider>
//     );
// }

// let AppContextConsumer = AppContext.Consumer;

// export {
//     AppContext,
//     AppContextProvider,
//     AppContextConsumer
// };