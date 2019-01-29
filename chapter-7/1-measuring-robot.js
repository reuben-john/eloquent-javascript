// Measuring a robot

// It’s hard to objectively compare robots by just letting them
// solve a few scenarios. Maybe one robot just happened to get
// easier tasks or the kind of tasks that it is good at, whereas
// the other didn’t.

// Write a function compareRobots that takes two robots (and
// their starting memory). It should generate 100 tasks and let
// each of the robots solve each of these tasks. When done, it
// should output the average number of steps each robot took per task.

// For the sake of fairness, make sure you give each task to
// both robots, rather than generating different tasks per robot.

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    total1 += 1;
    total2 += 2;
  }
  console.log(total1, total2);
}

compareRobots(RouteRobot, [], GoalOrientedRobot, []);
