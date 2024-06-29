import React from 'react'
import './AdminMenu.css'
import {Link} from 'react-router-dom'

function AdminMenu() {
  return (
    <div className="admin-container">
        <div className="admin-menu">
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facilis.</p> */}
        <Link to='/AdminDestination'> <button className='customBtn'>Admin Destinations</button></Link>
        <Link to='/AdminTour'> <button className='customBtn'>Tours</button></Link>
        </div>
       
    </div>
  )
}

export default AdminMenu