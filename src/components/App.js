
import Head from './Header.js';
import Home from './Home.js'
import '../css/App.scss';


function App() {
  return (
    <div>
      <Head />
      <div className="appBody">
        

      <Home />
      {
          // <Menu />
          // <Orders />
          // <Reservation />
          // <Footer />
      }  
      </div>
    </div>
  );
};

export default App;
