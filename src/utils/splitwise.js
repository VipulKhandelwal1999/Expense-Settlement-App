import Expense from '../classes/expense';
import { push_heap, pop_heap, heap_top } from './Heap';

// transactions = [{person1: 'pulkit', person2: 'deepak', amount: 100}]
const splitwise = (transactions) => {
  // transactions array will store an object of expense class
  let net_balance = {}; // hashmap or also called as object in js
  for (let i = 0; i < transactions.length; i++) {
    let e = transactions[i]; // e is an object of expense class

    // person1 is the payer so under a credit
    // person2 is the payee so under a debit
    if (e.person1 in net_balance) {
      // checks whther e.person1 is present in hashmap or not
      net_balance[e.person1] += e.amount;
    } else {
      net_balance[e.person1] = e.amount;
    }

    if (e.person2 in net_balance) {
      net_balance[e.person2] -= e.amount;
    } else {
      net_balance[e.person2] = -e.amount;
    }
  }

  const positive = []; // heap of credit holders
  const negative = []; // heap of debit holders

  for (const p in net_balance) {
    if (net_balance[p] > 0) {
      push_heap(positive, net_balance[p], p);
    } else {
      push_heap(negative, -1 * net_balance[p], p);
    }
  }

  const result = []; // array of expense objects

  while (positive.length > 0) {
    let p1 = heap_top(positive);
    let p2 = heap_top(negative);
    pop_heap(positive);
    pop_heap(negative);
    let exp = new Expense(p2.second, p1.second, Math.min(p1.first, p2.first));
    result.push(exp);
    if (p1.first > p2.first) {
      push_heap(positive, p1.first - p2.first, p1.second);
    } else if (p1.first < p2.first) {
      push_heap(negative, p2.first - p1.first, p2.second);
    }
  }
  return result;
};

export { splitwise };
