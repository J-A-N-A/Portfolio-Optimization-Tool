import Plot from "react-plotly.js";
import {useState} from 'react';

function Ratio(props){
    const [xdata, setxdata] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    const [ydata, setydata2] = useState([34,90,10,20,10,30,30,10,22,33,46,10]);
    const [ydata2, setydata] = useState([0,5,6,7,78,89,90,1,92,3,94,95]);
 
   
    return(
        <div className="performance">
            <Plot

            data ={ [
                {
                    x:xdata, y:ydata, type:"scatter",mode:"lines"
                }
                ,
                {
                    x:xdata, y:ydata2, type:"scatter",mode:"lines"
                }
            ]}
            layout={ {autosize:true, title: 'Sharpe ratio',showlegend:true,legend:{orientation:'h'},font:{size:15}} }

            
            
               />
        </div>

    );
}
export default Ratio;