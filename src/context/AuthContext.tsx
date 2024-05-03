import { useState, useEffect, useContext, createContext } from 'react'
import { type AuthProps, type AuthStateProps } from '../@types/components'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'my-jwt'
export const API_URL =
  'http://jh-laravel10-api-f65ecffdcabe.herokuapp.com/api/v1'

const AuthContext = createContext<AuthProps>({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthStateProps>({
    token: null,
    authenticated: null,
  })

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      console.log('stored:', token)

      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        setAuthState({
          token,
          authenticated: true,
        })
      }
    }
    loadToken()
  }, [])

  const register = async (email: string, password: string) => {
    try {
      return await axios.post(`${API_URL}/register`, { email, password })
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg }
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/login`, { email, password })
      console.log('AuthContext-60', result.data)

      if (result.data.data) {
        setAuthState({
          token: result.data.data.token,
          authenticated: true,
        })

        axios.defaults.headers.common.Authorization = `Bearer ${result.data.data.token}`
        await SecureStore.setItemAsync(TOKEN_KEY, result.data.data.token)
      } else {
        return result.data
      }
    } catch (e) {
      return { message: (e as any).response.data.message }
    }
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    axios.defaults.headers.common.Authorization = ''
    setAuthState({
      token: null,
      authenticated: false,
    })
  }

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
