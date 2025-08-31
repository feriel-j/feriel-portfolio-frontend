
import { Route, Routes } from 'react-router-dom';
import './_dist/App.css';
import MainLayout from './domains/layouts/MainLayout';
import BaseComponent from './domains/pages/BaseComponent';
import ContactUs from './domains/pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<BaseComponent/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      

        </Route>
        {/* <Route path="/contact" element={<ContactUs/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
