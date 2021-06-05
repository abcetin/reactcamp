import "./App.css";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navigation from "./layouts/Navigation";

function App() {
  return (
    <div className="App">
      
      <Navigation/>
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
