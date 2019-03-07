import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const SORGCEABEFORE2002 = dynamic(() =>
  import("./SOR_GCEA_before_2002" /* webpackChunkName: "SEABTemplates" */)
);
const SORGCEA20022005 = dynamic(() =>
  import("./SOR_GCEA_2002_2005" /* webpackChunkName: "SEABTemplates" */)
);
const SORGCEAA2 = dynamic(() =>
  import("./SOR_GCEA_2006_OldSyll" /* webpackChunkName: "SEABTemplates" */)
);
const SORGCEAA3 = dynamic(() =>
  import("./SOR_GCEA_2006_NewSyll" /* webpackChunkName: "SEABTemplates" */)
);
const SORGCEO = dynamic(() =>
  import("./SOR_GCEO" /* webpackChunkName: "SEABTemplates" */)
);
const SORGCEN = dynamic(() =>
  import("./SOR_GCEN_before_2008" /* webpackChunkName: "SEABTemplates" */)
);
const SORGCENNA = dynamic(() =>
  import("./SOR_GCEN_NA_2008" /* webpackChunkName: "SEABTemplates" */)
);
const SORGCENNT = dynamic(() =>
  import("./SOR_GCEN_NT_2008" /* webpackChunkName: "SEABTemplates" */)
);
const SORPSLEBEFORE1979 = dynamic(() =>
  import("./SOR_PSLE_before_1979" /* webpackChunkName: "SEABTemplates" */)
);
const SORPSLE19801981 = dynamic(() =>
  import("./SOR_PSLE_1980_1981" /* webpackChunkName: "SEABTemplates" */)
);
const SORPSLE19821992 = dynamic(() =>
  import("./SOR_PSLE_1982_1992" /* webpackChunkName: "SEABTemplates" */)
);
const SORPSLE19932012 = dynamic(() =>
  import("./SOR_PSLE_1993_2012" /* webpackChunkName: "SEABTemplates" */)
);
const SORPSLE2013 = dynamic(() =>
  import("./SOR_PSLE_2013" /* webpackChunkName: "SEABTemplates" */)
);

const templates = {
  "SOR_GCEA_before_2002": SORGCEABEFORE2002,
  "SOR_GCEA_2002_2005": SORGCEA20022005,
  "SOR_GCEA_2006_OldSyll": SORGCEAA2,
  "SOR_GCEA_2006_NewSyll": SORGCEAA3,
  "SOR_GCEO": SORGCEO,
  "SOR_GCEN_before_2008": SORGCEN,
  "SOR_GCEN_NA_2008": SORGCENNA,
  "SOR_GCEN_NT_2008": SORGCENNT,
  "SOR_PSLE_before_1979": SORPSLEBEFORE1979,
  "SOR_PSLE_1980_1981": SORPSLE19801981,
  "SOR_PSLE_1982_1992": SORPSLE19821992,
  "SOR_PSLE_1993_2012": SORPSLE19932012,
  "SOR_PSLE_2013": SORPSLE2013
};

export default addDirToTemplatePath("seab", templates);
