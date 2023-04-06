import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Header,
  Container,
  NumberButton,
  ACButton,
  OperationButton,
  EqualButton,
  ButtonLabel,
  Grid,
  GridLine,
  MemoryText,
  InputText,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Header>
        <StatusBar style="auto"></StatusBar>
        <MemoryText>123</MemoryText>
        <InputText>456</InputText>
      </Header>
      <Grid>
        <GridLine>
          <ACButton>
            <ButtonLabel>AC</ButtonLabel>
          </ACButton>
          <OperationButton>
            <ButtonLabel>+/-</ButtonLabel>
          </OperationButton>
          <OperationButton>
            <ButtonLabel>%</ButtonLabel>
          </OperationButton>
          <OperationButton>
            <ButtonLabel>/</ButtonLabel>
          </OperationButton>
         
        </GridLine>

        <GridLine>
          <NumberButton>
            <ButtonLabel>7</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>8</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>9</ButtonLabel>
          </NumberButton>
          <OperationButton>
            <ButtonLabel>X</ButtonLabel>
          </OperationButton>
        </GridLine>
        <GridLine>
          <NumberButton>
            <ButtonLabel>4</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>5</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>6</ButtonLabel>
          </NumberButton>
          <OperationButton>
            <ButtonLabel>-</ButtonLabel>
          </OperationButton>
        </GridLine>
        <GridLine>
          <NumberButton>
            <ButtonLabel>1</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>2</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>3</ButtonLabel>
          </NumberButton>
          <OperationButton>
            <ButtonLabel>+</ButtonLabel>
          </OperationButton>
        </GridLine>

        <GridLine>
          <NumberButton>
            <ButtonLabel>.</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>0</ButtonLabel>
          </NumberButton>
          <NumberButton>
            <ButtonLabel>{"<"}</ButtonLabel>
          </NumberButton>
          <EqualButton>
            <ButtonLabel>=</ButtonLabel>
          </EqualButton>
        </GridLine>
      </Grid>
    </Container>
  );
}
