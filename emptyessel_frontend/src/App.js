import DisplayTestimonials from "./components/display_Testimonials";
import { useNavigate } from 'react-router-dom'
import "../src/css/app.css"

function App() {
  const navigate = useNavigate()
  const changePage=()=>{
    navigate("/addtestimony")
  }
  return (
    <div className="App">
      <center>
        <h1>EmptyVessel</h1>
      </center>
      <button id="addbutton" onClick={changePage}>Add Testimony</button>
      <DisplayTestimonials />
    </div>
  );
}

export default App;
