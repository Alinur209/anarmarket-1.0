import { Header } from "./Components/Header/Header";
import AppRouter from './AppRouter/AppRouter'
import { Sticky } from "./Components/Sticky_header/Sticky";
import { Footer } from "./Components/Footer/Footer";
import { Path } from "./Components/Path/Path";
import useMediaQuery from "./hooks/useMediaQueryHook";


function App() {
  const isMatch = useMediaQuery("(max-width: 652px)")
  
  return (
      <div className="App"> 
          {!isMatch && <Header />}
          <Sticky />
          <Path />
          <AppRouter />
          <Footer />
      </div>
  )
}

export default App;
