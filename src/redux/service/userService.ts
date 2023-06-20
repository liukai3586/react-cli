import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const userQuery = createAsyncThunk('user/query', async () => {
  return { id: 999 }
})

export const updateUser = createAsyncThunk('user/update', async () => {
  return 1111111
})

const userService = createSlice({
  name: 'user',
  initialState: {
    id: 123
  },
  reducers: {
    updateUser(state, action: PayloadAction<number>) {
      state.id = action.payload
    }
  },
  // 处理异步请求返回结果
  extraReducers: (builder) => {
    // 添加userQuery
    builder.addCase(userQuery.fulfilled, (state, action) => {
      console.log('action', action)
      state.id = action.payload.id
    })

    // 添加updateUser
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.id = action.payload
    })
  }
})
export default userService
