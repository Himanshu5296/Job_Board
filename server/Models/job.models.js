const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  Industry:{
    type:String,
    required:true
  },
  Company:{
    type:String,
    required:true
  },
  JobTitle:{
    type:String,
    required:true
  },
  Experience:{
    type:String,
    required:true
  },
  Location:{
    type:[String],
    required:true
  },
  Requirement:{
    type:[String],
    required:true
  },
  Skills:{
    type:[String],
    required:true
  },
  PostedOn:{
    type:Date,
    default:new Date
  }

})

const JobSchema = model("job",jobSchema)

module.exports = JobSchema