import React from "react";
import PageHOC from "../../hocs/Page";

function PageNotFound() {
  return <div>404</div>;
}

export default PageHOC(PageNotFound);
