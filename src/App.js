import AppRoutes from './routes';
import Layout from './hoc/layout';


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App(){
  return(
    <Layout>
  <AppRoutes />
  <ToastContainer/>
  </Layout>
    )

}