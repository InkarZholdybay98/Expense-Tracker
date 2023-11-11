import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExp from "./components/IncomeExp";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="expenseTracker">
      <GlobalProvider>
        <div className="upperPart">
          <Header />
          <Balance />
        </div>
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
