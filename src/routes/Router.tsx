import { DefaultLayout } from "../layout/DefaultLayout";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
export function Router(){
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<DefaultLayout/>} >
               <Route path="/" element={<Home />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}