import React, { createContext } from "react";

const Context = createContext(0);

function AppWithContext() {
  const [count, setCount] = React.useState(0);
  console.log("Render App");
  return (
    <Context.Provider value={{ count, setCount }}>
      <div className="App">
        <ButtonA />
        <br />
        <ButtonB count={count} setCount={setCount}>
          <br />
          <ComposantC count={count} />
        </ButtonB>
      </div>
      <ComposantD />
      <ComponentPure />
    </Context.Provider>
  );
}

const ButtonA = () => {
  const { count, setCount } = React.useContext(Context);
  console.log("Render A");
  return (
    <>
      {count}
      <button onClick={() => setCount((curCount) => curCount + 1)}>
        Button A
      </button>
    </>
  );
};

const ButtonB = ({ children, count, setCount }) => {
  console.log("Render B");
  return (
    <>
      {count}
      <button onClick={() => setCount((curCount) => curCount + 1)}>
        Button B
      </button>
      {children}
    </>
  );
};

const ComposantC = ({ count }) => {
  const { setCount } = React.useContext(Context);
  console.log("Render C");

  return (
    <>
      <button onClick={() => setCount((curCount) => curCount + 1)}>
        Button C
      </button>
      {count}
    </>
  );
};

const ComposantD = () => {
  const [count, setCount] = React.useState(0);
  console.log("Render D");

  return (
    <>
      <button onClick={() => setCount((curCount) => curCount + 1)}>
        Button D
      </button>
      {count}
    </>
  );
};

const ComponentPure = () => {
  console.log("Render Pure");
  return <></>;
};

export default AppWithContext;
