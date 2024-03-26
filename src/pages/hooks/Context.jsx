import { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Component that consumes the context
function ThemeButton() {
  // Consume the context
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.color }}>
      Themed Button
    </button>
  );
}

// Component that provides the context
export default function Context() {
  // Define the theme object
  const [theme, setTheme] = useState({
    background: 'skyblue',
    color: 'white'
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => ({
      background: prevTheme.background === 'skyblue' ? 'lightgreen' : 'skyblue',
      color: prevTheme.color === 'white' ? 'black' : 'white'
    }));
  };

  return (
    // Provide the theme object and toggleTheme function to the context provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>Using useContext</h1>
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}
