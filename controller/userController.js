import { userModal } from "../model/useerModal.js"

const signup = async (req, res)=>{
    const {name, email, password, confirm_password} = req.body
    if(password != confirm_password){
       return res.status(400).send({msg:"Confirm Password Not Matched"})
    }
    try {
        userModal.create(...req.body)
        res.status(200).send({msg:"User Registered Successfully"})
    } catch (error) {
        res.status(500).send({msg:"Something went wrong. User not registered"})
    }
}

const login = (req, res)=>{
    
}

const logout = (req, res)=>{
    
}

const profile = (req, res)=>{
    
}

export {
    signup,
    login,
    logout,
    profile
}