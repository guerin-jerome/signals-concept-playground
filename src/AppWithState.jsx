import { useState } from "react";

export function AppWithState() {
  const [count, setCount] = useState(0);

  console.debug("Render AppWithState");

  function addToCount() {
    setCount((count) => count + 1);
  }
  return (
    <div className="App">
      <Parent count={count} addToCount={addToCount} />
    </div>
  );
}

function Parent({ count, addToCount }) {
  console.debug("❌ Render Parent - shouldnt rerender with new count");

  return (
    <div>
      <ChildOne />
      <ChildTwo count={count} addToCount={addToCount} />
    </div>
  );
}

function ChildOne() {
  console.debug("❌ Render ChildOne - shouldnt rerender with new count");

  return <p>A Dummy Counter App</p>;
}

function ChildTwo({ count, addToCount }) {
  console.debug("✅ Render ChildTwo - should rerender with new count");

  return (
    <div>
      <span>{count}</span>
      <div>
        <button onClick={addToCount}>+</button>
      </div>
    </div>
  );
}
