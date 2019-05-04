import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const ftdip = dynamic(() =>
  import("./ftdip" /* webpackChunkName: "TemasekPolytechnicTemplates" */)
);

const ftdipniec = dynamic(() =>
  import("./ftdipniec" /* webpackChunkName: "TemasekPolytechnicTemplates" */)
);

const ftdipplus = dynamic(() =>
  import("./ftdipplus" /* webpackChunkName: "TemasekPolytechnicTemplates" */)
);

const ftpfp = dynamic(() =>
  import("./ftpfp" /* webpackChunkName: "TemasekPolytechnicTemplates" */)
);

// keep it simple and stupid.
// we will have to add/configure new mapping every year.
// a bit tedious, but we have full control over which year use what template.
const templates = {
  "ftdip-1990": ftdip,
  "ftdip-1991": ftdip,
  "ftdip-1992": ftdip,
  "ftdip-1993": ftdip,
  "ftdip-1994": ftdip,
  "ftdip-1995": ftdip,
  "ftdip-1996": ftdip,
  "ftdip-1997": ftdip,
  "ftdip-1998": ftdip,
  "ftdip-1999": ftdip,
  "ftdip-2000": ftdip,
  "ftdip-2001": ftdip,
  "ftdip-2002": ftdip,
  "ftdip-2003": ftdip,
  "ftdip-2004": ftdip,
  "ftdip-2005": ftdip,
  "ftdip-2006": ftdip,
  "ftdip-2007": ftdip,
  "ftdip-2008": ftdip,
  "ftdip-2009": ftdip,
  "ftdip-2010": ftdip,
  "ftdip-2011": ftdip,
  "ftdip-2012": ftdip,
  "ftdip-2013": ftdip,
  "ftdip-2014": ftdip,
  "ftdip-2015": ftdip,
  "ftdip-2016": ftdip,
  "ftdip-2017": ftdip,
  "ftdip-2018": ftdip,
  "ftdip-2019": ftdip,
  "ftdip-2020": ftdip,
  "ftdip-2021": ftdip,
  "ftdip-2022": ftdip,
  "ftdip-2023": ftdip,
  "ftdip-2024": ftdip,
  "ftdip-2025": ftdip,
  "ftdip-2026": ftdip,
  "ftdip-2027": ftdip,
  "ftdip-2028": ftdip,
  "ftdip-2029": ftdip,

  "ftdipniec-2005": ftdipniec,
  "ftdipniec-2006": ftdipniec,
  "ftdipniec-2007": ftdipniec,
  "ftdipniec-2008": ftdipniec,
  "ftdipniec-2009": ftdipniec,
  "ftdipniec-2010": ftdipniec,
  "ftdipniec-2011": ftdipniec,
  "ftdipniec-2012": ftdipniec,
  "ftdipniec-2013": ftdipniec,
  "ftdipniec-2014": ftdipniec,
  "ftdipniec-2015": ftdipniec,
  "ftdipniec-2016": ftdipniec,
  "ftdipniec-2017": ftdipniec,
  "ftdipniec-2018": ftdipniec,
  "ftdipniec-2019": ftdipniec,
  "ftdipniec-2020": ftdipniec,
  "ftdipniec-2021": ftdipniec,
  "ftdipniec-2022": ftdipniec,
  "ftdipniec-2023": ftdipniec,
  "ftdipniec-2024": ftdipniec,
  "ftdipniec-2025": ftdipniec,
  "ftdipniec-2026": ftdipniec,
  "ftdipniec-2027": ftdipniec,
  "ftdipniec-2028": ftdipniec,
  "ftdipniec-2029": ftdipniec,

  "ftdipplus-2005": ftdipplus,
  "ftdipplus-2006": ftdipplus,
  "ftdipplus-2007": ftdipplus,
  "ftdipplus-2008": ftdipplus,
  "ftdipplus-2009": ftdipplus,
  "ftdipplus-2010": ftdipplus,
  "ftdipplus-2011": ftdipplus,
  "ftdipplus-2012": ftdipplus,
  "ftdipplus-2013": ftdipplus,
  "ftdipplus-2014": ftdipplus,
  "ftdipplus-2015": ftdipplus,
  "ftdipplus-2016": ftdipplus,
  "ftdipplus-2017": ftdipplus,
  "ftdipplus-2018": ftdipplus,
  "ftdipplus-2019": ftdipplus,
  "ftdipplus-2020": ftdipplus,
  "ftdipplus-2021": ftdipplus,
  "ftdipplus-2022": ftdipplus,
  "ftdipplus-2023": ftdipplus,
  "ftdipplus-2024": ftdipplus,
  "ftdipplus-2025": ftdipplus,
  "ftdipplus-2026": ftdipplus,
  "ftdipplus-2027": ftdipplus,
  "ftdipplus-2028": ftdipplus,
  "ftdipplus-2029": ftdipplus,

  "ftpfp-2013": ftpfp,
  "ftpfp-2014": ftpfp,
  "ftpfp-2015": ftpfp,
  "ftpfp-2016": ftpfp,
  "ftpfp-2017": ftpfp,
  "ftpfp-2018": ftpfp,
  "ftpfp-2019": ftpfp,
  "ftpfp-2020": ftpfp,
  "ftpfp-2021": ftpfp,
  "ftpfp-2022": ftpfp,
  "ftpfp-2023": ftpfp,
  "ftpfp-2024": ftpfp,
  "ftpfp-2025": ftpfp,
  "ftpfp-2026": ftpfp,
  "ftpfp-2027": ftpfp,
  "ftpfp-2028": ftpfp,
  "ftpfp-2029": ftpfp
};

export default addDirToTemplatePath("tp", templates);
