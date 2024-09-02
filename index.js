const sequelize = require("./util/database.js");

// const Customer = require("./backend/models/customer");
// const Order = require("./backend/models/order");

const User = require("./backend/models/user");
const Exercise = require("./backend/models/exercise");
const Category = require("./backend/models/category");
const ExerciseCategoryJunction = require("./backend/models/exerciseCategoryJunction");
const ExerciseInstance = require("./backend/models/exerciseInstance");
const WorkoutStep = require("./backend/models/workoutStep");

const currentDate = new Date();

let customerId = null;
sequelize
    //.sync({force: true})
    .sync()
    .then((result) => {
        return User.create({ 
            username: "danny", 
            email: "danny@gmail.com", 
            password: "1234", 
            isLocked: false, 
            numRetries: 3, 
            created: currentDate, 
            lastUpdated: currentDate
        });
        console.log(result);
    })
    .then(newUser => {
        console.log("New user created: ", newUser);
        // customerId = customer.id;
        // console.log("First Customer Created:", customer);
        // return customer.createOrder({total: 45});
    })
    // .then(order => {
    //     console.log("Order is: ", order);
    //     return Order.findAll({where: customerId });
    // })
    // .then(orders => {
    //     console.log("All the Orders are: ", orders);
    // })
    .catch((err) => {
        console.log(err);
    });