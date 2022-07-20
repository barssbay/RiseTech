import React from 'react';
import { useState } from 'react';

function AddJob(props) {
    const {dataJob,setDataJob} = props;
    const [job,setJob] = useState()
    const [statusValue,setStatusValue] = useState();

    function addButton(){
        if(job == '' || job == null ){
            alert('Please text a job')
        }
        if(statusValue == null){
            alert('Please Select a Status')   
        }else{
            setDataJob([...dataJob, {
                job:job,
                statusValue:statusValue,
                isVisible : true
            }])
            setJob('')
        }
    }
  return (
    <div>
        <h3 className='header-job'>Create New Job</h3>
        <div>
            <h5 className='header-job'>Job Name</h5>
            <div className="add-job-area">

            <input className='job-input' title='Job Name' onChange={(e) => setJob(e.target.value)} value={job} type="text"  placeholder='Please add a job'/>

            <select title='Status'  className='select-status' onChange={(a) => setStatusValue(a.target.value)}>
                <option >Choose</option>
                <option value={'Urgent'}>Urgent</option>
                <option value={'Regular'}>Regular</option>
                <option value={'Trivial'}>Trivial</option>
            </select>
            <button className='Add-Button' onClick={() => addButton()} title='add'>Ekle</button>
            </div>
        </div>
     
    </div>
  );
}

export default AddJob;
