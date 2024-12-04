```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(false)}>Stop Counter</button>
    </div>
  );
}
```