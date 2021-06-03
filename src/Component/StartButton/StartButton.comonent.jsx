import background from '../../images/back.jpg'
import React from 'react'
import {Link} from "react-router-dom";
const StartButton = () => {
   
    return (
        <>
            {/* <AppRouter/> */}
            {/* <Router> */}

                <div className="container-fluid">

                    <div className="row" h-100 style={{
                        backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover', height: 700
                    }}>
                        <div className="col d-flex align-items-center justify-content-center">
                            <button type="button" class="btn btn-outline-secondary w-25 h-25"
                                style={{ background: "#e6eadc" }} ><Link to="/start" style={{textDecoration:"none"}}><h4
                                    style={{ color: "#282828" }}
                                >شروع آزمون</h4></Link></button>

                        </div>

                    </div>
                </div>
                {/* <Switch>
                   
                    <Route path="/start" component={SetData} />

                </Switch> */}

            {/* </Router> */}
        </>
    )
}
export default StartButton;