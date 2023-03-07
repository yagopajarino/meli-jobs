import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Spinner from "./components/Spinner.js";

function App() {
  return (
    <div className=" font-roboto flex flex-col items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
