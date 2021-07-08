import scoreGif from '../../images/pngwing.com.png'
import './Score.css'
import {Link} from 'react-router-dom'
import Menu from '../Menu/Menu.component'
const Score = (props) => {

    let trueNumber = 0, falseNumber = 0;
    let totalNumber = props.arrayNumber.length;
    let omission;
    let commission = props.falseAnswer;
    let averageResponse=0;
    let computeTime=[];
    let responseTime=0;
    const computeTrueFalse = () => {
        console.log(props.timeShowArray);
        console.log(props.spaceArray);
        console.log(props.andis);
        for(let i=0;i<props.spaceArray.length;i++)
        {
            /*console.log(props.spaceArray[i]);
            console.log(props.timeShowArray[i]);*/
            let b=props.spaceArray[i]-props.timeShowArray[props.andis[i]];
            computeTime.push(b)
            responseTime+=b;
        }
        for (let i = props.arrayNumber.length - 1; i > 0; i--) {
            if (props.arrayNumber[i] == props.arrayNumber[i - props.nth])
                trueNumber++;
        }
        falseNumber = props.arrayNumber.length - trueNumber;
        omission = trueNumber - props.trueAnswer;
        
        if(props.trueAnswer!==0)
        {
            responseTime=responseTime.toFixed(2);
            averageResponse=responseTime/props.trueAnswer;
            averageResponse=averageResponse.toFixed(2);
        }
     
        console.log(computeTime);
      
    }

    computeTrueFalse();

    return (
        <>
        <Menu/>
            <div className="container">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={scoreGif} alt="gif" className=" col-12 img-fluid w-25 h-75 d-inline-block mt-5" />
                        <div className=" w-75  tabel_left  mt-5 ml-md-5" >
                            <table className="table  table-bordered text-center">

                                <tbody>
                                    <tr>
                                        <td>
                                            جواب های صحیح
                                        </td>
                                        <td>
                                            {props.trueAnswer}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            جواب های غلط
                                        </td>
                                        <td>
                                            {props.falseAnswer}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            جواب های صحیح موجود
                                        </td>
                                        <td>
                                            {trueNumber}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            جواب های غلط موجود
                                        </td>
                                        <td>
                                            {falseNumber}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            تعداد کل عدد ها
                                        </td>
                                        <td>
                                            {totalNumber}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            زمان استراحت
                                        </td>
                                        <td>
                                            {props.isiTime}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            زمان نمایش عدد
                                        </td>
                                        <td>
                                            {props.tTime}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            N
                                        </td>
                                        <td>
                                            {props.nth}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            حالت
                                        </td>
                                        <td>
                                            {props.modeShow}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Commission
                                        </td>
                                        <td>
                                            {commission}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Omission
                                        </td>
                                        <td>
                                            {omission}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            مجموع زمان پاسخ صحیح
                                        </td>
                                        <td>
                                            {responseTime}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            میانگین زمان پاسخ صحیح
                                        </td>
                                        <td>
                                            {averageResponse}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
           
            </div>

        </>
    )
}
export default Score;