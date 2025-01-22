const home=(req,res)=>{
    res.render("home");
}

const about=(req,res)=>{
    res.render("about");
}
const courses=(req,res)=>{
    res.render("courses");
}   
const faculty=(req,res)=>{
    res.render("faculty");
}   
const contact=(req,res)=>{
    res.render("contact");
}


module.exports={
    home,
    about,
    courses,
    faculty,
    contact
}