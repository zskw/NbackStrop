import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SetData from './Component/SetData/SetData.component'
import StartButton from './Component/StartButton/StartButton.comonent'
import Menu from './Component/Menu/Menu.component'
import SetDataStrop from './Component/SetDataStrop/SetDataStrop.component'
import CPT from './Component/CPT/CPT.component'
import Gonogo from './Component/Gonogo/Gonogo.component'

const AppRouter = () => {
    return (
        <Router>

            <Switch>
            <Route exact path="/" component={Menu}/>
            <Route path="/nback" component={SetData} />
            <Route path="/strop" component={SetDataStrop}/>
            <Route path="/gonogo" component={Gonogo}/>
            <Route path="/cpt" component={CPT}/>
            
            
            
            </Switch>
        </Router>
    )
}
export default AppRouter;