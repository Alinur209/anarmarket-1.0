import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import routes from './routes'

const AppRouter = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location.pathname])
    
  return (  
      <>
        <Routes>
                {
                    routes.map(route => 
                        <Route 
                            key={route.path}
                            path={route.path}
                            element={route.element} 
                            exact
                        />    
                    )
                }
                <Route
                    path="*"
                    element={<Navigate to="/" replace/>}
                />
            </Routes>
      </>
    )
}

export default AppRouter
