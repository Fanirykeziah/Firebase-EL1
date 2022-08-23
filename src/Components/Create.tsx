import Background from '../background/sanstitre.png';
import { Link,useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { Alert } from 'react-bootstrap';

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email , password) ;
            navigate("/");
        } catch (error : any) {
            setError(error.message)
        }
    }

    const handlefacebook = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setError("");
      try {
          await FacebookOut(email , password) ;
          navigate("/");
      } catch (error : any) {
          setError(error.message)
      }
  }

  const handlegit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    try {
        await GitOut(email , password) ;
        navigate("/");
    } catch (error : any) {
        setError(error.message)
    }
}

const handleGoogleSignUp = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  setError("");
  try {
      await googleSignIn(email , password) ;
      navigate("/");
  } catch (error : any) {
      setError(error.message)
  }
}

    const {signUp , GitOut , FacebookOut , googleSignIn} = useUserAuth();
    return (
        <>
        <section className="text-center" style={{backgroundColor : "#051C24"}}>
          <div className="p-5 bg-image" style={{
                backgroundImage: `url(${Background})`,
                height: "300px"
                }}></div>
        
          <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                marginTop: "-100px",
                background: "hsla(0, 0%, 100%, 0.8)",
                backdropFilter: "blur(30px)",
                transform : "translateY(-25%)"
                }}>
            <div className="card-body py-5 px-md-5" style={{border : "1px solid  #ecb322"}}>
        
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Welcome Administrator</h2>
                  <p>Don't have an account :</p>
                  <h3>Sign Up </h3>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" 
                       name="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>
        
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" 
                      name="password" 
                      className="form-control" placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4"> Password</label>
                    </div>
        
                    <button type="submit" className="btn btn-dark btn-block mb-4 text-color-light">
                      Sign up
                    </button>
        
                    <div className="text-center">
                    <p>Already have an account ? <Link to="/">Login</Link> </p>
                      <p>or sign up with:</p>
                      <a className="btn btn-primary btn-lg btn-block" 
              style={{backgroundColor: "white", color: "black",border :"1px solid green",marginLeft:"10px" }}
                role="button"
                onClick={handleGoogleSignUp}
                >
                <i className="fab fa-google-f me-2"></i>Google
              </a>

              <a className="btn btn-primary btn-lg btn-block" 
              style={{backgroundColor: "black", color: "white",border :"1px solid green",marginLeft:"10px" }}
                role="button"
                onClick={handlegit}
                >
                <i className="fab fa-google-f me-2"></i>Github
              </a>

              <a className="btn btn-primary btn-lg btn-block" 
              style={{backgroundColor: " #3b5998", color: "white",border :"1px solid green",marginLeft:"10px" }}
                role="button"
                onClick={handlefacebook}
                >
                <i className="fab fa-google-f me-2"></i>facebook
              </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
                </>
    )
}