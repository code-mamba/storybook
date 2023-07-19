import logo from './logo.svg';
import './App.css';
import { PrimarySubscription } from './components/Subscription/Subscription.stories';

function App() {
  return (
    <div className="App">
      <PrimarySubscription></PrimarySubscription>
      <PrimarySubscription></PrimarySubscription>
      <PrimarySubscription></PrimarySubscription>
    </div>
  );
}

export default App;
