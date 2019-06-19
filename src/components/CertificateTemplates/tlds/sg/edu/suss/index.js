import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const SUSSCert = dynamic(() =>
  import("./2019-FT-Certificate" /* webpackChunkName: "SUSSTemplates" */)
);

const templates = {
  "2019-FT-Certificate": SUSSCert
};

export default addDirToTemplatePath("suss", templates);
