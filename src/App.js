import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ReportIncident from './pages/ReportIncident';
import Search from './pages/Search';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'' , element:<Navigate to="/dashboard" />},
      {path:'dashboard' , element:<Dashboard/>},
      {path:'report' , element:<ReportIncident/>},
      {path:'search' , element:<Search/>},
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
