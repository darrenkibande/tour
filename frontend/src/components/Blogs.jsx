import React from 'react'
import './Blogs.css'
// import AdminDestination from './AdminDestination'
// import AdminTour from './AdminTour'
import AdminMenu from './AdminMenu'

function Blogs() {
  return (
    <div className="blog-container">   
    <div className="blog-sect">     
        <p className="banner-title">Blog</p>
    </div>
    {/* <AdminTour/> */}
    {/* <AdminDestination/> */}
    <AdminMenu/>
    </div>
  )
}

export default Blogs