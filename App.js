import { CustomRoutes } from "./AllRoutes/CustomRoutes";
import { HomePage } from "./Pages/HomePage";
import { Header } from "./components/Header";





function App() {
  return (
    <div className="App">
      <Header/>
     <CustomRoutes/>
    </div>
  );
}

export default App;
