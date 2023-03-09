import MemberList from "./components/MemberList";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <MemberList />
    </div>
  );
}

export default App;
