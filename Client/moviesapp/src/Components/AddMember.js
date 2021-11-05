import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';

function AddMember()
{
  const fullname = sessionStorage.getItem('name');
  const token = sessionStorage.getItem('token');
  const history = useHistory();
  const [member, setMember] = useState([]);

    useEffect(async () =>
    {
      if(!token || !fullname)
      {
        history.push("/login")
      }
    }, [])
  
  const customSubmit = async(e) =>
  {
    e.preventDefault();
    let obj = {
      Name: member.Name,
      Email: member.Email,
      City: member.City  
    }
    await axios.post('/api/members', obj); 
    history.push('/members');
  }

  const cancelMember = () =>
  {  
    history.push('/members');
  }
 
    return (
      <div className="App" > 
        <h1 className='large text-primary'>Add Member</h1>
        <h2>Hello, {fullname}!</h2>
        <div className="App" style={{ width : "500px", marginLeft : "33%", padding: "1rem", marginBottom: "1rem", marginTop:"0,5rem"}}>
            
          <form className='form' onSubmit={e => customSubmit(e)} >
            <div className='form-group'>
              Name: &nbsp; &nbsp; <input type="text" onChange={e => setMember({ ...member, Name : e.target.value })} /></div>
            <div className='form-group'>
              Email: &nbsp; <input type="text" onChange={e => setMember({ ...member, Email : e.target.value })} /></div>
            <div className='form-group' >
              City: <input type="text" onChange={e => setMember({...member, City : e.target.value})}/>
            </div>
            <div className='form-group'>
          </div>
            <input type="submit" className='btn btn-primary' value="Save Data" /> &nbsp;
            <input type = "button" className='btn btn-primary btn-dark' value="Cancel" onClick={cancelMember} />
          </form>    
        </div> 
      </div>
    );
  }
  export default AddMember;