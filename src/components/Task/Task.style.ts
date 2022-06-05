import styled from "styled-components";

type Props = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: Props) => `
display: flex;
justify-content: space-between;
background-color: #7b2880;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
align-items: center;

div{
  display: flex;
  align-items: center;

}

input {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

label {
  color: #ccc;
  text-decoration: ${done ? "line-through" : "initial"}
}

span{
  cursor: pointer;
}
`
);
