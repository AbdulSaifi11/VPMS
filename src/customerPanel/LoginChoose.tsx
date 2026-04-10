import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterLinkcss.css';
export default function LoginChoose(){
    return(
        <>
        <div className="contain d-flex justify-content-around" style={{width:"100vw"}}>
            <Card className="card">
                <h4>Login</h4>
                <p>as</p>
                <Link to="/login" id="link">Customer</Link>
            </Card>
           <Card className="card">
                <h4>Login</h4>
                <p>as</p>
                <Link to="/login" id="link">Valet</Link>
            </Card>
            <Card className="card">
                <h4>Login</h4>
                <p>as</p>
                <Link to="/login" id="link">Admin</Link>
            </Card>
        </div>
        </>
    )
}