import exprees from "express"
import { Product } from "../models/productModel.js";


// // // // // // // // // // // // // // // // // // // // // // // // // // // 

const router = exprees.Router();

// Route for Save a new Product
router.post("/", async (req,res) => {
    try{
        if(           
            !req.body.productname ||
            !req.body.color ||
            !req.body.price ||
            !req.body.urlprod
        ) {
            return res.status(400).send({
                message:"send all req dields:title,author,publishyear"
            });
        }
        const newProduct = {
            productname:req.body.productname,
            color:req.body.color,
            price:req.body.price,
            urlprod:req.body.urlprod
        };
        const product = await Product.create(newProduct);
        return res.status(201).send(product)

    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

//Route for get all Products from DB
router.get("/", async (req,res) => {
    try{
        const products = await Product.find({});
        return res.status(200).json({
            count:products.length,
            data:products
        });
    }catch(error){
            console.log("ddd")
            console.log(error.message);
        
    }
});

//Route for get one Product from DB by id
router.get("/:id", async (req,res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.status(200).json(product);
    }catch(error){
            console.log("ddd")
            console.log(error.message);
        
    }
});

//route for update a Product
router.put("/:id", async (req,res) => {
    try{
        if(
            !req.body.productname ||
            !req.body.color ||
            !req.body.price ||
            !req.body.urlprod
        ) {
            return res.status(400).send({
                message:"send all req dields:title,author,publishyear"
            });
        }
        const { id } = req.params;
        const result = await Product.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).json({message:"book not found"});
        }else{
            return res.status(200).send({message:"book updated successfully"});
        }
    }catch(error){
            console.log(error.message);
            res.status(500).send({message:error.message});
    }
});

//route for delete a Product
router.delete("/:id", async (req,res) => {
    try{
        const { id } = req.params;
        const result = await Product.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({message:"book not found"});
        }else{
            return res.status(200).send({message:"book deleted successfully"});
        }
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

export default router;
