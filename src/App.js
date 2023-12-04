// import logo from './logo.svg';
import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";
import Signin from "./users/signin";
import Account from "./users/account";
import Tables from "./users/tables";

function App() {
  return (
      <HashRouter>
          <div>
              <Routes>
                  <Route path="/"         element={<Navigate to="/Labs"/>}/>
                  <Route path="/signin"   element={<Signin />} />
                  <Route path="/account"  element={<Account />} />
                  <Route path="/tables"   element={<Tables />} />
                  <Route path="/hello"    element={<HelloWorld/>}/>
                  <Route path="/Labs/*"   element={<Labs/>}/>
                  <Route path="/Kanbas/*" element={<Kanbas/>}/>
              </Routes>
          </div>
      </HashRouter>
  );
}

export default App;
