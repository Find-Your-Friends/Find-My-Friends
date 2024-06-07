const express = require("express");
const userControllers = require("../controllers/userControllers");
const checkAuthentication = require("../middleware/checkAuthentication");
const additionalInfoControllers = require("../controllers/additionalInfoControllers");
const userRouter = express.Router();

//additional-info routes
userRouter.post(
  "/:user_id/additional-info",
  checkAuthentication,
  additionalInfoControllers.addAdditionalInfo
);

userRouter.post("/", userControllers.createUser);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
userRouter.get("/", checkAuthentication, userControllers.listUsers);
userRouter.get("/:id", checkAuthentication, userControllers.showUser);
userRouter.patch(
  "/:id",
  checkAuthentication,
  userControllers.updateUserAdditionalInfo
);
// userRouter.patch('/:id', checkAuthentication, userControllers.updateUser);

module.exports = userRouter;

// updateAdditionalInfomation
