# Designing and Testing Reducer Functions in JavaScript

**Objective**: Create and test two 'reducer' style functions that mimic the behavior of Redux reducers.

Redux is essentially a state management tool. It is sometimes used alongside Single Page Web Applications built with AngularJS or React, but it doesn't depend on those frameworks and can be used indepdently. You will learn more about the situations in which it is useful later on in the course. 

For now, we'll be focusing on understanding the JavaScript concepts that it applies. Redux revolves around the idea of having a single state inside your application, with actions describing changes happening to that state, and reducers implementing those changes.

One of the key concepts in Redux is that the state is never mutated directly. Instead, the previous value of state is passed to the reducer along with an action and the return value should be the new state after the change. The state passed as an argument to the reducer should not be changed.

## Deliverables:

- Implement a function `counter` that mimics a simple counter. It should take two arguments: the current `state` and an `action`. The `state` will be a number and `action` will be an object that can have a `type` property of either `"INCREMENT"` or `"DECREMENT"`. The `INCREMENT` action should increase the state by 1 and `DECREMENT` should decrease it by 1. The function should return a new state, not modify the existing state, but is this an issue because the `state` has a primitive type like Number?

- Implement a function `todos` that mimics a todo list. It should take two arguments: the current list of `todos` and an `action`. The `todos` will be an array of strings. The `action` can have a type property of `"ADD_TODO"` and a `payload` property of a string representing the new todo. When an `ADD_TODO` action is given, it should return a new list with the new todo added to the end. The function should return a new list, not modify the existing list.

- Write Jest tests for both of these functions. You should test the following:
  - The initial state, the state after one action, and the state after multiple actions.
  - Ensure the state is not being mutated. This can be done by deep cloning the initial state, running the reducer function, and then checking if the initial state is still the same using the `.toEqual` matcher. This will check that all levels of the object or array have not been modified.

Expected Output: Two JavaScript files with the implemented functions and one test file with the written tests.

Resources:

- [Understanding Redux: The World’s Easiest Guide to Beginning Redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [Redux Basics](https://redux.js.org/basics/basic-tutorial)
- [Jest Testing Examples](https://jestjs.io/docs/getting-started)

The goal of this assignment is to help you understand the concept of reducers and how actions are used to determine changes in state, which are key concepts in Redux. Writing tests for these functions will further deepen your understanding and give them practice in writing unit tests, which is a key skill for a JavaScript developer. Furthermore, the practice of not mutating state directly is a fundamental concept in functional programming and a good practice to adopt in many situations to avoid unexpected side effects.