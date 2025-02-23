import { Suspense, useEffect } from "react";

const LoadableLoader = () => {
  return (
    <div id="global-loader">
      <div className="page-loader"></div>
    </div>
  );
};

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<LoadableLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
