import exprees from "express"
import { PORT , mongoDBurl } from "./config.js"
import mongoose from "mongoose";
import productRoute from "./routes/productsRoutes.js"
import cors from "cors"

// // // // // // // // // // // // // // // // // // // // // // // // // // // 

const app = exprees();

app.use(exprees.json());

//middlewere for handling cors pilicy
//option 1: allow all origin with default of cors
app.use(cors());

//option 2: allow custom origins
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:["GET","POST","PUT","DELETE"],
//     allowedHeaders:["Content-Type"],  
// }));



app.get('/',(req,res) => {
    console.log(req)
    return res.status(234).send("welcone MERN Stack")
});

// npm install mongodb

app.use("/products",productRoute);

mongoose
    .connect(mongoDBurl)
    .then(() => {
        console.log("app connected to DB");
        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

