/**
 * Simple Greeter Application
 * A basic greeting utility to demonstrate CI/CD pipeline
 */

function greet(name) {
  if (!name) {
    return "Hello, Guest!";
  }
  return `Hello, ${name}!`;
}

function greetWithTime(name) {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  const greeting = greet(name);
  return `${greeting} Good ${timeOfDay}!`;
}

module.exports = {
  greet,
  greetWithTime
};

