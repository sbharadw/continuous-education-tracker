import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";
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


const { user } = useAuth0();
const {picture, email, sub } = user;

const id = sub

  //Autopopulates fields and uses the existence of a res file to tell weather or not user info has previously be submitted
    useEffect(() => {
      API.getUsers()
        .then(res => {
          console.log("GOT IT!!!!!!!!!!!!!!!!!!!")
          const allUsers = res.data
          console.log(allUsers)
          totalUserTotalHours(allUsers)
          return function cleanup() {
            API.getUsers()
        }

        })
        .catch(err => console.log(err));
    }, [])


    //set initial state for piechart
  const [pieChart, setPieChart] = useState({
    totalhours: "",
    totalburnhours: "",
    other: "",
  })


  function tohours(item){
    return item.totalhours;
    }

  function bhours(item){
      return item.totalburnhours;
      }

  function sum(prev, next){
      return prev + next;
      }


function totalUserTotalHours(allUsers) {

let total_totalhours = allUsers.map(tohours).reduce(sum);
let total_totalburnhours = allUsers.map(bhours).reduce(sum);

setPieChart({
  totalhours: total_totalhours,
  totalburnhours: total_totalburnhours,
  })

}

let other = pieChart.totalhours - pieChart.totalburnhours;


console.log(`This is piechart info!!!!!!!######*******!!!!!!`)
console.log(pieChart)


  return (
    <>
      <Container fluid>
        <Row>


          <Col md="4">
          <Card>
              <Card.Header>
                <Card.Title as="h4">Total Hours</Card.Title>
                <p className="card-category">for All Nurses</p>

              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph
                    data={{
                      labels: [`${pieChart.totalhours} hrs`],
                      series: [pieChart.totalhours],
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
                  <i className="fas fa-circle text-info"></i>
                  Total Hours 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Burn Hours</Card.Title>
                <p className="card-category">for All Nurses</p>

              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: [`${pieChart.totalburnhours} hrs`, `${other} hrs`],
                      series: [pieChart.totalburnhours, other],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Others <i className="fas fa-circle text-danger"></i>
                  Total Burn Hours
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
          <Card>
              <Card.Header>
                <Card.Title as="h4">Assigned vs Remaining Hours</Card.Title>
                <p className="card-category">for All Nurses</p>

              </Card.Header>
              <Card.Body>
                <div
                  className="ct-slice-donut"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: [`50%`, `40%`],
                      series: [50, 40],
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
                  Assigned<i className="fas fa-circle text-danger"></i>
                  Remaining
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
