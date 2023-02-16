import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet={"utf-8"} />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
