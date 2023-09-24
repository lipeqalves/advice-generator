import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { ApiContextProvider } from "./context";
function App() {
  return (
    <ApiContextProvider>
      <main className="container">
        <Card />
        <Footer />
      </main>
    </ApiContextProvider>
  );
}

export default App;
