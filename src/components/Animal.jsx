import { Link } from "react-router-dom";
import $ from "jquery";

const Animal = (props) => {
  const { animal } = props;
  const active = `#${animal.id}`;
  const switchActive = () => {
    $("li>a").removeClass("active");
    $(active).addClass("active");
    $("li>a").click(function () {
      window.location = "#";
    });
  };
  return (
    <li key={animal.id} className="nav-main-item ">
      <Link
        id={animal.id}
        to={`/animal/${animal.id}`}
        className="nav-main-link"
        onClick={() => switchActive()}
      >
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
