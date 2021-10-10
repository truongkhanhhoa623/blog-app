import { Switch, Route } from 'react-router-dom'
import {MainLayout} from '../layout'
import {HomePage, LoginPage} from '../containers'
import {PrivateRouter} from './PrivateRouter' 


export  function Routers() {
    return(
        <Switch>
               <PrivateRouter exact layout={MainLayout} component={HomePage} path="/" />
               <PrivateRouter exact layout={MainLayout} component={LoginPage} path="/login" />
        </Switch>
    )
}