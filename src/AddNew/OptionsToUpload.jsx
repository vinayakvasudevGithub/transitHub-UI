import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OptionsToUpload = () => {
  const navigate = useNavigate();

  const Results = (e) => {
    navigate(`/upload/upload${e}`);
  };
  return (
    <div>
      <div onClick={(e) => Results("/bus")}>bus</div>
      <div onClick={(e) => Results("/flight")}>flight</div>
      <div onClick={(e) => Results("/train")}>train</div>
    </div>
  );
};

export default OptionsToUpload;
