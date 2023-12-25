import mongoose from "mongoose";

// // // // // // // // // // // // // // // // // // // // // // // // // // // 
const productSchema = mongoose.Schema(
    {
        productname: {
            type:String,
            require:true
        },
        color: {
            type:String,
            require:true
        },
        price: {
            type:Number,
            require:true
        },
        urlprod: {
            type:String,
            require:true
        }
    },
    {
        timestamps:true,
    }
);

export const Product = mongoose.model("Product",productSchema);