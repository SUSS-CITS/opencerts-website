import { connect } from "react-redux";
import Head from "next/head";

const helloPage = () => (
  <div>
    <Head>
      <title>OpenCerts - HelloWorld</title>
    </Head>
    HelloWorld
  </div>
);

export default connect()(helloPage);
