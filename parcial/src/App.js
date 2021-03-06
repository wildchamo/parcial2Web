import './App.css';
import Header from './componentes/header';
import Header2 from './componentes/header2/header2';
import Header3 from './componentes/header3/header3';
import Section1 from './componentes/section1/section1.js';
import Section2 from './componentes/section2/section2.js';
import Section3 from './componentes/section3/section3.js';
import Section4 from './componentes/section4/section4.js';
import Section5 from './componentes/section5/section5.js';
import Section6 from './componentes/section6/section6.js';
import Footer from './componentes/footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Header2/>
      <Header3/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>

    </div>
  );
}

export default App;
