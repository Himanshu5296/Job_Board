import React from 'react'
import { useNavigate } from 'react-router-dom'


const Apply = () => {
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
      e.preventDefault()
      alert("You form successfully submitted")
      navigate("/")
    }
    
  return (
    <>
    <h4 className="homeTitle">Fill the Details</h4>
    <div className='ApplyContainer'>
        <form onSubmit={handleSubmit}>
            <input type="text" className='ApplyContainerinput' placeholder="Full Name" /> <br/>
            <input type="text" className='ApplyContainerinput' placeholder="Highest Qualification" /> <br/>
            <label>Gender: </label> <br/>
            <label>Male</label><input  className='radio' type="radio" name="gender"  value="Male" /> 
            <label>Female</label><input  className='radio' type="radio" name="gender" value="Female" />
            <label>Other</label><input  className='radio' type="radio" name="gender" value="Other" />
            <br/>
            <input type="text" className='ApplyContainerinput' placeholder="Address" /> <br/>
            <input type="text" className='ApplyContainerinput' placeholder="Phone Number" /> <br/>
            <input type="text" className='ApplyContainerinput' placeholder="Resume Link" /> <br/>
            <input type="text" className='ApplyContainerinput' placeholder="Github Link" /> <br/>
            <input type="text" className='ApplyContainerinput' placeholder="Linkedin Link" /><br/>
            <input type="submit" className="submitbutton" value="Submit"/>                            
        </form>
    </div>
    </>
  )
}

export default Apply