import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './component/navbar.component';
import Main from './page/main.page';
import ServicesAndProjects from './page/services-and-projects.page';


function App() {
  return <>
    <Navbar />
    <Switch>
        <Route exact={true} path="/">
            <Main />
        </Route>
        <Route path="/services-and-projects">
            <ServicesAndProjects />
        </Route>
    </Switch>
  </>
}

export default App
