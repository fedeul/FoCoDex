// import { memo } from "react";
import { getAnimals } from "../data/AnimalsDB";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimalsList from "./AnimalsList";
import $ from "jquery";

const AnimalsMenu = () => {
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState(true);
  const { animalId } = useParams();

  //   ++++ LLAMADA A LA DB ++++
  useEffect(() => {
    if (animalId) {
      setTimeout(() => {
        getAnimals
          .then((respuesta) => {
            setAnimal(
              respuesta.find(
                (animal) => parseInt(animal.id) === parseInt(animalId)
              )
            );
            setLoading(false);
          })
          .catch((error) => console.log(error));
      }, 200);
    } else {
      setTimeout(() => {
        getAnimals
          .then((respuesta) => {
            setAnimal(respuesta);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading());
      }, 500);
    }
  }, [animalId, animal]);

  return (
    <>
      <div className="col-lg-4 col-xl-3">
        {/* <!-- Toggle Navigation Button --> */}
        <button
          type="button"
          className="btn-nav btn text-primary font-size-lg btn-block d-lg-none mb-4"
          onClick={() => $("#navigation").toggleClass("d-none")}
        >
          <i className="las la-paw mr-1"></i> Animals
        </button>

        <div id="navigation" className="block d-none d-lg-block mr-lg-4">
          <div className="block-content">
            <div className="font-size-sm text-uppercase text-primary font-weight-bold mb-3">
              Animals
            </div>
            <ul className="nav-main mb-4">
              {loading ? (
                <div className="loading-wrap">
                  <div className="loading"></div>
                </div>
              ) : (
                <div className="mt-2 md:mt-6 px-10 grid grid-cols-3 gap-4">
                  <AnimalsList animal={animal} />
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalsMenu;
