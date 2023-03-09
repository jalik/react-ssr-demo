import React, {
  useEffect,
  useState,
} from 'react';

// import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/logo.svg"
          className="App-logo"
          alt="logo"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Date: {time.toLocaleString()}</p>
        <p>
          <button onClick={() => setCount((s) => s + 1)}>
            Counter: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
