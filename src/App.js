
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
  import Index from "./pages/index";
  import Detail from "./pages/detailbiodata";
  import Calculator from './pages/calculator';
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
        <Route exact path="/" element={<Index/>}/>
          <Route exact path="/Detail" element={<Detail/>}/>
          <Route exact path="/Calculator" element={<Calculator/>}/>
        </Routes>
      </Router>
    </>
  );
}
  
export default App;