import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import './mainPage.css'
import SideBar from './SideBar'
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';

const MainPage = () => {

const location = useLocation()

const [ sideBarToggle, setSideBarToggle ] = useState(false)
const [ sectionHeading, setSectionHeading ] = useState(location.pathname.split('/')[1])


useEffect(() => {
  setSectionHeading(location.pathname.split('/')[1])
},[location.pathname])

  return (
    <React.Fragment>
      <main className='mainPage-container'>
        <aside className={sideBarToggle ? 'mainPage-asideContainer show' : 'mainPage-asideContainer'}>
          <SideBar setSideBarToggle={setSideBarToggle}/>
        </aside>
        <article>
          <div className='mainPage-headerBlock'>
            <MenuIcon onClick={() => setSideBarToggle(!sideBarToggle)}/>
            <div className='mainPage-LogoBlock'>
              <p>Data Plus<span>Manage Simply</span></p>
              <img src='logoV2.png' />
            </div>
          </div>
          <div className='mainPage-sectionHeading'>
            {sectionHeading}
          </div>
          <section className='mainPage-section-container'>
            <Outlet/>
          </section>
        </article>
      </main>
    </React.Fragment>
    )
}

export default MainPage
