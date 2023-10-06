import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./paginas/index";
// components
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receita/:id" element={<MealDetails />} />
          <Route path="/receita/categoria/:name" element={<Category />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      );
}

      export default App;
