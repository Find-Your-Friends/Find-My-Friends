// const initialData = {
//     //heres where everything will be
//     password:"",
//     user:""
// }

// //figure out initial data
// //figure out form information(may include text boxes and questions instead)
// //form validation for front end

// export default initialData


const initialData = {
    // Basic Information
    basicInfo: {
        age: "",
        gender: "",
        location: ""
    },
    // Platform Expectations
    platformExpectations: {
        expectations: [] // Array to hold multiple expectations
        //could be a string because theres only a few expectations
    },
    // Interests and Hobbies
    interests: {
        sports: [],
        arts: [],
        music: [],
        travel: [],
        food: [],
        technology: [],
        literature: [],
        customInterests: [] // For custom interests not listed
    },
    // Social Preferences and Habits
    socialPreferences: {
        preferredGroupSize: "", // Small, Medium, Large
        typesOfEvents: [], // Array to hold multiple event types
        frequencyOfSocialising: "", // Rarely, Occasionally, Often, Very often
        comfortLevel: "", // Introverted, Ambivert, Extroverted
        eventPreference: "" // Male, Female, Mix
    },
    // Personality and Values
    personality: {
        traits: [], // Array to hold selected traits
        values: [] // Array to hold selected values
    },
    // User Credentials
    credentials: {
        password: "",
        user: ""
    }
}

export default initialData;