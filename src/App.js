import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Footer from './Footer.js';
import Customers from './components/Customers';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div style={{background: "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)"}}>
      <Header />
      <Banner />
      <Services />
      <Customers />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
