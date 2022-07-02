import React from "react";
import styled from "styled-components";
import { PageHero } from "../webPagesComponents";
import aboutImg from "../../../assets/285693802_715304896468675_625792164962586105_n.png";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
          Here we present “DeviceNest”, which is an ecommerce platform for electronics products where customers can browse and easily purchase the electronic gadgets of their choices. This website enables users to shop online for the necessities within their price range. Customers have the choice to browse products on this platform without registering; they are not required to do so in order to viewing the products. But, users must register themselves then after and login, in order to place an order that will be sent to them after completing the required payment. “DeviceNest” enables us to learn more about the individuals we care about and the products they favor. You can rate the item and provide feedback so that other people can gain benefit from it. The main objective is to make our customers happy by offering high-quality goods at reasonable prices. This webpage was created with the intention of making shopping quick, easy, and available to everyone from anywhere.  
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
