const relatedOfficialsService = require('../services/relatedOfficialsService');

exports.getAllRelatedOfficials =async (req,res) => {
    try {
        const allRelatedOfficials = await relatedOfficialsService.getAllRelatedOfficials();
        res.json(allRelatedOfficials);
    } catch (error) {
        res.json({error : error.message});           
    }
}

exports.getRelatedOfficialById =async (req,res) => {
    try {
        const relatedOfficial = await relatedOfficialsService.getRelatedOfficialById(req.params.related_official_id);
        if(!relatedOfficial){
            res.status(400).json("Related Official Not Found")
        }
        res.json(relatedOfficial);  
    } catch (error) {
        res.status(500).json({error:error.message});
    }   
}

exports.createRelatedOfficial = async(req,res) => {
     const {
            personal_details_id, related_official_name, related_official_nic_number
        }=req.body; 
        if(!personal_details_id || !related_official_name || !related_official_nic_number){
            return res.status(400).json("Please provide all the fields");
        }   
    try {
        const newRelatedOfficial = await relatedOfficialsService.createRelatedOfficial({
            personal_details_id, related_official_name, related_official_nic_number
        });
        res.status(201).json(newRelatedOfficial);   
    } catch (error) {
        res.status(500).json({error:error.message});
    }   
}

exports.updateRelatedOfficial = async(req,res) => {
    const {
        personal_details_id, related_official_name, related_official_nic_number
    }=req.body;         
    try {
        const updatedRelatedOfficial = await relatedOfficialsService.updateRelatedOfficial(req.params.related_official_id,{
            personal_details_id, related_official_name, related_official_nic_number
        });
        res.json(updatedRelatedOfficial);       
    } catch (error) {
        res.status(500).json({error:error.message});
    }   
}

exports.deleteRelatedOfficial = async(req,res) => {
    try {
        const deletedRelatedOfficial = await relatedOfficialsService.deleteRelatedOfficial(req.params.related_official_id);
        res.json(deletedRelatedOfficial);       
    } catch (error) {
        res.status(500).json({error:error.message});
    }       
}