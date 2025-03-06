import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";

import { ReactComponent as screen1 } from "../../../assets/images/screen1.png";

const iconComponents = {
  screen1,
};

const Icons = (props) => {
  const { type, color, ...rest } = props;
  const IconComponent = iconComponents[type];
  const svgRef = useRef(null);

  if (!IconComponent) {
    console.warn(`Icon type ${type} not found`);
    return null;
  }

  return <IconComponent {...rest} ref={svgRef} />;
};

Icons.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Icons;
