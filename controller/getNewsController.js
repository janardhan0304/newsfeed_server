import newsModel from "../model/newsModel.js";

const News=async (req,res)=>{
    let data= await newsModel.find({})
    res.status(200).send(data)
}

export default News