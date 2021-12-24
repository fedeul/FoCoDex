import { memo } from "react";
import Animal from "./Animal";

const AnimalList = memo(({ animal }) => {
  return (
    <>
      {animal.map((animal) => (
        <Animal key={animal.id} animal={animal} />
      ))}
    </>
  );
});

export default AnimalList;
