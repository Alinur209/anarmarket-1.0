import { Header } from "./Components/Header/Header";
import AppRouter from './AppRouter/AppRouter'
import { useSelector } from "react-redux";
import { Sticky } from "./Components/Sticky_header/Sticky";
import { Footer } from "./Components/Footer/Footer";
import { Path } from "./Components/Path/Path";


function App() {
  const loading = useSelector(state => state.loading.loading)


  
  return (
      <div className="App"> 
          {/* <Loader type="full" /> */}
          <Header />
          <Sticky />
          <Path />
          <AppRouter />
          <Footer />
      </div>
  )
}

export default App;
