import background from '../../images/back.jpg'
import React from 'react'
import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/js/dist/modal'
const StartButton = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        let dataInput = {};
        const element = event.target.elements;
        console.log("hiiiiiiiii");

    }
    return (
        <>
            <div className="container-fluid">

                <div className="row" h-100 style={{
                    backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', height: 700
                }}>
                    <div className="col d-flex align-items-center justify-content-end">
                        <button type="button" class="btn btn-outline-secondary w-50 h-25"
                            style={{ background: "#e6eadc" }} ><Link to="/strop" style={{ textDecoration: "none" }}><h4
                                style={{ color: "#282828" }}
                            >شروع آزمون</h4></Link></button>

                    </div>
                    <div className="col d-flex align-items-center justify-content-start ">
                        <button type="button" class="btn btn-outline-secondary w-50 h-25"
                            style={{ background: "#e6eadc" }} data-bs-toggle="modal" data-bs-target="#exampleModal" ><h4
                                style={{ color: "#282828" }}
                            > تنظیمات اولیه</h4></button>

                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">تنظیمات Strop</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form className="settingForm" onSubmit={handleSubmit} >
                                        <div className="form-row">
                                            <div className="form-group mt-3">
                                                <label htmlFor="inputIsi">تایم isi</label>
                                                <input type="text" className="form-control" id="isiT" name="isi" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="inputT">تایم t</label>
                                                <input type="text" className="form-control" id="tT" name="t" />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="inputFixed">تایم fixed</label>
                                            <input type="text" className="form-control" id="fixedT" name="fixed" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="acii">کلید قرمز</label>
                                            <input type="text" className="form-control" id="" maxlength="1" name="red" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="acii">کلید زرد</label>
                                            <input type="text" className="form-control" id="" maxlength="1" name="yellow" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="acii">کلید سبز</label>
                                            <input type="text" className="form-control" id="" maxlength="1" name="green" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="acii">کلید آبی</label>
                                            <input type="text" className="form-control" id="" maxlength="1" name="blue" />
                                        </div>

                                        {/* <button type="submit" className="btn btn-primary mt-5 mb-3">Submit</button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" >Save changes</button> */}

                                   
                                    <button type="button" class="btn btn-secondary  mt-5 mb-3 ms-1" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary  mt-5 mb-3" >Save changes</button>
                               
                                    </form>
                                </div>
                                
                            </div>
                        </div>
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