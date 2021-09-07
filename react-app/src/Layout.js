import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";

export function Layout({ children }) {
  return (
    <LayoutStyles>
      <NavBar />
      <MainWithBackgroundImage>{children} </MainWithBackgroundImage>
      <Footer />
    </LayoutStyles>
  );
}
const NAVBAR_HEIGHT = 64;
// handles laying out 3 elements in a column, nav - main - div.footer
const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  nav {
    height: ${NAVBAR_HEIGHT}px;
  }
  .main-content {
    flex-grow: 1;
    min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
    height: fit-content;
    background-size: cover;
    background-attachment: fixed;
  }
`;
const BACKGROUND_IMAGES_PER_URL = {
  "/car-detailing": "https://www.holtsauto.com/simoniz/wp-content/uploads/sites/4/2017/09/Fotolia_90003660_S.jpg",
  "/appointments": "https://www.cooleydickinson.org/wp-content/uploads/2016/09/Appointment-Brand-Canvas-scaled.jpg",
  "/appointments/:id": "https://www.motortrend.com/uploads/sites/5/2021/06/011-fast-and-furious-ford-escort-rs1600.jpg",
  "/reviews/appointments/:id": "https://cdn.pocket-lint.com/r/s/970x/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg",
  "/reviews": "https://storage.googleapis.com/wordpress-www-vendasta/Top-14-Review-Sites-fb.jpg",
  "/home": "https://images.squarespace-cdn.com/content/v1/5a7fb700d74cffd8f02428bf/1549039763632-Z29HWK0B1MPUE3YUKNXC/What-is-Mobile-Detailing-min.png?format=750w",
  "/edit/:id":"https://blogs.constantcontact.com/wp-content/uploads/2021/01/Social-1-14.jpg"
};
/** handles background image per url */
function MainWithBackgroundImage({ children }) {
  const { pathname } = useLocation();
  const backgroundImageUrl = BACKGROUND_IMAGES_PER_URL[pathname];
  return (
    <main
      className="main-content"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {children}
    </main>
  );
}
