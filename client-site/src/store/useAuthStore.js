import { create } from "zustand"
import toast from "react-hot-toast"
import { axiosInstance } from "../lib/axios"

export const useAuthStore = create((set) => ({

    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLogingIn: false,

    checkAuth: async () => {

        try {

            const res = await axiosInstance.get('/auth/check')
            set({ authUser: res.data })

        } catch (error) {

            console.log('Error in authCheck', error)
            set({ authUser: null })
        }
        finally {
            set({ isCheckingAuth: false })
        }

    },

    login: async (formData) => {

        set({ isLogingIn: true })
        try {

            const res = await axiosInstance.post('/auth/login', formData)
            set({ authUser: res.data })

            toast.success("Login Successful")

        } catch (error) {

            toast.error(error.response.data.message)
            console.log("Error in login function", error)
            set({ authUser: null })

        }
        finally {
            set({ isLogingIn: false })
        }

    },
    signup: async (formData) => {

        set({ isSigningUp: true })
        try {

            const res = await axiosInstance.post('/auth/signup', formData)
            set({ authUser: res.data })

            toast.success("Account Created Successfully")

        } catch (error) {

            toast.error(error.response.data.message)
            console.log("Error in Signup function", error)
            set({ authUser: null })

        }
        finally {
            set({ isSigningUp: false })
        }

    },

    logout: async () => {
        try {

            await axiosInstance.post('/auth/logout')
            set({ authUser: null })

            toast.success("Logout Successful")

        } catch (error) {

            toast.error(error.response.data.message)
            console.log("Error in logout function", error)

        }
    }
    ,

    






}))