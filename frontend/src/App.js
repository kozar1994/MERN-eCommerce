import { Container } from "react-bootstrap";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/card/:id?" component={CartScreen} />
        </Container>
      </main>
      <Fotter />
    </Router>
  );
}

export default App;
