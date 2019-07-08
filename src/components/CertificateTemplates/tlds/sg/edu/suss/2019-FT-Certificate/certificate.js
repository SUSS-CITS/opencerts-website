import PropTypes from "prop-types";
import { SUSS_LOGO, SEAL } from "../common/images";
import styles from "../common/customStyles";
import { formatDate, formatSplitText } from "../common/functions";

const Template = ({ certificate }) => (
  <div>
    {styles()}

    <div className="container certBgStyle">
      <div className="row d-flex justify-content-center">
        <img src={SUSS_LOGO} className="logoStyle" />
      </div>

      <div className="row d-flex justify-content-center">
        <span className="certTextStyle" style={{ marginTop: "150px" }}>
          This is to certify that
        </span>
      </div>

      <div className="row">&nbsp;</div>
      <div className="row d-flex justify-content-center">
        <span className="stuNameProgNameTextStyle">
          {formatSplitText(certificate.recipient.name)}
        </span>
      </div>

      <div className="row">&nbsp;</div>
      <div className="row d-flex justify-content-center">
        <span className="certTextStyle">
          having completed the requirements of the <br /> programme of study in
        </span>
      </div>

      <div className="row">&nbsp;</div>
      <div className="row d-flex justify-content-center">
        <span className="stuNameProgNameTextStyle">
          {formatSplitText(certificate.name)}
        </span>
      </div>

      <div className="row">&nbsp;</div>
      <div className="row d-flex justify-content-center">
        <span className="certTextStyle">was admitted to the Degree of</span>
      </div>

      <div className="row">&nbsp;</div>
      <div className="row d-flex justify-content-center">
        <span className="stuNameProgNameTextStyle">
          {formatSplitText(certificate.additionalData.degreeType)}
        </span>
      </div>

      <div className="row d-flex justify-content-center">
        <span className="degreeClassTextStyle">
          {formatSplitText(certificate.additionalData.degreeClass)}
        </span>
      </div>

      <div className="row d-flex justify-content-center">
        <span className="confDateTextStyle">
          {formatDate(certificate.attainmentDate)}
        </span>
      </div>

      <div
        className="row d-flex align-items-end"
        style={{ padding: "0px 94px 57px 94px" }}
      >
        <span className="col-md-3 text-center" style={{ padding: "0px" }}>
          <img
            src={certificate.additionalData.certSignatories[0].signature}
            className="signStyle"
          />{" "}
          <br />
          <span className="signTextStyle">
            {" "}
            {certificate.additionalData.certSignatories[0].position}{" "}
          </span>
        </span>

        <span className="col-md-3 text-center" style={{ padding: "0px" }}>
          <img
            src={certificate.additionalData.certSignatories[1].signature}
            className="signStyle"
          />{" "}
          <br />
          <span className="signTextStyle">
            {" "}
            {certificate.additionalData.certSignatories[1].position}{" "}
          </span>
        </span>

        <span className="col-md-6 text-right" style={{ padding: "0px" }}>
          <img src={SEAL} height="179px" width="179px" /> <br />
          <span className="certNoTextStyle">Certificate Number: &nbsp; </span>
          <span className="certNoTextStyle">{certificate.id}</span>
        </span>
      </div>
    </div>

    <div>
      <div className="container">
        <span className="printerNoTextStyle">
          {certificate.additionalData.printerNo}
        </span>
      </div>
    </div>
  </div>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default Template;
