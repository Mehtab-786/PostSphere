import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import { toast } from "react-toastify"

function LogoutBtn() {
    const dispatch = useDispatch()
    
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
                toast.warning("User Logged out ")
            })
    }
    
    return (
        <button 
            onClick={logoutHandler} 
            className="group relative px-5 py-2.5 bg-red-500 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-105"
        >
            <span className="flex items-center">
                <svg 
                    className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </span>
        </button>
    );
}

export default LogoutBtn