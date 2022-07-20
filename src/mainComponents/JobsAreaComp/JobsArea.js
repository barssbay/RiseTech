import React, { useState } from "react";
import ModalCompRemove from "../../components/Modal/ModalCompRemove";
import ModalCompChange from "../../components/Modal/ModalCompChange";
function JobsArea(props) {
    const { dataJob, setDataJob } = props;
    const [filteredStatus,setFilteredStatus] = useState();


    const searchDataFunc = (e) => {
        const val = e.target.value;
        if(val == null || val == ""){
            
            const nData = [...dataJob];
            nData.forEach((element) => element.isVisible = true);
            setDataJob(nData)
        }else{
            const newData = [...dataJob];
            newData.forEach(f => {
                if(f.job.includes(val)){
                    f.isVisible = true;
                }else{
                    f.isVisible = false;
                }

                return f;
            });
        
            setDataJob(newData);
        }
    }
  
  
    return (
        <div className="jobsarea">
            <p>Job List</p>
            <div className="job-filter-area">
                <div className="job-filter_area">
                    <input type='text' className="job-filter-input" placeholder="Find a Job" onChange={searchDataFunc}></input>
                    <select onChange={(a) =>  setFilteredStatus(a.target.value)} className="select-filter-status">
                        <option value={'all'}>Priotery (all)</option>
                        <option value={'Urgent'}>Urgent</option>
                        <option value={'Regular'}>Regular</option>
                        <option value={'Trivial'}>Trivial</option>

                    </select>
                </div>
                <div className="jobs-title-area">
                    <div>Name</div>
                    <div>Priotery</div>
                    <div>Action</div>
                </div>

            </div>
            {
                dataJob.filter(f => f.isVisible || filteredStatus === f.statusValue).map((item, key) =>
                    <div>
                        <div className="job-flex" key={key}>
                            <p className="job-show-result">{item.job}</p>
                            <p className="status-value-box" style={{backgroundColor: item.statusValue == "Urgent" ? 'red' : 'red' && item.statusValue == "Regular" ? 'orange' :'orange' && item.statusValue == "Trivial" ? "blue" : "blue"}} >{item.statusValue}</p>
                            <div className="change-and-remove">
                                <ModalCompChange  dataJob={dataJob} setDataJob={setDataJob} statusValue={item.statusValue} item={item} />
                                
                                <ModalCompRemove dataJob={dataJob} item={item} setDataJob={setDataJob} />
                                </div>  
                        </div>

                    </div>
                )
            } 
            
        </div>
    )
}
export default JobsArea;