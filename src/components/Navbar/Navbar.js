import React from "react";
import "./styles.css";
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';

function Navbar () {
    return (
        <div>
            <nav className="navbar" style={{justifyContent: 'space-between'}} >
                <ul className="page" style={{display: 'flex', justifyContent: 'center'}} >
                <CustomLink to="/home"  > <Button className="home" variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue' }}>Home</Button></CustomLink>
                <CustomLink to="/Projects"><Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue' }}>Projects</Button></CustomLink>
                <CustomLink to="/Contact"><Button variant="text" style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingRight: '10px' }}>Contact</Button></CustomLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname
    // const myStyle = {
    //     display: 'inline'
    // }

    return (
        <div>
       <li style={{display: 'inline'}} className={path === to  ? "active" : ""}>
       <Link to={to} {...props}>
        {children}
       </Link>
       </li>
       </div>
    )
} 