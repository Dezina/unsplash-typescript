import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
// import "./Menu.css";

const SecondNav = () => {

    const [tab, setTab] = useState(0);

    // const handleChange = (newValue) => {
    //   setTab(newValue);
    // };

return(
    
  <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Box sx={{ bgcolor: 'background.paper' }}>
        <Tabs
            value={tab}
            //onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/editorial">Editorial</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/following">Following</a>
          </li>
        </Tabs>

        </Box>
        <div style={{borderRight: "1px solid lightgray", height: "25px", marginTop: "15px", marginLeft: "20px"}}></div>
        <Box sx={{ maxWidth: 1590, bgcolor: 'background.paper' }}>
        <Tabs
            value={tab}
            //onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
          <li className="nav-item p-1">
          <a className="nav-link" href="/new">Wallpapers</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">3D Renders</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Travel</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Nature</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Street Photograph</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Experimental</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Textures & Patterns</a>
          </li>
          <li className="nav-item p-1 text-capitalize fs-6">
          <a className="nav-link" href="/new">Animals</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Architecture & Interiors</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Fashion & Beauty</a>
          </li> 
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">3D Renders</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Travel</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Nature</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Street Photograph</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Experimental</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Textures & Patterns</a>
          </li>
          <li className="nav-item p-1 text-capitalize fs-6">
          <a className="nav-link" href="/new">Animals</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Architecture & Interiors</a>
          </li>
          <li className="nav-item p-1">
          <a className="nav-link text-capitalize fs-6" href="/new">Fashion & Beauty</a>
          </li> 
        </Tabs>
        </Box>
      </ul>
    
    </div>
  </div>
</nav>
  
  )
}

export default SecondNav;