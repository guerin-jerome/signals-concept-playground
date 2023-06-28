import { signal } from "@preact/signals-react"; //importing signal

export function AppWithSignals() {
  const count = signal(0); //creating the signal

  console.debug("Render AppWithSignals");

  function addToCount() {
    return (count.value = count.value + 1); //updating the count
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
      <span>{count.value}</span>
      <div>
        <button onClick={addToCount}>+</button>
      </div>
    </div>
  );
}
