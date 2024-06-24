const express = require("express");
const userControllers = require("../controllers/userControllers");
const postControllers = require("../controllers/postControllers");
const checkAuthentication = require("../middleware/checkAuthentication");

const userRouter = express.Router();

// User routes
userRouter.post("/", userControllers.createUser);
userRouter.get("/", checkAuthentication, userControllers.listUsers);
userRouter.get("/:id", checkAuthentication, userControllers.showUser);
userRouter.patch(
  "/:id",
  checkAuthentication,
  userControllers.updateUserAdditionalInfo
);

// Post routes
userRouter.get("/posts", postControllers.listAllPost)
userRouter.post("/:id/posts", postControllers.createPost);
userRouter.delete("/posts/:postId", postControllers.deletePost);



module.exports = userRouter;
