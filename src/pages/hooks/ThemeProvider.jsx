import { createContext, useContext } from 'react';

// Step 1: Create a context
const UserContext = createContext();

// Step 2: Create a provider component
const UserProvider = ({ children }) => {
  // This data will be shared with consuming components
  const userData = {
    username: 'john_doe',
    email: 'john@example.com',
  };

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

// Step 3: Create a consumer component
const UserInfo = () => {
  // Step 4: Consume the context using useContext
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

// Step 5: Use the provider component to wrap consuming components
const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>My App</h1>
        <UserInfo />
      </div>
    </UserProvider>
  );
};

export default App;
