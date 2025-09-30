const User = require("../models/user");
const {v4: uuidv4} = require("uuid");
const { setUser } = require("../service/auth");


async function handleUserSignup(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    await User.create({
        username, 
        email, 
        password 
    });
   return res.redirect("/"); 
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
        email, 
        password 
    });

    if (!user) {
        return res.status(401).render("login", {
            error: "Invalid email or password"
        });
    }
     
    // statefull authentication
    // const sessionId = uuidv4(); 
    // setUser(sessionId, user);
    // res.cookie("uid", sessionId );

    // stateless authentication
    const token = setUser(user);
    res.cookie("token", token );  

    // sending token to server
    // return res.json({token});
    
    return res.redirect("/"); 
}


module.exports = { handleUserSignup , handleUserLogin };