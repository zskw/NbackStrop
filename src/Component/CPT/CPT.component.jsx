import React, { useEffect, useState } from "react";
import Scores from '../Scores/Scores.component'
import eStar from '../../images/empty-star.png'
import hStar from '../../images/half-tiny-star.png'
import fStar from '../../images/star.png'
import '../../../node_modules/bootstrap/js/dist/modal'
const CPT = () => {

    let pressKey, answerTime, intervalT, blockStartTimer, sum = 0, normalISI;
    let arrOfImg = [eStar, hStar, fStar, fStar, hStar], response = [];
    let target = fStar;
    // let t = 3000;
    // let isi = 1000;
    const [t, setT] = useState(3000);
    const [isi, setIsi] = useState(1000);
    let cnt = 0;
    let pressInfoObject = []
    let status = true;

    let scoreObj = {
        totalNumber: 0,
        allCorrects: 0,
        userCorrects: 0,
        commission: 0,
        ommission: 0,
        responseAvg: 0
    };
    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (status)
                if (event.keyCode === 32) {
                    pressKey = Date.now();
                    status = false;
                    pressInfoObject.pressTime = pressKey;
                    checkAnswer();
                }
        });
        return (
            window.removeEventListener('keydown', (event) => {
                if (event.keyCode === 32) {
                    console.log(event);
                }
            })
        )
    }, []);

    const [Img, setImg] = useState(null);
    const [showInfo, setShowInfo] = useState(0);
    const [score, setScore] = useState({});
    const [feedBack, setFeedBack] = useState(null);

    const setScoreObjectInfo = () => {
        scoreObj.totalNumber = arrOfImg.length;
        for (let i = 0; i < scoreObj.totalNumber; i++) {
            if (arrOfImg[i] === target) {
                scoreObj.allCorrects++;
            }
        }
        scoreObj.ommission = scoreObj.allCorrects;
        setScore(scoreObj);
    }
    const start = () => {
        setScoreObjectInfo();
        showTime();
        setShowInfo(1);
        console.log("start");
        intervalT = setInterval(() => {
            status = true;
            showTime()
        }, t + isi);
    }
    const handelForm = (event) => {
        event.preventDefault();
        console.log("hi");
        const inputData = event.target.elements;
        console.log(inputData);
        for (const data of inputData) {
            if(data.value!=="")
            switch (data.name) {
                case 'nObject':
                    console.log(data.value);
                    break;
                case 'isi':
                    setIsi(parseInt(data.value))
                   
                    break;
                case 't':
                   setT(parseInt(data.value));
                    break;
                default:
                    break;
            }

        }
       

    }
    const showTime = () => {
        status = true;
        setFeedBack(null)
        setImg(arrOfImg[cnt])
        blockStartTimer = Date.now();
        if (cnt === arrOfImg.length) {
            clearInterval(intervalT);
            console.log("fin");
            setShowInfo(2);
            setScore(scoreObj)
            return;
        }
        normalISI = setTimeout(() => { setImg(null) }, t);
        cnt++;
    }

    const checkAnswer = () => {
        let indexNum;
        pressInfoObject.press = 1;
        console.log(cnt - 1);
        if (pressKey) {
            answerTime = pressKey - blockStartTimer;
            indexNum = cnt - 1;
            pressInfoObject[indexNum] = answerTime;
            //indexNum = Math.floor(answerTime / (isi + t));
            //responseTime = (((t + isi) * indexNum) - answerTime);
            if (arrOfImg[indexNum] === target) {
                pressInfoObject.mustBePressed = 1;
                console.log("true");
                scoreObj.userCorrects++;
                scoreObj.ommission--;
                response.push(answerTime);
                sum += answerTime;
                scoreObj.responseAvg = averaging();
                setFeedBack("احسنت")
            }
            else {
                console.log("false");
                scoreObj.commission++;
                setFeedBack("متاسفم برات")
            }
            if (answerTime <= t) {
                clearTimeout(normalISI);
                clearInterval(intervalT);
                setImg(null)
                setTimeout(() => {
                    showTime()
                    intervalT = setInterval(() => {
                        status = true;
                        showTime()
                    }, t + isi);
                }, isi)
            }
        }
        setScore(scoreObj);
    }
    const averaging = () => {
        let avg = sum / response.length;
        setScore(scoreObj);
        return avg;
    }


    if (showInfo === 0)
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <button className="btn btn-dark start-btn col col-md-2 col-sm-5 btn-center" onClick={start}>Start</button>
                </div>
                <div className="row justify-content-center mt-5">
                    <button className="btn btn-dark start-btn col col-md-2 col-sm-5 btn-center"
                        data-bs-toggle="modal" data-bs-target="#exampleModal">Setting</button>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content modalBack">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">تنظیمات CPT</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body modalBack">
                                <form onSubmit={handelForm}>
                                    <div className="form-row" >
                                        <div className="form-group mt-3">
                                            <label htmlFor="inputNObject">تعداد محرک ها</label>
                                            <input type="text" className="form-control" id="nObject" name="nObject" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="inputIsi">تایم isi</label>
                                            <input type="text" className="form-control" id="isiT" name="isi" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor="inputT">تایم t</label>
                                            <input type="text" className="form-control" id="tT" name="t" />
                                        </div>
                                      
                                    </div>



                                    <button type="button" className="btn btn-secondary  mt-5 mb-3 ms-1" data-bs-dismiss="modal">انصراف</button>
                                    <button type="submit" className="btn btn-success  mt-5 mb-3" >ذخیره تغیرات</button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    if (showInfo === 1)
        return (
            <div className="container">
                <div className="row justify-content-center numbers mt-5">
                    <img src={Img} style={{ width: "20%" }} alt="" />
                </div>
                <div className="row justify-content-center numbers">
                    {feedBack}
                </div>
            </div>
        )
    if (showInfo === 2)
        return (
            <div className="container">
                <div className="row justify-content-center numbers mt-5">
                    <Scores score={score} />
                </div>
            </div>
        )
}
export default CPT;