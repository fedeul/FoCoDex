import { getAnimals } from "../data/AnimalsDB";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimalInfo from "./AnimalInfo";
import LoadingInfo from "./LoadingInfo";

const ContainerInfo = () => {
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState(true);
  const { animalId } = useParams();

  //   ++++ CALL TO DB ++++
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
      }, 2000);
    } else {
      setTimeout(() => {
        getAnimals
          .then((respuesta) => {
            setAnimal(respuesta);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 2000);
    }
  }, [animalId, animal]);

  return (
    <div className="col-lg-8 col-xl-9">
      {loading ? (
        <LoadingInfo animal={animal} />
      ) : (
        <AnimalInfo animal={animal} />
      )}
    </div>
  );
};

export default ContainerInfo;
