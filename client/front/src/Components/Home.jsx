import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getData = async () => {
          try {
            let response = await fetch(`http://localhost:5000/getData`);
            let data = await response.json();
            //console.log(data)
            setPost(data);
          } catch (error) {
            console.log(error);
          }
        };
        getData();
      }, [search]);

      let filterData = post.filter((val) => {
        if (search === "") {
          return val;
        } else if (val.JobTitle.toLowerCase().includes(search.toLowerCase())) {
          return val;
        } else {
          return null;
        }
      });

      console.log(filterData)
    

    const handleChange = (e)=>{
      const {name,value}=e.target
      console.log(name,value)
    }
  return (
    <Box>
        <TextField id="outlined-basic" label="Enter Job Title" name="JobTitle" onChange={(e)=>setSearch(e.target.value)} variant="outlined" />
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Industry</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="Industry"
                onChange={(e)=>handleChange(e)}
            >
                <MenuItem value="IT Services">IT Services</MenuItem>
                <MenuItem value="Accounting">Accounting</MenuItem>
                <MenuItem value="Banking">Banking</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default Home