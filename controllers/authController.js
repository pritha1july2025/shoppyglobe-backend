import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

//Register a new user.
export const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const hashedPassword=await bcrypt.hash(password,10)
        
       await User.create({
            name, email,password:hashedPassword
        });

        res.status(201).json({ message: "User Registered Successfully" });
    } catch{
        res.status(400).json({message:'User already exists'});
    }
};

//Authenticate user and return a JWT token.
export const loginUser =async(req,res)=>{
    const {email,password}=req.body;

    try{
        const user=await User.findOne({email});
        if(!user)

            return res.status(400).json({message:'Invalid credentials'});

            const isMatch =await bcrypt.compare(password,user.password);
        if(!isMatch) 
            return res.status(400).json({message:'Invalid credentials'});
            
            const token=jwt.sign(
                {id:user._id},
               process.env.JWT_SECRET,
                {expiresIn:'1h'}
            );

            res.json({token});
        } catch{
            res.status(500).json({message:'Server Error'})
        }
};
