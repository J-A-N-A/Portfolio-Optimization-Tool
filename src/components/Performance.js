import Plot from "react-plotly.js";
import {useState} from 'react';

function Performance(props){
    const [xdata, setxdata] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    const [ydata, setydata] = useState([34,45,56,67,78,89,90,91,92,93,94,95]);
    const [ydata2, setydata2] = useState([34,90,10,20,10,30,30,10,22,33,46,10]);
   
    return(
        <div className="performance">
            <Plot

            //scatter plot
            data ={ [
                {
                    x:xdata, y:ydata, type:"scatter", mode:"lines"
                },
                {
                    x:xdata, y:ydata2, type:"scatter", mode:"lines"
                }
            ]}
            layout={ {autosize:true, title: 'Performance',showlegend:true,legend:{orientation:'h'},font:{size:15}} }

            
            
               />
        </div>

    );
}
export default Performance;