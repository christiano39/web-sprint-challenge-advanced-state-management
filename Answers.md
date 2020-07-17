1. What problem does the context API help solve?

The context API is helpful when you have deeply nested components that need to use props from the top level. Instead of prop drilling all the way down through many components, you can simply put the state into a context object and use it at any level.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are telling your reducer what happened. They do this with the type attribute, and they can also deliver extra info to the reducer in the form of a payload.
Reducers take in an action and they use it to update the current state to the next state. Reducers are pure functions that will always have a consitent input -> output with no side effects.
The store is where your state is kept and it can be accessed by any component that is nested within the Provider component, which uses the store to distribute state. The store is known as the 'single source of truth' because it is the only place in the application that holds that particular state, and you know that state will be valid because the reducer is the only thing that is allowed to change that state. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is usually made up of global variables that many components will need to access all throughout the app. Common times we would use Application state would be for storing a currentUser or any pertinent application-wide data like an array of products for a store. Component state is used when only one or a few components need to have access to that state. A good time to use component state is for state controlled form values, because only the Form component will need to use that state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk provides the ability to perform asynchronous actions in Redux. It allows your action creators to use the dispatch function at the functions discretion. An example would be making an axios call. Instead of calling dispatch right away, redux-thunk allows for the promise to resolve before dispatching a resulting action.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My personal favorite state management system that we learned would be Context, because it is very simple and requires much less boiler plate setup than Redux. However, each has their advantages and disadvantages in different cases, and it is good to be comfortable with using either systems.
