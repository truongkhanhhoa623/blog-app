import { Switch, Route } from 'react-router-dom'
import {MainLayout, BlankLayout, PublicLayout} from '../layout'
import{DetailPage, HomePage, LoginPage, RegisterPage, StorePage, WriteArticlePage, EditArticlePage} from '../containers'
import {PrivateRouter} from './PrivateRouter' 
import {PublicRouter} from './PublicRouter' 
export  function Routers() {
    return(
        <Switch>
               <PrivateRouter exact layout={MainLayout} component={HomePage} path="/pri" />
               <PrivateRouter exact layout={MainLayout} component={WriteArticlePage} path="/pri/new-article" />
               <PrivateRouter exact layout={MainLayout} component={EditArticlePage} path="/me/article/:slug" />
               <PrivateRouter exact layout={MainLayout} component={StorePage} path="/me/store" />
               <PrivateRouter exact layout={BlankLayout} component={DetailPage} path="/detail/:slug" />
               <PrivateRouter exact layout={BlankLayout} component={RegisterPage} path="/register" />
               <PublicRouter exact layout={BlankLayout} component={LoginPage} path="/login" />
               <PublicRouter layout={PublicLayout} component={HomePage} path="/"/>
        </Switch>
    )
} 