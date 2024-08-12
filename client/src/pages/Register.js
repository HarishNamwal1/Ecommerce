import { NavLink } from "react-router-dom";

function Register() {
    return(
        <>
         <div className="container">
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-12 col-md-6">
                        <form method="post" action="/register">
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="username" className="col-form-label">Username:</label>
                                    <input type="text" className="form-control" name="username" id="username" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="col-form-label">Password:</label>
                                    <input type="password" className="form-control" name="password" id="password" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="avatar" className="col-form-label">Avatar:</label>
                                    <input type="file" className="form-control" name="avatar" id="avatar" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary me-2" ><NavLink to="/login" className="text-decoration-none text-light">Login</NavLink></button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</>
    );
}

export default Register;