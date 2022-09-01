import Plot from "react-plotly.js";
import {useState} from 'react';


function Drawdowns(props){
    
    const [xdata, setxdata] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    const [ydata, setydata] = useState([34,90,10,20,10,30,30,10,22,33,46,10]);
    const [ydata2, setydata2] = useState([10,50,60,70,18,19,90,1,92,3,40,5]);
   
    return(
        <div className="performance">

            <Plot
            //scatter plot
            data ={ [
                {
                    x:xdata, y:ydata, type:"line", mode:"lines"
                }
                ,
                {
                    x:xdata, y:ydata2, type:"scatter",mode:"lines"
                }
                   ]}
            layout={
                 {autosize:true, title: 'Drawdowns',showlegend:true,legend:{orientation:'h'},font:{size:15}}
                     
                }

               />
             
        </div>

    );
}


export default Drawdowns;