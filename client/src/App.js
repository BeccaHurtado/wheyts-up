// import logo from './logo.svg';
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

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
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
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            {/* <Route
              path="/profile"
              element={<Profile />}
            /> */}
          </Routes>
          <Footer />
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;