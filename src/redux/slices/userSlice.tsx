import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UsersState, User } from '../../types'
import {
  fetchUsers,
  getUserById,
  deleteUser,
  signUp,
  handleGoogleOnSuccess,
  logIn,
  userByEmail
} from '../services/user.service'

const initialUserState: UsersState = {
  users: [],
  user: null,
  filteredUsers: [],
  isLoading: false,
  error: null,
  token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    test: () => {
      console.log('You are Succ!')
    },
    userFilter: (state, action) => {
      const filteredUsers = state.users.filter((user) =>
        user.first_name?.toLowerCase().includes(action.payload.toLowerCase())
      )
      console.log('**Here is the FilteredUsers', filteredUsers)
      return {
        ...state,
        filteredUsers: action.payload.length > 0 ? filteredUsers : [...state.users]
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.isLoading = false
      state.users = action.payload
      state.filteredUsers = []
    })
    builder.addCase(getUserById.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getUserById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(getUserById.fulfilled, (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.user = action.payload
    })
    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(deleteUser.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.isLoading = false
      state.users = action.payload
    })
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(signUp.fulfilled, (state, action: any) => {
      state.isLoading = false
      state.token = action.payload
    })
    builder.addCase(handleGoogleOnSuccess.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(handleGoogleOnSuccess.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(handleGoogleOnSuccess.fulfilled, (state, action: any) => {
      state.isLoading = false
      state.token = action.payload
    })
    builder.addCase(logIn.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(logIn.fulfilled, (state, action: any) => {
      state.isLoading = false
      state.token = action.payload
    })
    builder.addCase(userByEmail.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userByEmail.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(userByEmail.fulfilled, (state, action: any) => {
      state.isLoading = false
      state.user = action.payload
    })
  }
})

export const { test, userFilter } = userSlice.actions
export default userSlice.reducer
