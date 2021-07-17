import mongoose from "mongoose"
const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@flipkart-clone.k7h1t.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log("database connected successfully")
    } catch (error) {
        console.log("error=" + error.message)
    }
}
export default Connection;
