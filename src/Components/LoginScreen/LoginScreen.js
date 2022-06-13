import { Button } from "bootstrap"
import { Col, Container, Form, Row } from "react-bootstrap"

export const LoginScreen = () => {
    /*    
       const [values, setValues] = useState({
           email:'',
           password:''
       })
       
       const handleInputChange = (e) => {
           setValues({
               ...values,
               [e.target.name]: e.target.value
           })
       }
   
       const handleSubmit = (e) => {
           e.preventDefault()
           console.log(values)
       } */


    return (
        <Container className="vh-100">
            <Row>
                <Col sm={4} className="mx-auto">
                    <h3>Login</h3>
                    <form>
                        <input
                            type={'email'}

                            className="form-control" />

                        <input
                            type={'password'}
                            className="form-control" />
                        <Button> Login</Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}