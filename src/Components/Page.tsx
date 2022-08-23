import { Button, Card } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";



export function Home() {
    const {user,logOut} = useUserAuth();

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error : any) {
            console.log(error.message);
            
        }
    }
    return(
        <div>
        <header className="masthead d-flex align-items-center">
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1">Welcome to your home page :</h1> <br />
                <h3 className="mb-5"><em>{user && user.email}</em></h3>
                <a className="btn btn-primary btn-xl" href="#about" onClick={handleLogout}>Logout</a>
            </div>
        </header>
        </div>
    )
}