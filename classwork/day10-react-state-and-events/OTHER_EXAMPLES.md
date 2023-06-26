# Local Variables vs State Variables
Let's check out this [codesandbox example of the difference between local variables and state variables](https://codesandbox.io/s/counter-state-example-0r8stb?file=/src/App.js)

---

## Handling events in React 

Event handlers can only be attached to DOM elements, we can't attach event listeners directly to our components

<div style="display: flex; flex-direction: row; font-size: 0.95em;">
  <div style="width: 50%">
    
### Doesn't work:

```js
function Button() {
  return (
    <button>
      Click Me
    </button>
  );
};

<Button onClick={() => console.log('clicked!')}>
  Click Me
</Button>
```
    
    
  </div>
  <div style="width: 50%">

### Does work

```js
function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Click Me
    </button>
  );
};

<Button onClick={() => console.log('clicked!')}>
  Click Me
</Button>
```

  </div>
</div>


---

## Defining Event Handlers

We can also define event handler functions within our components and pass the function reference to our event listener in the JSX.

```js
function Counter() {
  const [count, setCount] = useState(2);
  const handleDecrement = (event) => {
    if(count > 0) {
      setCount(count => count - 1);
    }
  }

  return (
    <div>
      {count}
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
```

This is helpful in the case where we need to introduce additional event handling logic. We can do so without cluttering our JSX.

---

## Passing State as Props

To understand the difference between state and props, let's consider another example. This [Smart Home application](https://codesandbox.io/s/vigilant-minsky-iiykrb) is set up with multiple smart bulbs that can be added to groups. The bulbs can then be switched on and off together with all other bulbs in their group. In this example, we'll show how the state in one component can be passed as a prop value to another (child) component.

