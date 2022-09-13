import './index.scss';
import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar';
import { BrowserRouter as Router} from 'react-router-dom';
export default function Layout({children}){
     return(
        <Router>
        <div className='layout-wrapper'>
            <Header />
           
               <section className='container'>
                <div className='row'>
                   
               
                <div className='col-9 pe-5'>
                   
            {/* here will be our content */}
                 {children}
                 </div>
                  <div className='col-3 px-3'>
                 <Sidebar />
                </div>
                
                </div>
              
                {/* <h1>
                     Website content </h1> 
                    <p>Loreum ipsum dolar smith test data...</p>
                    */}

                    </section> 
                  
            <Footer />
        </div>
        </Router>
        //or ve can we div instead of empty tag
    )
}
// export default Home; we acn export like this also

//we can add style like this but this is not right way
