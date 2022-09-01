import Plot from 'react-plotly.js';
import Plotly from 'plotly.js-dist-min';
import { Table } from 'react-bootstrap';
import Performance from './Performance';
import Optimal from './Optimalassest';
import Ratio from './Ratio';
import Voltality from './Voltality';
import Drawdowns from './Drawdowns';

function Portfolio(){
    return(
        <div >    

              <div className='container graphs'>

                            <div className="graphonly1">
                            <Optimal />
                            </div>
                           <div className="graphonly2">
                            <Performance/>
                            </div>
                         
                            <div className="graphonly3">
                            <Ratio/>
                            </div>
                        
                            <div className="graphonly4">
                            <Drawdowns/>
                            </div>
                     
                            <div className="graphonly5">
                            <Voltality/>
                            </div>
                          
                        
              </div>

        </div>
    );
}
export default Portfolio;