// const initialData = {
//     //heres where everything will be
//     password:"",
//     user:""
// }

// //figure out initial data
// //figure out form information(may include text boxes and questions instead)
// //form validation for front end

// export default initialData


// const initialData = {
//     // Basic Information
//     basicInfo: {
//         age: "",
//         gender: "",
//         location: "",
//         personalSignature: ""
//     },
//     // Platform Expectations
//     platformExpectations: {
//         expectations: [] // Array to hold multiple expectations
//         //could be a string because theres only a few expectations
//     },
// // Personality_type(Introvert, ambivert, extrovert)
// // Gender preference - male friends, female friends, mixed(mixed will be hard to implement)
// // Frequency of socialising (should include major holidays as special events )
// //  Only holidays ,few times a month, few times a week, always available
//     // Interests and Hobbies
//     interests: {
//         sports: [],
//         arts: [],
//         music: [],
//         travel: [],
//         food: [],
//         technology: [],
//         literature: [],
//         customInterests: [], // For custom interests not listed
//         iceBreakerQuestion: ""
//     },
//     // Social Preferences and Habits
//     socialPreferences: {
//         preferredGroupSize: "", // Small, Medium, Large
//         // typesOfEvents: [], // Array to hold multiple event types
//         frequencyOfSocialising: "", // Only holidays ,few times a month, few times a week, always available
//         comfortLevel: "", // Introverted, Ambivert, Extroverted
//         eventPreference: "" // Male, Female, Mix
//     },
//     // Personality and Values
//     // personality: {
//     //     traits: [], // Array to hold selected traits
//     //     values: [] // Array to hold selected values
//     // },
//     // User Credentials
//     // credentials: {
//     //     password: "",
//     //     user: ""
//     // }
// }

const initialData = {

    basicInfo: {
        Age: "",
        Gender: "",
        Location: ""
    },

    defaultPrefernces: {
        preferredGroupSize: "", // Small, Medium, Large
        frequencyOfSocialising: "", // Only holidays ,few times a month, few times a week, always available
        personalityType: "", // Introverted, Ambivert, Extroverted
        eventGenderPreference: "" // Male, Female, Mix
    },

    theLittleThings: {
        expectation: "",
        hobbies: [],
        aSecret: "",
        iceBreaker: ""
    }

};

export default initialData;

/*
	PART1
Age,
gender, 
Personal signature || username
Location

PART 2
Preferred_group_size
personalityType(Introvert, ambivert, extrovert)
Gender preference - male friends, female friends, mixed(mixed will be hard to implement)
Frequency of socialising (should include major holidays as special events )
 Only holidays ,few times a month, few times a week, always available

	PART 3
Expectation- ,what are you hoping to get out of the app(should be the same more)
Hobbies - may have to make it a discovery thing. We encourage users to find new and share their existing hobbies with each other allow them to add it to their profile as a collection they choose their top three hobbies and as they meet people they can collect hobbies 
A secret that only the devs know but can be revealed upon user request
Icebreaker Questions: Pre-set questions to help initiate conversations.(users can generate one question which is then added to an array of questions

*/