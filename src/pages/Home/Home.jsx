import { Container, NavItem, NavBox, Content } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <NavBox>
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to={"/tweets"}>Tweets</NavItem>
      </NavBox>
      <Content>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </Content>
    </Container>
  );
};

export default Home;
