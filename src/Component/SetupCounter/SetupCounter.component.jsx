import React, { useState, useEffect} from 'react';
import Counter from '../Counter/Counter.component'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Score from '../Score/Score.component'

const SetupCounter = (props) => {


  const [counter, setCounter] = useState();
  const [timeShow, setTimeShow] = useState([]);
  const [spaces, setTimeSpaces] = useState([]);
  const [reaction, setReaction] = useState();
  const [done, setDone] = useState(false);
  const [result, setResult] = useState({ falseAnswer: 0, trueAnswer: 0 });
  const [responseTime, setResponseTime] = useState(0);
  // const [prevSpaces,setPrevSpaces]=useState({prevLength:0,sw:true});
  let time = props.t + props.isi;
  let i = 0;
  let prevLength,sw=true;
  let tempClear;

  useEffect(() => {
    window.addEventListener("keypress", handleKeypress)
    return () => {

      window.removeEventListener("keypress", handleKeypress);
    };
  }, []);

  useEffect(() => {

    show();
  }, []);

const interval=()=>{
  if (props.numbers.length > i) {
    setReaction(" ");
    setCounter(props.numbers[i]);
    let time = Date.now();
    let temp = timeShow;
   
    temp.push(time);
   
    setTimeShow(temp);
   prevLength=temp.length;
   sw=true;
  //  setPrevSpaces({prevLength:5,sw:true})
    // setPrevSpaces((prev)=>{
    //   let tempObject=temp.length;
    //   tempSpace=temp.length;
    //   const newResult = {...prev, prevLength: tempObject };
    //   console.log(newResult);
    //   return newResult;
    // })
    // prevSpaces.prevLength=timeShow.length;
    // prevSpaces.sw=true;
    i++;
    setTimeout(() => setCounter(""), props.t);
  }
  else {
console.log("zzzz");
// clearInterval(interval);
intervalClear();
    setDone(true);
  }
}
  const show = () => {
    tempClear=setInterval(interval, time);

  }
const intervalClear=()=>{
  clearInterval(tempClear);
}


  const handleSpaces = () => {
    console.log("hi");
    if (spaces.length !== 0) {
      ///console.log(prevSpaces);
     if(prevLength==timeShow.length&&sw==true)
    {
     
       sw=false;

        
      let timeShowLength = timeShow.length - 1;
      
      console.log(props.numbers[timeShowLength]);
      console.log(props.numbers[timeShowLength - props.nthNumber]);
      
      if (props.numbers[timeShowLength] === props.numbers[timeShowLength - props.nthNumber]) {
        setCounter("");
        if(props.mode==="D")
        setReaction("آفرین درست انتخاب کردی");

        setResult((prevResult) => {
          let tempResult = prevResult.trueAnswer;
          tempResult = tempResult + 1;
          //console.log(tempResult);
          const newResult = {...prevResult, trueAnswer: tempResult };
          //console.log(newResult);
          return newResult;
        });

        
        let averageResponseTime = responseTime;
        averageResponseTime += (spaces[spaces.length - 1] - timeShow[timeShow.length - 1]);
        setResponseTime(averageResponseTime);
    }
    else {
      setCounter("");
      if(props.mode==="D")
      setReaction("متاسفم اشتباه انتخاب کردی");
      setResult((prevResult) => {
        let tempResult = prevResult.falseAnswer;
        tempResult = tempResult + 1;
        //console.log(tempResult);
        const newResult = { ...prevResult,falseAnswer:tempResult};
        return newResult;
      });
      

    }
  
    
     }
     else
     {
       setCounter("");
       setReaction("!!!!قبلا انتخاب کردین");
     }

    }
  }

  const handleKeypress = (event) => {

    if (event.keyCode === 32) {
      console.log("space");
      let time = Date.now();
      let temp = spaces;
      console.log(prevLength)
      if(prevLength==timeShow.length&&sw==true)
      {
        temp.push(time);
        setTimeSpaces(temp);

      }
     
      console.log("length space");
      console.log(spaces);
      handleSpaces();
    }
  }





  //let spacesLength = spaces.length;

  // useEffect(() => {
  //    console.log("hi");
  //    if (spaces.length !== 0) {
  //      let timeShowLength = timeShow.length - 1;
  //      console.log(props.numbers[timeShowLength]);
  //      console.log(props.numbers[timeShowLength - props.nthNumber]);
  //      if (props.numbers[timeShowLength] == props.numbers[timeShowLength - props.nthNumber]) {
  //        setReaction("آفرین درست انتخاب کردی");
 
  //        console.log("yes");
  //      }
  //      else {
  //        setReaction("متاسفم اشتباه انتخاب کردی");
 
 
  //      }
 
  //    }
 
  //  }, [spaces.length,props.number,timeShow]);





  return (
    <>


      {done === false ? <Counter number={counter} showReaction={reaction} /> : <Score trueAnswer={result.trueAnswer}
        falseAnswer={result.falseAnswer} arrayNumber={props.numbers} nth={props.nthNumber}
        response={responseTime} isiTime={props.isi} tTime={props.t} />}



    </>

  )

}

export default SetupCounter;