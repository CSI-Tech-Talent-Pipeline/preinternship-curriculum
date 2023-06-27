


Tasks for the day:

- move `jobs` to state in the `App` component
- create `AddJobForm` component with inputs for:
  - 
- Add a button for creating a new job to add to the tracker

### Modal Code

```jsx
// ui/Modal.jsx
function Modal({ children, isVisible, hideModal }) {
  if (!isVisible) return null;
  return (
    <div onClick={hideModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center">
      <div onClick={e => e.stopPropagation()} className="max-w-xl w-144 mx-auto flex flex-col h-2/3">
        <button onClick={hideModal} className="text-white text-xl place-self-end">X</button>
        <div className="bg-white text-gray-800 p-8">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
```

## Resources

- [Create a Custom Modal in React with Tailwind CSS](https://www.youtube.com/watch?v=nwJK-jo91vA)