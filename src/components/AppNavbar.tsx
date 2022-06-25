import Link from "next/link";
import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const onSelectNav = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        bg="dark"
        fixed="top"
        variant="dark"
        expand="lg"
        className="mb-3"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid>
          <Navbar.Brand href="#">Saurabh Ghosh</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-center flex-grow-1 "
                defaultActiveKey="/"
              >
                <Nav.Link
                  onClick={onSelectNav}
                  className="fs-5 app-nav-link"
                  eventKey="/"
                >
                  <Link href="/">Home</Link>
                </Nav.Link>

                <Nav.Link
                  onClick={onSelectNav}
                  eventKey="about"
                  className="fs-5 app-nav-link"
                >
                  <Link href="/about">About</Link>
                </Nav.Link>

                <Nav.Link
                  onClick={onSelectNav}
                  className="fs-5 app-nav-link"
                  eventKey="skills"
                >
                  <Link href="/skills">Skills</Link>
                </Nav.Link>

                <Nav.Link
                  onClick={onSelectNav}
                  className="fs-5 app-nav-link"
                  eventKey="experience"
                >
                  <Link href="/experience">Experience</Link>
                </Nav.Link>

                {/* <Nav.Link
                  onClick={onSelectNav}
                  className="fs-5 app-nav-link"
                  eventKey="users"
                >
                  <Link href="/users">Users List</Link>
                </Nav.Link> */}

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
