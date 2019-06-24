import { createClient } from "contentful";

export default createClient ({
    space: "k4a248fsxjrm",
    // space: process.env.REACT_APP_API_SPACE,
    accessToken: "xhtQZsoH60377UAaAWMtnesPqHteoj5JJaX6xxK9VEY",
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
});