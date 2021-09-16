import React from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [result, setResult] = React.useState([]);
  React.useEffect(() => {
    getData();
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const getData = async () => {
    const response = await fetch("https://morning-lowlands-58589.herokuapp.com/api/fiscalia");
    const data = await response.json();
    console.log("Regreso la data");
    setResult(data);
  }

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">¿BUSCAS ALGUNA FISCALIA?</h2>
                <h5 className="description">
                  Aqui encontrarás la información actualizada
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>

            <table className="table table-striped">
          <thead className="table thead-light">
            <tr>
              <th>Código Fiscalia</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody className="table-striped">
            {
              result.map((fisc, i)=> {
                return (
                  <tr key={i}>
                    <td>{fisc.id}</td>
                    <td style={{ fontWeight: "bold" }}>{fisc.FISCALIA}</td>
                    <td>{fisc.DIRECCION}</td>
                    <td>{fisc.TELEFONO}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


          </Container>
        </div>
        <div className="section section-team text-center">
        </div>
        <div className="section section-contact-us text-center">
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
