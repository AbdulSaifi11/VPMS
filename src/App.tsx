import CustomerLogin from './customerPanel/CustomerLoginPage';
import  Register  from './customerPanel/RegistrationPage';
import LoginChoose from './customerPanel/LoginChoose';
import { Route,Routes} from 'react-router-dom';
import {Features} from './customerPanel/FooterLink';
import { Pricing } from './customerPanel/FooterLink';
import { Service } from './customerPanel/FooterLink';
import { Support} from './customerPanel/FooterLink';
import MainCustomer from './customerPanel/mainCustomerPage';
import About_Cont_Career from './customerPanel/about_contact_career';
// import ValidEmail from './emalValidation';
function App(){
  return(
    <>
    <Routes>
      <Route path="/login" element={<CustomerLogin/>} />
      <Route path="/" element={<Register />}/>
      <Route path="/choose" element={<LoginChoose/>}/>
      <Route path="/maincustomer" element={<MainCustomer/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/price" element={<Pricing/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/Acc" element={<About_Cont_Career/>}/>
    </Routes>
    {/* <ValidEmail/> */}
    </>
  )
}
export default App;