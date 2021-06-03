import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SetData from './Component/SetData/SetData.component'
import StartButton from './Component/StartButton/StartButton.comonent'
import Menu from './Component/Menu/Menu.component'
const AppRouter = () => {
    return (
        <Router>

            <Switch>
            <Route exact path="/" component={Menu}/>
            <Route path="/start" component={SetData} />
            <Route path="/button" component={StartButton}/>
            {/* <Route path="/button" component={StartButton}/> */}
            
            
            </Switch>
        </Router>
    )
}
export default AppRouter;