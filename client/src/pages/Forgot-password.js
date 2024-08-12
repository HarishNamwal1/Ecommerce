import { NavLink } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-12 col-md-6">
          <form method="post" action="/forget-password">
            <h2 className="mb-3">Forget Password</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary me-2" style={{ borderRadius: '3px' }}>Submit</button>
            <button type="button" className="btn btn-outline-primary me-2" style={{ borderRadius: '3px' }}><NavLink to="/login" className="text-decoration-none">Login</NavLink></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;