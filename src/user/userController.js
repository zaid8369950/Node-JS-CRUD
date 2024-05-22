var userService = require('./userService');


var getDataControllerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee});
}

 var createUserControllerFn = async (req, res) =>
 {
    var status = await userService.createUserDBService(req.body);
    if (status){
        res.send({"status": true, "message": "User created successfully"});
    }   else{
        res.send({"status": false, "message": "Error creating user"});
    }
 }

 var updateUserController = async (req, res) =>
 {
   console.log(req.params.id);
   console.log(req.body);

   var result = await userService.updateUserDBService(req.params.id,req.body);

   if (result){
    res.send({"status": true, "message": "User Updateddd"});
    }   else{
        res.send({"status": false, "message": "User Updatedd failedd "});
    }

 }

 var deleteUserController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
    }

 module.exports = { getDataControllerfn, createUserControllerFn, updateUserController,deleteUserController};