import React, { useState } from 'react';
import Strop from '../Strop/Strop.component'
import background from '../../images/back.jpg'
import '../../../node_modules/bootstrap/js/dist/modal'
import './SetDataStrop.css'
import lodashShuffle from 'lodash/shuffle'
import Ready from '../Ready/Ready.component'
const SetDataStrop = () => {

    let str;
    let temp;
    const [state, setState] = useState(0);
    const [t, setT] = useState(3000);
    const [isi, setIsi] = useState(1000);
    const [fixed, setFixed] = useState(1000);
    const [mode, setMode] = useState("D");
    const [data, setData] = useState([]);
    const defaultData = [{ type: "cong", color: "#B10D0D", text: "قرمز", nameColor: "قرمز" },
    { type: "cong", color: "#4CA810", text: "سبز", nameColor: "سبز" },
    { type: "cong", color: "#F0E210", text: "زرد", nameColor: "زرد" },
    { type: "cong", color: "#1042F0", text: "آبی", nameColor: "آبی" },
    { type: "incong", color: "#1042F0", text: "سبز", nameColor: "آبی" },
    { type: "incong", color: "red", text: "زرد", nameColor: "قرمز" },
    { type: "incong", color: "green", text: "قرمز", nameColor: "سبز" }];
    const colorData = [{ colorCode: "#B10D0D", colorName: "قرمز" }, { colorCode: "#4CA810", colorName: "سبز" },
    { colorCode: "#1042F0", colorName: "آبی" }, { colorCode: "#F0E210", colorName: "زرد" }];

    const [ascii, setAscii] = useState([{ keyName: "سبز", codeEs: 83, codeEc: 115 }, { keyName: "زرد", codeEs: 68, codeEc: 100 },
    { keyName: "آبی", codeEs: 75, codeEc: 107 }
        , { keyName: "قرمز", codeEs: 76, codeEc: 108 }]);
//    const testColors = [
//         "زرد-green",
//         "قرمز-yellow",
//         "قرمز-red",
//         "قرمز-blue",
//         "آبی-red",
//         "آبی-blue",
//         "زرد-red",
//         "آبی-yellow",
//         "سبز-blue",
//         "آبی-yellow",
//         "سبز-yellow",
//         "سبز-green",
//         "سبز-green",
//         "زرد-blue",
//         "سبز-green",
//         "قرمز-yellow",
//         "قرمز-green",
//         "قرمز-red",
//         "قرمز-red",
//         "قرمز-red",
//         "آبی-yellow",
//         "قرمز-red",
//         "قرمز-yellow",
//         "آبی-red",
//         "سبز-green",
//         "آبی-blue",
//         "زرد-yellow",
//         "سبز-red",
//         "زرد-yellow",
//         "زرد-red",
//         "آبی-red",
//         "قرمز-green",
//         "سبز-green",
//         "آبی-red",
//         "آبی-yellow",
//         "زرد-red",
//         "سبز-yellow",
//         "زرد-yellow",
//         "قرمز-yellow",
//         "زرد-green",
//         "آبی-blue",
//         "آبی-blue",
//         "سبز-blue",
//         "زرد-yellow",
//         "آبی-blue",
//         "سبز-yellow",
//         "سبز-green",
//         "زرد-yellow",
//         "سبز-green",
//         "سبز-green",
//         "زرد-yellow",
//         "زرد-yellow",
//         "سبز-green",
//         "زرد-yellow",
//         "آبی-green",
//         "زرد-green",
//         "زرد-yellow",
//         "زرد-red",
//         "زرد-green",
//         "زرد-blue",
//         "زرد-yellow",
//         "آبی-red",
//         "سبز-green",
//         "سبز-blue",
//         "زرد-red",
//         "آبی-red",
//         "آبی-blue",
//         "آبی-blue",
//         "سبز-red",
//         "قرمز-red",
//         "سبز-green",
//         "زرد-yellow",
//         "سبز-green",
//         "قرمز-red",
//         "آبی-green",
//         "قرمز-red",
//         "قرمز-blue",
//         "آبی-green",
//         "سبز-green",
//         "آبی-blue",
//         "زرد-yellow",
//         "زرد-blue",
//         "قرمز-blue",
//         "قرمز-red",
//         "قرمز-green",
//         "آبی-yellow",
//         "آبی-blue",
//         "آبی-green",
//         "آبی-blue",
//         "آبی-blue",
//         "قرمز-red",
//         "قرمز-red",
//         "زرد-blue",
//         "آبی-blue",
//         "سبز-red",
//         "زرد-yellow",
//         "قرمز-red",
//         "قرمز-red",
//         "آبی-blue",
//         "آبی-yellow"
//     ]
    const testColors= ["آبی-blue", "آبی-blue", "قرمز-red", "سبز-red", "زرد-green", "زرد-green", "قرمز-red", "زرد-yellow", "آبی-red", "سبز-green", "زرد-blue", "سبز-red", "سبز-green", "زرد-yellow", "قرمز-green"]
    
    const createTestData = () => {
        let arrayData = [];
        for (let i = 0; i < testColors.length; i++) {
            let temp = testColors[i];
            let splitData = temp.split("-");
            let object = { type: "", color: splitData[1], text: splitData[0], nameColor: "" }
            switch (splitData[1]) {
                case "red":
                    object.nameColor = "قرمز";
                    break;
                case "green":
                    object.nameColor = "سبز";
                    break;
                case "blue":
                    object.nameColor = "آبی";
                    break;
                case "yellow":
                    object.nameColor = "زرد";
                    break;
                default:
                    break;

            }
            if (object.nameColor == object.text)
                object.type = "cong";
            else
                object.type = "incong";
        arrayData.push(object);

        }
        setData(arrayData);
    }

    const handelStart = () => {
        let tempData = [];
        if (data.length === 0) {

            createTestData();
            // for (let i = 0; i < defaultData.length; i++) {

            //     let temp = defaultData[i];
            //     tempData.push(temp);
            // }
            // setData(tempData);
        }
        setState(1);

    }

    const createData = (n) => {

        let tempData = [];
        let ColorText;
        let tempObject;
        let nDiv;
        let div4;
        nDiv = n / 4;
        div4 = n - nDiv;
        for (let colorIndex = 1; colorIndex < 5; colorIndex++) {
            switch (colorIndex) {
                case 1:
                    ColorText = "قرمز";
                    break;
                case 2:
                    ColorText = "سبز";
                    break;
                case 3:
                    ColorText = "آبی";
                    break;
                case 4:
                    ColorText = "زرد";
                    break;
                default:
                    break;
            }
            tempObject = {
                type: "", color: colorData[colorIndex - 1].colorCode, text: ColorText,
                nameColor: colorData[colorIndex - 1].colorName
            }
            for (let i = 0; i < div4 / 4; i++) {
                const rndInt = Math.floor(Math.random() * 4) + 1;
                if (rndInt === colorIndex)
                    tempObject.type = "cong";
                else {
                    tempObject.type = "incong";
                    tempObject.color = colorData[rndInt - 1].colorCode;
                    tempObject.nameColor = colorData[rndInt - 1].colorName;
                }

                tempData.push(tempObject);
            }
        }
        if (nDiv !== 0) {
            for (let i = 1; i <= nDiv; i++) {
                tempObject = {
                    type: "", color: colorData[i - 1].colorCode, text: colorData[i - 1].colorName,
                    nameColor: colorData[i - 1].colorName
                }
                const rndInt = Math.floor(Math.random() * 4) + 1;
                if (rndInt === i)
                    tempObject.type = "cong";
                else {
                    tempObject.type = "incong";
                    tempObject.color = colorData[rndInt - 1].colorCode;
                    tempObject.nameColor = colorData[rndInt - 1].colorName;
                }

                tempData.push(tempObject);
            }
        }

        console.log(tempData);
        const shuffleData = lodashShuffle(tempData);
        console.log(shuffleData);
        setData(shuffleData);


    }
    const handelForm = (event) => {
        event.preventDefault();
        console.log("hi");
        const inputData = event.target.elements;
        console.log(inputData);
        for (const data of inputData) {
            if (data.value !== "")
                switch (data.name) {
                    case 'nObject':
                        createData(data.value);
                        console.log(data.value);
                        break;
                    case 'isi':
                        setIsi(parseInt(data.value))

                        break;
                    case 't':
                        setT(parseInt(data.value));
                        break;
                    case 'fixed':
                        setFixed(parseInt(data.value));
                        break;
                    case 'red':
                        str = data.value;
                        temp = ascii;
                        temp[3].codeEc = str.charCodeAt(0)
                        temp[3].codeEs = temp[3].codeEc - 32;
                        console.log(temp[3].codeEs);
                        console.log(temp[3].codeEc);
                        setAscii(temp);

                        break;
                    case 'green':
                        str = data.value;
                        temp = ascii;
                        temp[0].codeEc = str.charCodeAt(0)
                        temp[0].codeEs = ascii[0].codeEc - 32;
                        console.log(temp[0].codeEs);
                        console.log(temp[0].codeEc);
                        setAscii(temp);
                        break;
                    case 'yellow':
                        str = data.value;
                        temp = ascii;
                        temp[1].codeEc = str.charCodeAt(0)
                        temp[1].codeEs = ascii[1].codeEc - 32;
                        console.log(temp[1].codeEs);
                        console.log(temp[1].codeEc);
                        setAscii(temp);
                        break;
                    case 'blue':
                        str = data.value;
                        temp = ascii;
                        temp[2].codeEc = str.charCodeAt(0)
                        temp[2].codeEs = temp[2].codeEc - 32;
                        console.log(temp[2].codeEs);
                        console.log(temp[2].codeEc);
                        setAscii(temp);
                        break;
                    case 'selectMode':
                        let tempMode = data.options[data.selectedIndex].value;
                        if (tempMode === "falseShow")
                            setMode("T");
                        else
                            setMode("D");
                        console.log(tempMode);
                        break;
                    default:
                        break;
                }

        }
        console.log(ascii);

    }
    const setReady=(s)=>
    {
        if(s=="true")
        setState(2);
    }
    if (state === 0)
        return (
            <>
                <div className="container-fluid">

                    <div className="row" style={{
                        backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover', height: 720
                    }}>
                        <div className="col d-flex align-items-center justify-content-end">
                            <button type="button" className="btn btn-outline-secondary w-50 h-25"
                                style={{ background: "#e6eadc" }} onClick={handelStart} ><h4
                                    style={{ color: "#282828" }}
                                >شروع آزمون</h4></button>

                        </div>
                        <div className="col d-flex align-items-center justify-content-start ">
                            <button type="button" className="btn btn-outline-secondary w-50 h-25"
                                style={{ background: "#e6eadc" }} data-bs-toggle="modal" data-bs-target="#exampleModal" ><h4
                                    style={{ color: "#282828" }}
                                > تنظیمات اولیه</h4></button>

                        </div>

                        <div className="modal fade"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content modalBack">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">تنظیمات Strop</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body modalBack">
                                        <p>برای کلید مربوط به هر رنگ یکی از حروف a-z را انتخاب کنید 
                                          
                                        </p>
                                        <form onSubmit={handelForm}>
                                            <div className="form-row" >
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputNObject">تعداد محرک ها</label>
                                                    <input type="number" className="form-control" id="nObject" name="nObject" />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputIsi">تایم isi</label>
                                                    <input type="number" className="form-control" id="isiT" name="isi"
                                                     placeholder="1000" min="30" max="10000"/>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="inputT">تایم t</label>
                                                    <input type="number" className="form-control" id="tT" name="t"
                                                     placeholder="3000" min="30" max="10000"/>
                                                </div>
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="inputFixed">تایم fixed</label>
                                                <input type="number" className="form-control" id="fixedT" name="fixed"
                                                 placeholder="1000" min="30" max="10000"/>
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید قرمز</label>
                                                <input type="text" className="form-control" id="red" maxlength="1" name="red" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید زرد</label>
                                                <input type="text" className="form-control" id="yellow" maxlength="1" name="yellow" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید سبز</label>
                                                <input type="text" className="form-control" id="green" maxlength="1" name="green" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="acii">کلید آبی</label>
                                                <input type="text" className="form-control" id="blue" maxlength="1" name="blue" />
                                            </div>
                                            <label className="mt-3" htmlFor="mode" >نمایش یا عدم نمایش نتیجه انتخاب</label>
                                            <select className="form-select" aria-label="Default select"
                                                name="selectMode">

                                                <option value="trueShow" selected>نمایش</option>
                                                <option value="falseShow">عدم نمایش</option>
                                            </select>


                                            <button type="button" className="btn btn-secondary  mt-5 mb-3 ms-1" data-bs-dismiss="modal">انصراف</button>
                                            <button type="submit" className="btn btn-success  mt-5 mb-3" >ذخیره تغیرات</button>

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
        else if (state === 1)
        return (
            <>

               <Ready setReady={setReady}/>
            </>
        )
    else if (state === 2)
        return (
            <>

                <Strop fixed={fixed} isi={isi} t={t} data={data} ascii={ascii} mode={mode} />
            </>
        )

}
export default SetDataStrop;