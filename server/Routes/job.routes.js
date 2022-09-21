const {Router} = require("express")
const JobSchema = require("../Models/job.models")
const jobRouter = Router()

jobRouter.post("/create",async(req,res)=>{
    //console.log(req.body)
    const {JobTitle,Company} = req.body
    const data = await JobSchema.findOne({JobTitle,Company})
    if(data){
        return res.send({message:"Already Posted about this job role by your company "})
    }
    const job = new JobSchema({...req.body})
    await job.save()
    return res.send({message:"Data Saved"})
})

jobRouter.get("/getData",async(req,res)=>{
    try {
        const data = await JobSchema.find()
        return res.status(201).json(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})

jobRouter.get("/getData/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const data = await JobSchema.find({_id:id})
        return res.status(201).json(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})

jobRouter.get("/filter",async(req,res)=>{
    const {Industry}=req.body
    try {
        if(Industry==="all"){
            const data = await JobSchema.find()
            return res.status(201).json(data)
        }
        const data = await JobSchema.find({Industry})
        return res.status(201).json(data)
    } catch (error) {
        return res.status(404).send(error)
    }
})

jobRouter.get("/search",async(req,res)=>{
    const query = req.query.q
    //console.log(query)
    if(query){
        const items = await JobSchema.find({
            JobTitle: { $regex: new RegExp(`${query}*`), $options: "gi" },
        });
        return res.status(201).json(items);
    }
    return res.status(404).send({message:"No Job Found"});
 })


module.exports = jobRouter