import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import { useState } from 'react';
import UseNowSection from './components/UseNowSection/UseNowSection';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import AddTransactions from './components/AddTransactions/AddTransactions';
import Expense from './classes/expense';
import { splitwise } from './utils/splitwise';

const App = () => {
  const [name, setName] = useState('');
  const [allNames, setAllNames] = useState([]);
  const [payer, setPayer] = useState('Choose Payer');
  const [payee, setPayee] = useState('Choose Payee');
  const [amount, setAmount] = useState('');
  const [allTransactions, setAllTransactions] = useState([]);
  const [finalTransactions, setFinalTransactions] = useState([]);
  const [outputList, setOutputList] = useState([]);
  const [inputList, setInputList] = useState([]);
  const [flag, setFlag] = useState(true);

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

  const splitwiseTransactions = () => {
    const input = [];
    for (let item of allTransactions) {
      input.push(new Expense(item.payer, item.payee, parseInt(item.amount)));
    }
    setInputList(input);
    const output = splitwise(input);
    setOutputList(output);
    setFinalTransactions(() =>
      output.map((x) => {
        return { payer: x.person1, payee: x.person2, amount: x.amount };
      })
    );
    setFlag(false);
  };

  return (
    <Router>
      <Route exact path='/'>
        <HeroSection/>
      </Route>
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
          splitwiseTransactions={splitwiseTransactions}
          inputList={inputList}
          outputList={outputList}
          flag={flag}
          finalTransactions={finalTransactions}
        />
      </Route>
    </Router>
  );
};

export default App;
