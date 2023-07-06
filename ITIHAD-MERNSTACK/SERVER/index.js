const app = require("./app");
const connectDB = require("./Database/db"); 
const PORT = process.env.PORT || 8000;  

app.listen(PORT, () => {
    console.log(`Server Is Running On Port : http://localhost:${PORT}`)
    connectDB()
})