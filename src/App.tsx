import Login from './customerPanel/LoginPage';
import  Register  from './customerPanel/RegistrationPage';
import CustomerPanel from './customerPanel/CustomerPanel';
import {Route,Routes} from 'react-router-dom';
// import ValidEmail from './emalValidation';
function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Register />}/>
      <Route path="/customer" element={<CustomerPanel/>}/>
    </Routes>
    {/* <ValidEmail/> */}
    </>
  )
}
export default App;