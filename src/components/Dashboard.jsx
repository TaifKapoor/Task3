import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}")

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("currentUser");
        navigate("/login")
    }
    if(!localStorage.getItem("loggedIn")){
        navigate("/login")
        return null
    }

  return (
    <div className='max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center mx-4 md:mx-auto'>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="text-lg">Welcome, {user.fullName}</p>

      <button onClick={handleLogout}
      className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">Logout</button>
    </div>
  )
}

export default Dashboard
