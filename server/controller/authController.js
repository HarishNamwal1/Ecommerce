import usermodel from "../models/usermodel.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";

import JWT from "jsonwebtoken";

export const regiterController = async (req, res)=>{
    const { name, email, password, phone, address, answer } = req.body;

    if (!name || !email || !password || !phone || !address || !answer)
        {
            return res.status(422).json({error:"Plz fill all fields"});
        }

        try{
            const useExist = await usermodel.findOne({ email:email })
            if(useExist){
                return res.status(422).json({error:"email already Exist"});
            }

            const hashedPassword = await hashPassword(password);

            const user = new usermodel({ name, email, password :hashedPassword, phone, address, answer});

            const userregister = await user.save();
            if(userregister){
                res.status(201).json({message:"User Registered Successfully"});
            }
        }
        catch(err){
            console.log(err);
        }
};

// POST Login
export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;
        // validation
        if (!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }
        // Check User 
        const user = await usermodel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not Registered",
            });
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(202).send({
                success: false,
                message: "Invalid Password",
            });
        }

        // Token 
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET,{
            expiresIn: "7d",
        });

        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        });



    } catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login!",
            error,
        });
    }
};

// test controller 
export const testController = (req, res) => {
    try{
        res.send("Protected Routes");
    }catch(error){
        console.log(error);
        res.send({error});
    }
};