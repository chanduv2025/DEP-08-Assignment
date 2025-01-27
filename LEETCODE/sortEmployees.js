function parseArguments(args) {
  const employees = [];
  for (let i = 0; i < args.length; i += 3) {
    employees.push({
      name:args[i],
      dob:args[i + 1],
      score: parseInt(args[i + 2], 10),
    });
  }
  return employees;
}

function sortEmployees(employees) {
  employees.sort((a, b) => a.score - b.score);
}

const args = process.argv.slice(2);

if (args.length % 3 !== 0) {
  console.error("Each employee should have three attributes: name, dob, score");
  return;
}

const employees = parseArguments(args);
sortEmployees(employees);

console.log("Sorted employees by scores:");
console.log(
  employees.map((e) => `${e.name} (${e.dob}): ${e.score}`).join("\n")
);