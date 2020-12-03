import { Container } from "react-bootstrap";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";

function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Fotter/>
    </>
  );
}

export default App;
