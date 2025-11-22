import Lenis from 'lenis';
import React, { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])
  return (
    <div>
      
      
    </div>
  )
}

export default App
