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
  const [index,setIndex]=useState([]);
  // const [prevSpaces,setPrevSpaces]=useState({prevLength:0,sw:true});
  let time = props.t + props.isi;
  let i = 0;
  let prevLength,sw=true;
  let tempClear;
  let timeFixed;
  let myisi;
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
    timeFixed = Date.now();
    setCounter(props.numbers[i]);
    let time = Date.now();
    let temp = timeShow;
   
    temp.push(time);
   
    setTimeShow(temp);
   prevLength=temp.length;
   sw=true;
    i++;
    myisi=setTimeout(() => setCounter(""), props.t);
  }
  else {
console.log("zzzz");
// clearInterval(interval);
intervalClear();
    setDone(true);
  }
}
  const show = () => {
    interval();
    tempClear=setInterval(interval, time);

  }
const intervalClear=()=>{
  clearInterval(tempClear);
}


  const handleSpaces = (timeSpace) => {
    console.log("hi");
    let temp = Date.now();
   // if (spaces.length !== 0)
    // {
      ///console.log(prevSpaces);
      if(i>props.nthNumber)
      {
     if(prevLength==timeShow.length&&sw==true)
    {
     
       sw=false;

        
      let timeShowLength = timeShow.length - 1;
      
      console.log(props.numbers[timeShowLength]);
      console.log(props.numbers[timeShowLength - props.nthNumber]);
      
      if (props.numbers[timeShowLength] === props.numbers[timeShowLength - props.nthNumber]) {
        setCounter("");
        let temp = spaces;
       let temIndex=index;
       temp.push(timeSpace);
       temIndex.push(i-1);
       setTimeSpaces(temp);
      setIndex(temIndex);
        if(props.mode==="D")
        setReaction("درست");

        setResult((prevResult) => {
          let tempResult = prevResult.trueAnswer;
          tempResult = tempResult + 1;
          //console.log(tempResult);
          const newResult = {...prevResult, trueAnswer: tempResult };
          //console.log(newResult);
          return newResult;
        });

        
       /* let averageResponseTime = responseTime;
        averageResponseTime += (spaces[spaces.length - 1] - timeShow[timeShow.length - 1]);
        setResponseTime(averageResponseTime);*/
    }
    else {
      setCounter("");
      if(props.mode==="D")
      setReaction("غلط");
      setResult((prevResult) => {
        let tempResult = prevResult.falseAnswer;
        tempResult = tempResult + 1;
        //console.log(tempResult);
        const newResult = { ...prevResult,falseAnswer:tempResult};
        return newResult;
      });
      

    }
    if (temp - timeFixed <  props.t) {
      clearTimeout(myisi);
      intervalClear();
      setTimeout(() => {
        show();


      }, props.isi)
    }

    
     }
     else
     {
       setCounter("");
       //setReaction("!!!!قبلا انتخاب کردین");
     }
    }
    //}
  }

  const handleKeypress = (event) => {

    if (event.keyCode === 32) {
     // console.log("space");
      let time = Date.now();
      // let temp = spaces;
      // let temIndex=index;
      console.log(prevLength)
      if(prevLength==timeShow.length&&sw==true)
      {
        // temp.push(time);
        // temIndex.push(i);
        // setTimeSpaces(temp);
        // setIndex(temIndex);
        handleSpaces(time);

      }
     
      console.log("length space");
      console.log(spaces);
      
    }
  }

  return (
    <>


      {done === false ? <Counter number={counter} showReaction={reaction} /> : <Score trueAnswer={result.trueAnswer}
        falseAnswer={result.falseAnswer} arrayNumber={props.numbers} nth={props.nthNumber}
      isiTime={props.isi} tTime={props.t} modeShow={props.mode} 
        spaceArray={spaces} timeShowArray={timeShow} andis={index}/>}



    </>

  )

}

export default SetupCounter;