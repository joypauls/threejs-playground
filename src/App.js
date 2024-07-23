// import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import MyThree from "./MyThree";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Three.js Playground</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Spinny</Nav.Link>
            <Nav.Link href="#features">Stack</Nav.Link>
            <Nav.Link href="#pricing">Gravity Stack</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Three.js</Navbar.Brand>
        </Container>
      </Navbar> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MyThree />
    </div>
  );
}

export default App;
