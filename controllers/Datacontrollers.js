const User=require("../Models/Usermodel");

const Create = async (req, res) => {
    const { id,name, email } = req.body;
    try {
        const user = await User.create({id,name, email });

        if (user) {
            res.status(200).send(user);
        } else {
            console.log("Error occurred during user creation.");
            res.status(500).send("Error occurred during user creation.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}

const All=async(req,res)=>{
 try {
    let users=await User.findAll();
    if(users)
    {
        res.status(200).send(users);
    }
    else{
        res.status(400);
        console.log("error occured");
    }
 } catch (error) {
    console.log(error);
 }
}
const Search=async (req,res)=>{
    try {
        const {id}=req.body;
    const user=await User.findOne({
        attributes:['id','name','email'],
        where:{id:id}
    });
    if(user)
    {
        res.status(200).json(user);
    }    

    } 
    catch (error) {
        console.log(error);
    }
}

const Update = async (req, res) => {
    try {
        const { id, name, email } = req.body;
        const result = await User.update(
            { name: name, email: email },
            { where: { id: id } }
        );
       if (result[0] > 0) {
            const updatedUser = await User.findOne({
                attributes: ['id', 'name', 'email'],
                where: { id: id }
            });

            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404);
                console.log("No updated user found");
            }
        } else {
            res.status(404);
            console.log("error while updating");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const Delete = async (req, res) => {
    const { id } = req.body;
    try {
        const response = await User.destroy({
            where: { id: id }
        });
        
        if (response > 0) {
            res.status(200).send("Data deleted");
        } else {
            console.log("No data was deleted or data not found.");
            res.status(404).send("Data not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}


module.exports={Create,All,Search,Update,Delete};