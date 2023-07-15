import Plot from "react-plotly.js";
import {useState} from 'react';

function Voltality(){
    const [xdata] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    const [ydata] = useState([34,45,56,67,78,89,90,91,92,93,94,95]);
    const [ydata2] = useState([0,5,6,7,78,89,90,1,92,3,94,95]);
   
    return(
        <div className="performance">
            <Plot

            //scatter plot
            data ={ [
                {
                    x:xdata, y:ydata, type:"scatter", mode:"lines"
                }
                ,
                {
                    x:xdata, y:ydata2, type:"scatter",mode:"lines"
                }
            ]}
            layout={ {autosize:true, title: 'Voltality',showlegend:true,legend:{orientation:'h'},font:{size:15}} }

            
            
               />
        </div>

    );
}
export default Voltality;