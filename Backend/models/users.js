const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['user','admin'],
        default:'user'
    },
},
    {
        timestamps:true
    }
)

UserSchema.pre('save',async function(){
    const user=this
    if(!user.isModified('password')){
        return 
    }
    try{
        const salt=await bcrypt.genSalt(10)
        const hashedPass=await bcrypt.hash(this.password,salt)
        this.password=hashedPass
        return 
    }
    catch(err){
        throw err
    }
})

UserSchema.methods.comparePass=async function(pass){
    try{
        const isPassMatch=await bcrypt.compare(pass,this.password)
        return isPassMatch
    }
    catch(err){
        throw err
    }
}

const usersModel=mongoose.model('users',UserSchema)

module.exports=usersModel