import { Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import EachBox from "./EachBox";

const Home = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await fetch(`https://jobsboard24.herokuapp.com/getData`);
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
    } else if (search.length < 3) {
      return val;
    } else if (val.JobTitle.toLowerCase().includes(search.toLowerCase())) {
      return val;
    } else {
      return null;
    }
  });

  return (
    <Container>
      <h2 className="homeTitle">Featured Jobs</h2>
      <div className="search_filter_div">
        <TextField
          id="outlined-basic"
          label="Enter Job Title"
          sx={{ m: 1, width: "70ch" }}
          name="JobTitle"
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className="jobdata_Container">
        {filterData.map((el) => (
          <EachBox key={el._id} {...el} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
