Question Answer:

1.What is JSX, and why is it used?
Ans: JSX stands for JavaScript XML.It allows to write HTML-like markup directly within JavaScript code.
JSX make the User Interface more efficient.

2.What is the difference between State and Props?
Ans: State manage components interactivity. State can be updated.
Props are read-only data that passed parent to child components.

3.What is the useState hook, and how does it work?
Ans: useState hook allows store data and update data to the functional components.
example: const [state,setState]= useState(initialState);
Firstly need to import useState hook from react to use it. Need to set some initial value that will be state value. After working on data we can update and save the data into setState.

4.How can you share state between components in React?
Ans: We can share state passing props from a component and can receive the props into it's child component and easily can use it or work on it.

5.How is event handling done in React?
Ans: For handling an event we can make a function and can use it as an event handler like- onClick. We can add the function as a event handler but if we use it directly we don't need to call it. But if we want to pass a parameter then we have to warp the function with an arrow function then it will work properly after calling the function.