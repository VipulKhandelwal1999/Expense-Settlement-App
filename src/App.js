import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import UseNowSection from './components/UseNowSection/UseNowSection';


const App = () => {
  return (
    <Router>
      <Route exact path='/' component={HeroSection} />
      <Route exact path='/use-now' component={UseNowSection} />
      <Route exact path='/about-us' component={HeroSection} />
      <Route exact path='/add-transactions' component={HeroSection} />
    </Router>
  );
};

export default App;
