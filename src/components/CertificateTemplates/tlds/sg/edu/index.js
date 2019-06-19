/* eslint-disable camelcase */
/* because we need to use _ to replace hyphens in dns */
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

import ite from "./ite";
import np from "./np";
import nyp from "./nyp";
import singaporetech from "./singaporetech";
import suss from "./suss";
import tp from "./tp";

export default addDirToTemplatePath("edu", {
  ...ite,
  ...np,
  ...nyp,
  ...singaporetech,
  ...suss,
  ...tp
});
