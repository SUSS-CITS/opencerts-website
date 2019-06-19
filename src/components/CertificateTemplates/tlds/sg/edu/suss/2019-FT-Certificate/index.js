import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import Certificate from "./certificate";
import ApprovedAddresses from "../common/ApprovedAddresses";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: Certificate
  }
];

const sussFT = () => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={ApprovedAddresses}
  />
);

export default sussFT;
