import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
   return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvantd7-EWq406VtSNgPGtm25B3ac9ZWPCG5t-iWb6S4SOpyL' />
        <div className={s.loginBlock}>
            <NavLink to={'/login'}> LOGIN </NavLink>
        </div>
    </header>;
};
export default Header;