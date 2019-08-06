import React, {Fragment} from 'react';
import { Header } from '../components/Header/Header';
import { logout } from '../services/auth';


export function Layout({children}){
    return(
        <Fragment>
            {localStorage.getItem('token') ? <Header logout = {logout}/> : ''}
            {children}
        </Fragment>
    )

}