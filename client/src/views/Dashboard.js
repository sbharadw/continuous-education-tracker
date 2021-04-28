import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
          <Card>
              <Card.Header>
                <Card.Title as="h4">Trauma Hours</Card.Title>
                <p className="card-category">for All Nurses</p>

              </Card.Header>
              <Card.Body>
                <div
                  className="ct-slice-donut"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["15%", "25%" , "40%", "20%"],
                      series: [15, 25, 40, 20],
                    }}
            
                    type="Pie"
                    options={{
                      donut: true,
                      donutWidth: 60,
                      donutSolid: true,
                      startAngle: 270,
                      showLabel: true
                    }}
                  
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Total Hours <i className="fas fa-circle text-success"></i>
                  Total Burn Hours
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
          <Card>
              <Card.Header>
                <Card.Title as="h4">Trauma Hours</Card.Title>
                <p className="card-category">for All Nurses</p>

              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph
                    data={{
                      labels: ["60%", "20%","20%"],
                      series: [60,20,20],
                    }}
                    type="Pie"
                    options={{
                      donut: true,
                      donutWidth: 60,
                      donutSolid: true,
                      startAngle: 270,
                      total: 200,
                      showLabel: true
                    }}
                  
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-primary"></i>
                  Total Hours <i className="fas fa-circle text-warning"></i>
                  Total Burn Hours
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Trauma Hours</Card.Title>
                <p className="card-category">for All Nurses</p>

              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["80%", "20%"],
                      series: [80, 20],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Total Hours <i className="fas fa-circle text-danger"></i>
                  Total Burn Hours
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Yearly Hours</Card.Title>
                <p className="card-category">All hours including Burn</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          895,
                        ],
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          695,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Trauma  <i className="fas fa-circle text-danger"></i>
                  Burn
                </div>
              </Card.Footer>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
