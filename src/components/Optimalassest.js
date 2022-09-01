import Plot from 'react-plotly.js';
import {useState} from 'react';

function Optimal(props){
    const [xdata, setxdata] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
    const [ydata, setydata] = useState([34,45,56,67,78,89,90,91,92,93,94,95]);
   
      return(
        <div className='opt'>
        
        <Plot

        data ={ [
        {
          labels:xdata, values:ydata, hole:.4, type:"pie"
        }
        ]}

        layout={ {autosize:true, title: 'Optimal Asset Allocation',showlegend:true,legend:{orientation:'h'},font:{size:15}}}


        />
        <div className='container nearopt'>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Category/Sector</th>
                        <th>Weights</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>


        </div>

    
      </div>
      );
}
export default Optimal;