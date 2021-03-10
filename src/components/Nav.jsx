import {
    Container,
    Menu
} from 'semantic-ui-react';

const Nav = () => {
    return (
        <>
    <Container>
      <Menu stackable>
        <Menu.Item>
          <img src='http://clipart-library.com/newimages/computer-clip-art-25.png' width='200px' alt='logo' />
        </Menu.Item>
        <Menu.Item>Shop</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
        <Menu.Item>Sign-in</Menu.Item>
      </Menu>
    </Container>
    </>
      );
}
 
export default Nav;