const {nanoid} = require('nanoid');
const URL = require('../models/url'); // importing our database here

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url ) return res.status(400).json({error: "url is required"});
  
   const shortID = nanoid(8);

   await URL.create({
     shortId: shortID,
     redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
   });
   
   return res.render("home",{
    id: shortID
   } )
//    return res.status(200).json({id: shortID });
}


async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;
 const result = await URL.findOne({shortId: shortID});
 return res.json(
    {
        totalClicks: result.visitHistory.length, 
        Analytics: result.visitHistory
    }); 
}

module.exports = {handleGenerateShortUrl, handleGetAnalytics};

