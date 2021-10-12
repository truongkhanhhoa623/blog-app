import { Switch, Route } from 'react-router-dom'
import {MainLayout, BlankLayout} from '../layout'
import {DetailPage, HomePage, LoginPage} from '../containers'
import {PrivateRouter} from './PrivateRouter' 
import { DetailArticle } from '../components'


export  function Routers() {
    return(
        <Switch>
               <PrivateRouter exact layout={MainLayout} component={HomePage} path="/" />
               <PrivateRouter exact layout={MainLayout} component={DetailPage} path="/detail" />
               <PrivateRouter exact layout={BlankLayout} component={LoginPage} path="/login" />
        </Switch>
    )
} 