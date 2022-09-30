import { Outlet,Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/invoices">Invoices List</Link> |{" "}
      <Link to="/expenses">Expenses</Link> |{" "}
      <Link to="/invoices_with_param">Invoices With Param</Link>|{" "}
      <Link to="/invoices_search_param">Invoices Search Param</Link>
    </nav>
    
     {/* <Outlet> swaps between the two child routes (<Invoices> and <Expenses>)! */}
    
    <Outlet />
  </div>
  );
}

export default App;
