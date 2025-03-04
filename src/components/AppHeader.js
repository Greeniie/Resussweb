import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleCollapseSider, toggleSiderHidden } from '../redux/appSlice'
import { logout } from '../redux/authSlice'

const AppHeader = () => {
  const dispatch = useDispatch()
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const { siderHidden, siderCollapsed } = useSelector((state) => state.app)

  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  const adminInfo = localStorage.getItem('user')
  const adminName = JSON.parse(adminInfo)

  useEffect(
    () => {
      // if (deviceWidth <= 640 && siderHidden === false) {
      //   dispatch(toggleSiderHidden())
      // }
      if (deviceWidth < 1024 && deviceWidth > 640 && siderHidden) {
        dispatch(toggleSiderHidden(false))
        dispatch(toggleCollapseSider(true))
      }
      if (deviceWidth < 1024 && !siderCollapsed) {
        dispatch(toggleCollapseSider(true))
      }
      if (deviceWidth >= 1024 && siderCollapsed === true) {
        dispatch(toggleCollapseSider(false))
      }
    },
    // eslint-disable-next-line
    [deviceWidth],
  )

  const navigate = useNavigate()

  return (
    <header
      className='site-layout-background'
      style={{
        display: 'flex',
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'DM Sans',
      }}
    >
      <h2 className="text-[12px] md:text-[20px]">Hello, {adminName?.value?.first_name}</h2>
      <div>
    
      <Button style={{color: '#fff', backgroundColor:'#6633FF'}} onClick={() => dispatch(logout())}>
        Logout
      </Button>
      </div>
     
    </header>
  )
}

export default AppHeader
