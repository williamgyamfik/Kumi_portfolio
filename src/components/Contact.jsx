const Contacts = () => {
  return (
    <div className="container w-100 pt-5 mt-5">
      <div className="d-flex justify-content-center ">
        <div className="bg-light text-light d-flex flex-column align-items-center px-5 py-5 mx-5 my-5 rounded-5 contactBox">
          <h1 className="text-info fw-bold bg-light text-decoration-underline">
            Contact
          </h1>
          <p className="text-dark bg-light ">
            Feel free to contact me. I'd be exited to connect with you
          </p>
          <button className="btn btn-info">
            <u className="bg-info"> williamgyamfik@gmail.com</u>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
