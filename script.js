function createExerciseOfTheDayFunction() {
    let exerciseOfTheDay = "";

    return function(exerciseName) {
      if (exerciseName) {
        exerciseOfTheDay = exerciseName;
      }
      console.log("Today's exercise:", exerciseOfTheDay);
    };
  }


  const exerciseOfTheDayFunction = createExerciseOfTheDayFunction();


  exerciseOfTheDayFunction("soccer");



