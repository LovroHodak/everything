import './App.css';
import { tw } from "./tailwind";

function App() {
  return (
    <AppCont>
      <h1 className="text-3xl font-bold underline">Lovre</h1>
      <h1 className="text-tinny">Lovre</h1>
    </AppCont>
  );
}

const AppCont = tw.div`
border-2 border-black
`

export default App;
