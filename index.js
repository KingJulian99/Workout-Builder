const sequelize = require("./util/database.js");

const User = require("./backend/models/user");
const Exercise = require("./backend/models/exercise");
const Category = require("./backend/models/category");
const ExerciseCategoryJunction = require("./backend/models/exerciseCategoryJunction");
const ExerciseInstance = require("./backend/models/exerciseInstance");
const WorkoutStep = require("./backend/models/workoutStep");

Exercise.belongsToMany(Category, {
  through: ExerciseCategoryJunction,
  foreignKey: "exerciseId",
});
Exercise.hasMany(ExerciseInstance, { foreignKey: "exerciseId" });

ExerciseCategoryJunction.belongsTo(Exercise, { foreignKey: "exerciseId" });
ExerciseCategoryJunction.belongsTo(Category, { foreignKey: "categoryId" });

ExerciseInstance.belongsTo(Exercise, { foreignKey: "exerciseId" });
ExerciseInstance.hasMany(WorkoutStep, { foreignKey: "workoutStepId" });

WorkoutStep.belongsTo(ExerciseInstance, { foreignKey: "exerciseInstanceId" });

WorkoutInstance.belongsTo(Workout, { foreignKey: "workoutId" });
WorkoutInstance.belongsTo(WorkoutStep, { foreignKey: "currentWorkoutStep" });
WorkoutInstance.belongsTo(User, { foreignKey: "owner" });

Workout.belongsTo(User, { foreignKey: "createdBy" });
Workout.belongsTo(WorkoutStep, {
  foreignKey: "firstWorkoutStep",
  as: "firstStep",
});

const currentDate = new Date();

let customerId = null;
sequelize
  .sync()
  .then((result) => {
    return User.create({
      username: "danny",
      email: "danny@gmail.com",
      password: "1234",
      isLocked: false,
      numRetries: 3,
      created: currentDate,
      lastUpdated: currentDate,
    });
    console.log(result);
  })
  .then((newUser) => {
    console.log("New user created: ", newUser);
  })
  .catch((err) => {
    console.log(err);
  });
