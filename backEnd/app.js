const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const path=require("path");
const route=require("./routes/route.js")

var app=express();

const PORT=3000;//port number

//db connection===================================================

mongoose.connect('mongodb+srv://mark1:PlJSUI5qX40KE3xa@cluster0.bviyx.mongodb.net/markone?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  });

mongoose.connection.on("connected",()=>{
    console.log("db connected");
});
mongoose.connection.on("error",(err)=>{
    if(err)
    {
        console.log(`error${err}`);
    }
});

app.use(cors());//for middleware [first]
app.use(bodyparser.json());//before reads json file [2nd]
app.use('/api',route);//middleware [3rd]


app.use(express.static(path.join(__dirname,'public')));//

//testing server
app.get('/',(req,res)=>{
    res.send(`successfull`);
})
app.listen(PORT,() =>console.log(`server port:${PORT}`));