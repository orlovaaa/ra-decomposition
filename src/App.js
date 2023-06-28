import './css/main.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import inputData from './inputData';

function App() {
  return (
    <>
      <Header data={inputData.header}/>
      <Main data={inputData.main}/>
      <Footer data={inputData.footer}/>
    </>
  );
}

export default App;
