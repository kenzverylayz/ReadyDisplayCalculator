import React from 'react';
import Background from './components/Background';  // Background Component
import Calculator from './components/Calculator';  // Calculator Component

function App() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Component */}
      <Background />

      {/* Calculator Component Centered with Vertical Spacing */}
      <div className="absolute inset-0 flex items-center justify-center p-20">
          <Calculator />
        </div>
    </div>
  );
}

export default App;
