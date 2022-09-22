import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from '@mui/material';

const JobDetails = () => {
    const {id} = useParams()
    const [description,setDescription] = useState([])
    
    useEffect(() => {
       const getData = async(id)=>{
        try {
           let response =  await fetch(`https://jobsboard24.herokuapp.com/getData/${id}`)
           let data = await response.json()
           setDescription(data[0])
        } catch (error) {
            console.error(error) 
        }
       }
        getData(id);
    },[id]);

  return (
        <Container>
            <div className='JobDetailBox'>
                <h3>{description.Company}</h3>
                <p>{description.JobTitle}</p>
                <div><span style={{paddingRight:"20px"}}><BusinessCenterOutlinedIcon/></span>{description.Experience}</div>
                <div className='JobDetailBoxFlex'>
                <div><span style={{paddingRight:"20px"}}><LocationOnOutlinedIcon/></span>{description.Location}</div> 
                <div>
                    <Link to="/apply">
                    <Button variant="contained" color="success">Apply</Button>
                    </Link>
                </div>
                </div>
            </div>
            <div className='JobDetailBox'>
                <h3>Job Description</h3>
                <ul><b>Requirements</b>
                {description.Requirement?.map((el)=>(
                    <li key={el}>{el}</li>
                ))}
                </ul>
                <br />
                <ul><b>Skills</b>
                {description.Skills?.map((el)=>(
                    <li key={el}>{el}</li>
                ))}
                </ul>

            </div>
        </Container>
  )
}

export default JobDetails