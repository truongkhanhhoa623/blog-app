import { Switch, Route } from 'react-router-dom'
import { MainLayout, BlankLayout, PublicLayout } from '../layout'
import{ DetailPage, HomePage, LoginPage, RegisterPage, StorePage, WriteArticlePage, EditArticlePage } from '../containers'
import { PrivateRouter } from './PrivateRouter' 
import { PublicRouter } from './PublicRouter' 
import { HomeRouter } from './HomeRouter';
export  function Routers() {
    return(
        <Switch>
               <HomeRouter exact layout={PublicLayout} component={HomePage} path="/"/>
               <PrivateRouter exact layout={MainLayout} component={HomePage} path="/me" />
               <PrivateRouter exact layout={MainLayout} component={WriteArticlePage} path="/me/new-article" />
               <PrivateRouter exact layout={MainLayout} component={EditArticlePage} path="/me/article/:slug" />
               <PrivateRouter exact layout={MainLayout} component={StorePage} path="/me/store" />
               <PrivateRouter exact layout={BlankLayout} component={DetailPage} path="/detail/:slug" />
               <PublicRouter exact layout={BlankLayout} component={RegisterPage} path="/register" />
               <PublicRouter exact layout={BlankLayout} component={LoginPage} path="/login" />
        </Switch>
    )
} 