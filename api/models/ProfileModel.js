import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    profileTitle: {
        type: String,
        required: true,
        maxLength: 225
    },
    level: {
        type: String,
        required: true,
        default: "new seller",
        enum: ['new seller', 'skilled', 'expert', 'valuable']
    },
    badges: {
        type: [String],
        enum: ['honest', 'accurate', 'trusted']
    },
    communities: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Community'
    }],
    workExperience: [{
        title: String,
        company: String,
        location: String,
        country: String,
        startDate: {
            startMonth: String,
            startYear: Number
        },
        endDate: {
            endMonth: String,
            endYear: Number
        },
        description: {
            type: String,
            maxLength: 1000
        }
    }],
    education: [{
        school: String,
        degree: String,
        field: String,
        dateAttended: Date,
        graduationYear: Date,
        from: Number,
        to: Number,
        description: {
            type: String,
            maxLength: 600
        }
    }],
    languages: [{
        language: String,
        proficiency: {
            type: String,
            enum: ['Basic', 'Conversational', 'Fluent', 'Native']
        },
    }],
    skills: {
        type: [String],
    },
    photo: {
        name: String,
        img: {
            data: Buffer,
            contentType: String
        }
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
    phone: {
        type: String,
    },
},
{
    timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema);

export default Profile;