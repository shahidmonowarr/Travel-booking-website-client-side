import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../context/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand className="fs-3 fw-bold" href="#home">
            Travel Mate
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto text-light">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#packages-page">
                Packages
              </Nav.Link>

              <Nav.Link as={HashLink} to="/about">
                About Us
              </Nav.Link>

              {user?.email && (
                <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link className="text-dark fw-bold" as={Link} to="/addPackage">
                      Add Package
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link className="text-dark fw-bold" as={Link} to="/managePackages">
                      Manage Package
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link className="text-dark fw-bold" as={Link} to="/manageOrders">
                      Manage Orders
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    <Nav.Link className="text-dark fw-bold" as={Link} to="/myOrder">
                      My Order
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {/* {user?.email && (
                <Nav.Link as={Link} to="/addPackage">
                  Add Package
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link as={Link} to="/managePackages">
                  Manage Package
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link as={Link} to="/manageOrders">
                  Manage Orders
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link as={Link} to="/myOrder">
                  My Order
                </Nav.Link>
              )} */}
              {user?.email ? (
                <Button
                  onClick={logOut}
                  variant="light"
                  className="mx-3 bg-warning text-white"
                >
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text>
                User:{" "}
                <a style={{ textDecoration: "none" }} href="#login">
                  {" "}
                  {user?.displayName}
                </a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
