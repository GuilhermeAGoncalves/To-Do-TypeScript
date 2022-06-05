import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #22211c;
  display: flex;
  border-radius: 15px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin: 20px;

  input,
  button {
    padding: 10px;
    outline: none;
    border: none;
    color: #fff;
    background: transparent;
    font-size: 18px;
  }

  input {
    flex: 1;
    border-right: 1px solid #22211c;
  }

  button {
    margin: 5px;
    cursor: pointer;
  }
`;
