import societiesModel from "@/models/societiesModel";
import connectDb from "@/dataBaseConnection/connect";



const handler=async(req,res)=>{

   if(req.method=='GET') {
    try{
        await connectDb();
        console.log('Connected to database successfully');
        const societies = await societiesModel.find();
        res.status(200).json(societies)
       } catch (error){
         res.status(500).json({ error: 'Error fetching societies'})
    }
   } else if (req.method=='POST') {
    try{
        await connectDb();
        const newSociety =await societiesModel(req.body)
        await newSociety.save();
        res.status(201).json(newSociety)
    } catch (error){
        res.status(500).json({error:"Error creating new society"})
    }
   }
   else if (req.method=='DELETE') {
    try{
        await connectDb();
        const {_id} = req.query;
        
        await societiesModel.findByIdAndDelete(_id);
        res.status(200).json({message:`society with id ${_id} deleted successfully`})
}
catch (error){
    res.status(500).json({error:"Error deleting society"})
   }
}
else if(req.method=='PATCH'){
    try{
        await connectDb();
        const {_id} = req.query;
        const newData = req.body;
        const updatedSociety = await societiesModel.findByIdAndUpdate(_id, newData, { new: true });
        res.status(200).json(updatedSociety)
    }
    catch(error){
        res.status(500).json({error:"Error updating society"})
}

}
else {
    res.status(405).json({ error: 'Method not allowed' });
  }

}
export default handler