import React, { useState, useEffect } from 'react';

const App = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const actualTime = timer + 1;
      setTimer(actualTime);
    }, 1000);
    return () => clearInterval(interval)
  }, [timer])

  return (
    <div>
      { timer }
    </div>
  );
}

export default App;
