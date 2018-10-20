import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import MediaQuery from "react-responsive";

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
    <>
      <MediaQuery query="(min-width: 961px)">
        <Scrollbars
          style={{ height: 440 }}
          renderView={renderView}
          renderThumbVertical={renderThumb}
          {...props}
        >
          {props.children}
        </Scrollbars>
      </MediaQuery>
      <MediaQuery query="(max-width: 960px)">
        <div {...props}>{props.children}</div>
      </MediaQuery>
    </>
  );
}

export default ScrollbarsContainer;
