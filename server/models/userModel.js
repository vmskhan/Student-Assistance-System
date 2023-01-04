const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        
        name:{
            type: String,
            required: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        id:{
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        pic:{
            type: String,
            required: true,
            default:
                "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhmhxiJi_anonymous-profile-grey-person-sticker-glitch-empty-profile%2F&tbnid=GHbdym26eAzRCM&vet=12ahUKEwjd8N3N1qf5AhWyx6ACHdkCCOQQMygCegUIARDJAQ..i&docid=DW6FqC3PlmkyYM&w=860&h=706&q=empty%20profile%20pic%20icon&ved=2ahUKEwjd8N3N1qf5AhWyx6ACHdkCCOQQMygCegUIARDJAQ",
        },
    },
    {
        timestamps:true,
    }
);

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
});

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

const User=mongoose.model("User",userSchema);

module.exports=User;