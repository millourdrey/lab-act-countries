import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      {/* Keep the rest of your existing content */}

      <Link to="/countries" className="btn btn-primary">
        Browse Countries
      </Link>
    </div>
  );
};

export default HomePage;