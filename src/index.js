import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';

import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import App from "./App";
import Expenses from './routes/expenses';
import Invoices from "./routes/invoices";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <App/>

);