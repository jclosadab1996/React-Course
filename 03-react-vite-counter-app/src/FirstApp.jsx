import React from "react";
import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Juan Camilo Bultaif",
  subtitle: "No hay subtítulo",
  title: "No hay título",
};
