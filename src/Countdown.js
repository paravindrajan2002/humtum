import React, { useState, useEffect } from 'react'

const Countdown = () => {

     const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    let interval;

    if (countdown > 0) {
      // Start the countdown when the component mounts or when the countdown is reset
      interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    // Clear the interval when the component is unmounted or when the countdown reaches 0
    return () => clearInterval(interval);
  }, [countdown]); // Re-run the effect whenever the countdown changes

  const handleTextEditorClick = () => {
    // Reset the countdown to 20 seconds when the text editor is clicked
    setCountdown(20);
  };

  return (
    <div>
           <div onClick={handleTextEditorClick}>
        {/* Your text editor content goes here */}
        <textarea />
      </div>
      {countdown > 0 && <p>Time remaining: {countdown} seconds</p>}
      {countdown === 0 && <p>Time's up!</p>}
    </div>
  )
}

export default Countdown