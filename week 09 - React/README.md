```
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-white border p-5 justify-center items-start text-center font-[laila]" >

      <BrowserRouter>

        <nav className="flex gap-5 text-center justify-center font-bold">
          <Link to="/">Allen</Link> | 
          <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
          <Link to="/neet/online-coaching-class-12">Class 12</Link>
        </nav>

        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

function Landing() {
  return <div className="text-4xl p-40">Welcome to Allen</div>;
}

function Class11Program() {
  return <div className="text-4xl p-40">NEET programs for Class 11th</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate('/');
  }

  return (
    <div className="text-4xl p-40 flex flex-col gap-5 items-center">
      <p>NEET programs for Class 12th</p>
      <button onClick={redirectUser} className="text-xl border px-3 py-2 text-center bg-gray-500 w-[20%] text-black rounded-md">Go Back to Home</button>
    </div>
  );
}

export default App;

```