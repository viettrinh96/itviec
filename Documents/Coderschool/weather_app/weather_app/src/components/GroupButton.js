import React from "react";
import { Button } from "react-bootstrap";

export const GroupButton = ({ countryName, onClick }) => {
  return (
    <Button
      className="change-button"
      onClick={() => {
        onClick(countryName);
      }}
    >
      {countryName}
    </Button>
  );
};
