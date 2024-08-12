function ContactUs() {
  return(
      <>
      <div className="container">
          <div className="row d-flex justify-content-center py-5">
              <div className="col-12 col-md-6">
                  <form method="post" action="/contact-us">
                      <h2 className="mb-3">Contact Us</h2>
                      <div className="mb-3">
                          <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                          <input type="text" name="fullName" className="form-control" id="exampleInputName" aria-describedby="nameHelp" required />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" className="form-control" name="emailAddress" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                          <input type="tel" className="form-control" name="phoneNumber" id="exampleInputPhone" required />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="exampleInputMessage" className="form-label">Message:</label>
                          <textarea name="message" className="form-control" rows="4" id="exampleInputMessage" required></textarea>
                      </div>
                      <div className="mb-3 form-check">
                          <input type="checkbox" name="rememberMe" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                      </div>
                      <button type="submit" className="btn btn-primary me-2" style={{ borderRadius: '3px' }}>Submit</button>
                  </form>
              </div>
          </div>
      </div>
      </>
  );
}

export default ContactUs;