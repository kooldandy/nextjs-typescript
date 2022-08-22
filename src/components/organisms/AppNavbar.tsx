import Image from "@components/atoms/Image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const AppNavbar = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [path, setPath] = useState(router.pathname);

  const sitePath = {
    home: "/",
    about: "/about",
    skills: "/skills",
    experience: "/experience",
  };

  const onSelectNav = (e) => {
    setExpanded(false);
  };

  const initialState = {
    homeActive: false,
    aboutActive: false,
    skillsActive: false,
    experienceActive: false,
  };

  const [state, updateState] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    initialState
  );

  useEffect(() => {
    updateState(initialState);
    if (path == sitePath.home) {
      updateState({homeActive: true });
    } else if (path == sitePath.about) {
      updateState({ aboutActive: true });
    } else if (path == sitePath.skills) {
      updateState({ skillsActive: true });
    } else if (path == sitePath.experience) {
      updateState({ experienceActive: true });
    }
  }, [path]);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      setPath(url);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar
        bg="dark"
        fixed="top"
        variant="dark"
        expand="lg"
        className=""
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid>
          {/* <Navbar.Brand className=""> */}
            {/* <Image src="/images/favicon_io/android-chrome-192x192.png" height={40} width={40} /> */}
          {/* </Navbar.Brand> */}
          <div className="navbar-icon">
          <Image src="/images/favicon_io/apple-touch-icon.png" height={40} width={40} />
          </div>
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
              <Nav className="justify-content-center flex-grow-1 ">
                <Nav.Link
                  onClick={onSelectNav}
                  className="fs-5 app-nav-link"
                  eventKey="/"
                  active={state.homeActive}
                >
                  <Link href="/">Home</Link>
                </Nav.Link>

                <Nav.Link
                  onClick={onSelectNav}
                  eventKey="about"
                  className="fs-5 app-nav-link"
                  active={state.aboutActive}
                >
                  <Link href="/about">About</Link>
                </Nav.Link>

                <Nav.Link
                  onClick={onSelectNav}
                  className="fs-5 app-nav-link"
                  eventKey="skills"
                  active={state.skillsActive}
                >
                  <Link href="/skills">Skills</Link>
                </Nav.Link>

                <Nav.Link
                  onClick={onSelectNav}
                  className="fs-5 app-nav-link"
                  eventKey="experience"
                  active={state.experienceActive}
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
