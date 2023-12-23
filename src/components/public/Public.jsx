import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../context/LoginContext';

const Public = () => {
  React.useEffect(() => {
    document.title = "Public"
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
  },[])

  const {setToken} = React.useContext(LoginContext)

  const handleLogOut = () => {
    localStorage.removeItem("token")
    setToken(false)
  }

  return (
    <>
   
    <div>Public</div>
    <button onClick={handleLogOut}>Log out</button>
    <ToastContainer />
    </>
  )
}

export default Public