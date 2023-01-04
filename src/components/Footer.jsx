const Footer = () => {
  return (
    <footer>
      {/* <div className=""> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFFF"
          fill-opacity="1"
          d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,138.7C672,181,768,235,864,250.7C960,267,1056,245,1152,197.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="d-flex justify-content-center align-items-center bg-info">
        <a href="">{/* <FontAwesomeIcon icon={faUpLong} size="2x" /> */}</a>
        <p className="text-dark bg-info fs-5">
          Made with love by William Gyamfi Kumi
        </p>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
