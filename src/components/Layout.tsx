import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({ children }: any) => {
  return (
    <Container>
      <Sidebar />
      <div className="main">
        <Header />
        {children}
      </div>
    </Container>
  );
};

const Container = styled.main`
  height: 100vh;
  display: flex;
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default Layout;
