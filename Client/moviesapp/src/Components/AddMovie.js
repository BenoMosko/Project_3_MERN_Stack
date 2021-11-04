import React, { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';


function AddMovie(props) {

  const fullname = sessionStorage.getItem('name');
  const token = sessionStorage.getItem('token');
  const history = useHistory();
  const [movie, setMovie] = useState([]);

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
      Name: movie.Name,
      Genres: movie.Genres,
      Year_Premiered: movie.Year_Premiered,
      Image: movie.Image
    }
    await axios.post('/api/movies', obj);
    
    history.push('/movies');
  }

  const cancelMovie = () =>
  {
    
    history.push('/movies');
  }
 
    return (
      <div className="App" >
            
        <h1 className='large text-primary'>Add Movie</h1>
        <h2>Hello, {fullname}!</h2>
        <div className="App" style={{ width : "500px", marginLeft : "33%", padding: "1rem", marginBottom: "1rem", marginTop:"0,5rem"}}>
            
          <form className='form' onSubmit={e => customSubmit(e)} >
            <div className='form-group'>
              Name: &nbsp; &nbsp; <input type="text" onChange={e => setMovie({ ...movie, Name: e.target.value })} /></div>
            <div className='form-group'>
              Genres: &nbsp; <input type="text" onChange={e => setMovie({ ...movie, Genres: e.target.value })} /></div>
            <div className='form-group' >
              Premiered: <input type="text" onChange={e => setMovie({ ...movie, Year_Premiered: e.target.value })} /></div>
            <div className='form-group'>
            Image: &nbsp; <input type="text" onChange={e => setMovie({ ...movie, Image: e.target.value })} /></div>
            
       
            <input type="submit" className='btn btn-primary' value="Save Data" /> &nbsp;
            <input type = "button" className='btn btn-primary btn-dark' value="Cancel" onClick={cancelMovie} />
          </form> 
         
  
            
           
        </div>
         
      </div>
    );
  }
  
  export default AddMovie;