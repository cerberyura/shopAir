import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomPage";
import {Path} from "./Path";
import {PlanePage} from "./pages/PlanePage";
import {CreatePlanePage} from "./pages/CreatePlanePage";
import {OrderPage} from "./pages/OrderPage/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.home} element={<HomePage/>}/>
        <Route path={`${Path.plane}/:id`} element={<PlanePage/>}/>
        <Route path={Path.createPlane} element={<CreatePlanePage/>}/>
        <Route path={Path.order} element={<OrderPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
