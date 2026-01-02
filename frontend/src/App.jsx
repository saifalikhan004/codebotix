// Redux removed: useDispatch(), asynccurrentuser(), and store references
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";

// App uses router only; no Redux state
function App() {
  const location = useLocation();

  // Hide footer on specific routes (AI page)
  const hideFooterPaths = ["/ai","/workspace"]; // add more paths if needed
  const hideNavPaths = ["/ai"]; // use inline nav on AI page
  const showFooter = !hideFooterPaths.includes(location.pathname);
  const showNav = !hideNavPaths.includes(location.pathname);
  return (
    <div className="App h-full w-full">
      {showNav && <Nav />}
      <Mainroutes />
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
