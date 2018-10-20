import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const renderView = ({ style, ...props }) => {
  const viewStyle = {
    paddingRight: 15
  };
  return <div style={{ ...style, ...viewStyle }} {...props} />;
};

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: "#bfbfbf",
    borderRadius: "4px"
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

function ScrollbarsContainer(props) {
  return (
    <Scrollbars
      style={{ height: 440 }}
      renderView={renderView}
      renderThumbVertical={renderThumb}
      {...props}
    >
      {props.children}
    </Scrollbars>
  );
}

export default ScrollbarsContainer;
