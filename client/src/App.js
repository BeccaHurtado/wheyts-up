// import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
// import RoutineList from './components/RoutineList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import background from "./images/pattern-background.jpg"

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"

    }}>
    <ThemeProvider theme={darkTheme}>
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>

    </ApolloProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;