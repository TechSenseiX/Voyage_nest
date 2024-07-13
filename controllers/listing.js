const Listing = require("../models/listing.js");
//const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");


module.exports.index = async(req, res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}

module.exports.new =(req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.show =async (req, res)=>{
    let {id}= req.params;
    const listing = await Listing.findById(id)
    .populate({path:"review" ,
        populate:{
            path:"author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested does not exist");
        req.redirect("/listings"); 
    }
    //console.log(listing);
    res.render("listings/show.ejs",{listing});
}


module.exports.create=async(req,res,next)=>{
    //let{title, description, image, price, country, location} = req.body; 
    //let listing = req.body.list;
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

        let url= req.file.path;
        let filename = req.file.filename;
        
        let listing = req.body.list;
        const newListing = new Listing(listing);
        
        newListing.owner = req.user._id;
        newListing.image = {url, filename}; 
        console.log(newListing);
        await newListing.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listings");
        console.log(listing);
}

module.exports.edit=async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested does not exist");
        req.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;

    if (originalImageUrl.includes("/upload")) {
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_220,w_220");
    }
    else{
        console.error("Image URL format is incorrect");
    }
    console.log(originalImageUrl);
    res.render("listings/edit.ejs",{ listing, originalImageUrl });
}

module.exports.update=async(req,res)=>{
    
    
    //const listing = await Listing.findById(id);
    let {id} = req.params;
    let listing= await Listing.findByIdAndUpdate(id, { ...req.body.list });

    if(typeof req.file !== "undefined"){let url= req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }
    
    req.flash("success","New Listing Updated!");
    res.redirect(`/listings/${id}`);  
}

module.exports.delete=async(req, res)=>{
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","New Listing Deleted!");
    res.redirect("/listings");

}