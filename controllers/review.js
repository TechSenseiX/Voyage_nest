const Listing = require("../models/listing.js");
const review = require("../models/review.js");

module.exports.newReview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview = new review(req.body.review);
    newReview.author = req.user._id;
    listing.review.push(newReview);
    //console.log(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","New Review Created!");
    res.redirect(`/listings/${listing._id}`);
}


module.exports.deleteReview=async(req,res)=>{
    let {id, reviewId} =req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {review: reviewId}});
    await review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);

}