import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./registerForm";

const Register = () => {
    return ( 
        <Container>
            <FormWrap>
                <RegisterForm/>
            </FormWrap>
        </Container>
     );
}
 
export default Register;