import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyleWrapper>
      <div className="step-1 steps">
        <h3>1st Step</h3>
      </div>
      <div className="step-2 steps">
        <h3>2nd Step</h3>
      </div>
      <div className="step-3 steps">
        <h3>3rd Step</h3>
      </div>
      <div className="step-4 steps">
        <h3>4th Step</h3>
      </div>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.header`
  background-color: bisque;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .steps {
    background-color: blueviolet;
  }
`;

export default Header;
