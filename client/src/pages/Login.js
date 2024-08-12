import { NavLink } from "react-router-dom";

function Login() {
    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-12 col-md-6">
                    <form method="post" action="/login">
                        <h2 className="mb-3">Login</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary me-2" style={{ borderRadius: '3px' }}>Submit</button>
                        <button type="button" className="btn btn-outline-primary me-2" style={{ borderRadius: '3px' }}><NavLink to="/register" className="text-decoration-none">Register</NavLink></button>
                        <button type="button" className="btn btn-outline-primary me-2" style={{ borderRadius: '3px' }}><NavLink to="/forget-password" className="text-decoration-none">Forget Password</NavLink></button>
                    </form>
                </div>
            </div>
        </div>
</>
    );
}

export default Login;