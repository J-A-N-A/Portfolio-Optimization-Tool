
function Op(){
    return(
        <div className=' container  text-black op'> 
            <form>
            <div class="form-group">
            <p className='form-text'>*Enter the parameters</p>
            <div className='inputs'>
            <label for="exampleFormControlSelect1">Objective</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Minimize Voltality</option>
                    <option>Maximize Quadratic Utility</option>
                    <option>Maximize Shrape Ratio</option>
                    <option>Minimize CVaR</option>
                </select>
                </div>

                <div className='inputs'>
               <label for="exampleFormControlInput1">Min.Position Weight</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="%" />
               </div>

               <div className='inputs'>
               <label for="exampleFormControlInput1">Max.Position Weight</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="%" />
               </div>

               <div className='inputs'>
               <label for="exampleFormControlInput1">Benchmark</label>
               <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
               </div>

               <div className='inputs'>
                <label for="exampleFormControlSelect1">Rebalance Portfolio</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Yearly</option>
                    <option>Quarterly</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Never</option>
                </select>
                </div>
                </div>
            </form>
            <button type="submit" class="btn btn-primary buttonop">Optimise Portfolio</button>
         

        </div>
    )
}
export default Op;

