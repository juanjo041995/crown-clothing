import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='/shop' element={<h1>hello from the shop</h1>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
