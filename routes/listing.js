const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer=require("multer");
const{storage} = require("../cloudConfig.js");
const upload = multer({storage});


router
    .route("/")
    //index route
    .get(wrapAsync(listingController.index))
    //Create Route
    .post(
        isLoggedIn,
        upload.single("list[image]"),
        validateListing,
        wrapAsync(listingController.create));

//New Route
router.get("/new",isLoggedIn,wrapAsync(listingController.new));


router.route("/:id")
.get(wrapAsync(listingController.show))
.put(
    isLoggedIn,
    isOwner,
    upload.single("list[image]"),
    validateListing,
    wrapAsync(listingController.update)
)
.delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.delete));

//Edit Route
router.get("/:id/edit",
    isLoggedIn,
    isOwner, 
    wrapAsync(listingController.edit));   

module.exports = router;


//show route
//router.get("/:id",wrapAsync(listingController.show));


//Update route
// router.put("/:id",
//     isLoggedIn,
//     isOwner,
//     validateListing,
//     wrapAsync(listingController.update))



//Delete Route
// router.delete("/:id",
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.delete));


