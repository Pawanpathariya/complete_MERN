const homepage=(req,res)=>{
    res.render('home')
}
const courses=(req,res)=>{
   res.render('courses')
}
const aboutstu = (req,res)=>{
    res.render("about")
}
const ourfees=(req,res)=>{   
    res.render("ourfees")
}

module.exports={
    homepage,
    courses,
    aboutstu,
     ourfees
}