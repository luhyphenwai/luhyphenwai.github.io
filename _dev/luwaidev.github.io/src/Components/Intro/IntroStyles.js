import styled from "styled-components";

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  width: 50%;
  height: 80%;
`;
export const LeftSection = styled.div`
  /* display: inline; */
  float: right;
  width: 80%;
  height: 80%;
  margin-top: 15vh;
`;

export const RightSection = styled.div`
  /* display: inline; */
  float: left;

  width: 80%;
  height: 80%;
  margin-top: 15vh;
`;

export const Title = styled.h1`
  font-family: "Source Code Pro", monospace;
  font-size: 5vw;
`;
export const SubTitle = styled.h2`
  font-family: "Source Code Pro", monospace;
  font-size: 3vw;
`;

export const Text = styled.p`
  font-family: "Source Code Pro", monospace;
  font-size: 2vw;
`;

export const ImageContainer = styled.div`
  background-color: #f7ecde;
  border: 10px solid #54bab9;

  width: 80%;
  box-shadow: 1vw 2vh 5px grey;
`;

export const Image = styled.img`
  width: 100%;
`;
