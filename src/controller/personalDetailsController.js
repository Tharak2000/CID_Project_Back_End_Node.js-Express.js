const personalDetailsService = require('../services/personalDetailsService');

exports.getAllPersonalDetails =async (req,res) => {
        try {
            const allPersonalDetails = await personalDetailsService.getAllPersonalDetails();
            res.json(allPersonalDetails);
        } catch (error) {
            res.json({error : error.message});           
        }
}


exports.getPersonalDetailsById =async (req,res) => {
    try {
        const personalDetails = await personalDetailsService.getPersonalDetailsById(req.params.personal_details_id);
        if(!personalDetails){
            res.status(400).json("Person Not Found")
        }
        res.json(personalDetails);

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.createPersonalDetails = async(req,res) => {
     const {
            first_name, last_name
        }=req.body;

        if(!first_name ){
            return res.status(400).json("Please provide first name");
        }
    try {
        const newPersonalDetails = await personalDetailsService.createPersonalDetails({
            first_name, last_name
        });
        res.status(201).json(newPersonalDetails);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.updatePersonalDetails = async(req,res) => {
    const {
        first_name, last_name
    }=req.body;
    try {
        const updatedPersonalDetails = await personalDetailsService.updatePersonalDetails(req.params.personal_details_id,{
            first_name, last_name
        });
        res.json(updatedPersonalDetails);       
    } catch (error) {
        res.status(500).json({error:error.message});    
    }
}

exports.deletePersonalDetails = async(req,res) => {
    try {
        const deletedPersonalDetails = await personalDetailsService.deletePersonalDetails(req.params.personal_details_id);
        res.status(204).json(deletedPersonalDetails);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.getRelatedOfficialsByPersonalDetailsId = async (req, res) => {
    try {
        const relatedOfficials = await personalDetailsService.getRelatedOfficialsByPersonalDetailsId(req.params.personal_details_id);
        res.json(relatedOfficials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPersonalAndRelatedByPersonalId = async (req , res)=> {
    try {
        const allDetails = await personalDetailsService.getPersonalAndRelatedByPersonalId(req.params.personal_details_id);
        res.json(allDetails);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}