import React from 'react'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Link} from "react-router-dom";

const EachBox = (props) => {
    const {_id,PostedOn,Company,JobTitle,Experience,Location}=props
    
    const yyyy = new Date(PostedOn).getFullYear();
    let mm = new Date(PostedOn).getMonth() + 1; 
    let dd = new Date(PostedOn).getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedDate = dd + '/' + mm + '/' + yyyy;

    let Loc = Location.join(",")
    
  return (
    <>
    <Link to={`/jobs/${_id}`}>
    <div className='eachJobBox'>
       <h3>{Company}</h3>
       <p>{JobTitle}</p>
       <div><span style={{paddingRight:"20px"}}><BusinessCenterOutlinedIcon/></span>{Experience}</div>
       <div><span style={{paddingRight:"20px"}}><LocationOnOutlinedIcon/></span>{Loc}</div>
       <p>
        <b>Posted On: </b>{formattedDate}
       </p>
    </div>
    </Link>
    </>
  )
}

export default EachBox