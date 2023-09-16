import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomPage";
import {Path} from "./Path";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.home} element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
