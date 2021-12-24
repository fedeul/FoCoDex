import { Link } from "react-router-dom";

const Animal = (props) => {
  const { animal } = props;
  return (
    <li key={animal.id} className="nav-main-item">
      <Link to={`/animal/${animal.id}`} className="nav-main-link ">
        <i></i>
        <img
          src={animal.icon}
          width={32}
          alt={animal.name}
          className="animal-icon"
        />
        <span className="nav-main-text text-capitalize">{animal.name}</span>
      </Link>
    </li>
  );
};

export default Animal;
