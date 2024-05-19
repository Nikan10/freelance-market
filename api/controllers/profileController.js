import SellerProfile from "../models/SellerProfileModel"



export const createSellerProfile = (req, res, next) => {

    const profileData = {
        profileTitle: req.body.title,
        workExperience: req.body.workExperience,
        education: req.body.education,
        languages: req.body.languages,
        skills: req.body.skills,
        photo: req.body.photo,
        country: req.body.country,
        city: req.body.city,
        postalCode: req.body.postalCode,
        phone: req.body.phone
    }

    const newProfile = SellerProfile.create(profileData)
    
    res.status(200).json({
        "status": "success",
        newProfile
    })
}

export const getSellerProfile = (req, res, next) => {

    const profile = SellerProfile.findById(req.user._id)
    
    res.status(200).json({
        "status": "success",
        profile
    })
}

export const createBuyerProfile = (req, res, next) => {

    const profileData = {
        photo: req.body.photo,
        country: req.body.country,
        city: req.body.city,
        postalCode: req.body.postalCode,
        phone: req.body.phone
    }

    const newProfile = BuyerProfile.create(profileData)
    
    res.status(200).json({
        "status": "success",
        newProfile
    })
}