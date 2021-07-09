import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import { useState } from 'react';
import UseNowSection from './components/UseNowSection/UseNowSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import AddTransactions from './components/AddTransactions/AddTransactions';

const App = () => {
  const [name, setName] = useState('');
  const [allNames, setAllNames] = useState([]);
  const [payer, setPayer] = useState('Choose Payer');
  const [payee, setPayee] = useState('Choose Payee');
  const [amount, setAmount] = useState('');
  const [allTransactions, setAllTransactions] = useState([]);

  const addParticipant = () => {
    setAllNames((previous) => [...previous, { name }]);
    setName('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTransactions((previous) => {
      return [...previous, { payer, payee, amount }];
    });
    setPayer('');
    setPayee('');
    setAmount('');
  };

  return (
    <Router>
      <Route exact path='/' component={HeroSection} />
      <Route exact path='/use-now'>
        <UseNowSection
          name={name}
          setName={setName}
          allNames={allNames}
          addParticipant={addParticipant}
        />
      </Route>
      <Route exact path='/about-us' component={AboutUsSection} />
      <Route exact path='/add-transactions'>
        <AddTransactions
          allNames={allNames}
          handleSubmit={handleSubmit}
          payer={payer}
          setPayer={setPayer}
          setPayee={setPayee}
          payee={payee}
          amount={amount}
          setAmount={setAmount}
          allTransactions={allTransactions}
          setAllTransactions={setAllTransactions}
        />
      </Route>
    </Router>
  );
};

export default App;
