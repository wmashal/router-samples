import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Expenses from "./routes/Expenses";
import ListInvoices from "./routes/ListInvoices";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/Invoice";
import InvoicesSearchParam from "./routes/InvoicesSearchParam";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<ListInvoices />} />
        <Route path="invoices_with_param" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="invoices_search_param" element={<InvoicesSearchParam />} />
          {/* no match route*/}
     <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      } 
    />
      </Route>
     
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
