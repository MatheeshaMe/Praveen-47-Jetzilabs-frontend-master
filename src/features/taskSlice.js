import { createSlice } from "@reduxjs/toolkit";

export const initTask = {
    contractAddress: '',
    selectFunction: '',
    maxMint: '',
    nftPrice: '',
    mintType: '',
    nftTransferAddress: '',
    active: false,
};

const initialState = {
    loading: false,
    task : initTask,
    taskList : [],
    error: false,
    err_msg: null
};

// export const signup = createAsyncThunk("auth/signup", async (user) => {
//     const res = await axios.post(`${BaseUrl}/auth/users`, {user});
//     // const res = await Axios.post(`/auth/users`, (user));
//     return res.data;
// });

// export const login = createAsyncThunk("auth/login", async (loginData) => {
//     const res = await userLogin(loginData);
//     // const decoded = jwtDecode(token);
//     return res.data;
// });


export const authSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        createTask: (state, action) => {
            state.task = action.payload;
            state.taskList.push(action.payload); 
          },
    },
    // extraReducers: (builder) => {
    //     // builder.addCase(signup.pending, state => {
    //     //     state.authenticating = true;
    //     // });
    //     // builder.addCase(signup.fulfilled, (state, action) => {
    //     //     state.authenticating = false;
    //     //     state.userList = action.payload;

    //     // });
    //     // builder.addCase(signup.rejected, state => {
    //     //     state.authenticating = false;
    //     //     state.error = true;
    //     // });
        

    //     // builder.addCase(login.pending, state => {
    //     //     state.authenticating = true;
    //     // });
    //     // builder.addCase(login.fulfilled, (state, { payload }) => {
    //     //     state.authenticating = false;
    //     //     if(payload.token){
    //     //         state.token = payload.token;
    //     //         state.authenticate = true;
    //     //         localStorage.setItem(TOKEN, payload.token);
    //     //     }
    //     // });
    //     // builder.addCase(login.rejected, (state, {payload}) => {
    //     //     state.authenticating = false;
    //     //     state.error = true;
    //     //     // state.err_message = action.payload.errors.msg;
    //     // });
    // }
});

export const { createTask } = authSlice.actions;
export default authSlice.reducer;