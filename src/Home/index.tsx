import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
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
  InputLine,
  OperationText,
} from "./styles";

export default function Home() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState("0");
  const [operation, setOperation] = useState("");

  function resetDisplay() {
    setDisplay("0");
    setMemory("0");
    setOperation("");
  }

  function operationClick(value: string) {
    if (memory === "0") {
      setOperation(value);
      setMemory(display);
      setDisplay("0");
    }
  }

  function positiveNegativeClick() {
    if (display.includes("-")) {
      let displayValue = display.replace("-", "");
      setDisplay(displayValue);
    } else {
      setDisplay("-" + display);
    }
  }

  function equalClick() {
    let displayNumber: number = +display;
    let memoryNumber: number = +memory;

    if (operation === "") {
    } else {
      let result: number = 0;
      if (operation === "+") {
        result = displayNumber + memoryNumber;
      } else if (operation === "-") {
        result = displayNumber - memoryNumber;
      } else if (operation === "X") {
        result = displayNumber * memoryNumber;
      } else if (operation === "/") {
        result = memoryNumber / displayNumber;
      } else if (operation === "%") {
        result = (memoryNumber/100) * displayNumber;
      }
      setDisplay(result.toString());
      setMemory("0");
      setOperation("");
    }
  }

  function numberClick(value: string) {
    if (value === ".") {
      if (!display.includes(".")) {
        setDisplay(display + value);
      }
    } else {
      if (display === "0") {
        setDisplay(value);
      } else if (display === "-0") {
        setDisplay("-" + value);
      } else {
        setDisplay(display + value);
      }
    }
  }

  function deleteClick() {
    let newDisplay = display.slice(0, -1);
    if (newDisplay === "") {
      newDisplay = "0";
    } else if (newDisplay === "-") {
      if (display === "-0") {
        newDisplay = "0";
      } else {
        newDisplay = "-0";
      }
    }
    setDisplay(newDisplay);
  }
  return (
    <Container>
      <Header>
        <StatusBar style="auto"></StatusBar>
        <MemoryText>{memory === "0" ? "" : memory}</MemoryText>
        <InputLine>
          <OperationText>{operation}</OperationText>
          <InputText>{display}</InputText>
        </InputLine>
      </Header>
      <Grid>
        <GridLine>
          <ACButton onPress={resetDisplay}>
            <ButtonLabel>AC</ButtonLabel>
          </ACButton>
          <OperationButton onPress={positiveNegativeClick}>
            <ButtonLabel>+/-</ButtonLabel>
          </OperationButton>
          <OperationButton onPress={() => operationClick("%")}>
            <ButtonLabel>%</ButtonLabel>
          </OperationButton>
          <OperationButton onPress={() => operationClick("/")}>
            <ButtonLabel>/</ButtonLabel>
          </OperationButton>
        </GridLine>

        <GridLine>
          <NumberButton onPress={() => numberClick("7")}>
            <ButtonLabel>7</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={() => numberClick("8")}>
            <ButtonLabel>8</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={() => numberClick("9")}>
            <ButtonLabel>9</ButtonLabel>
          </NumberButton>
          <OperationButton onPress={() => operationClick("X")}>
            <ButtonLabel>X</ButtonLabel>
          </OperationButton>
        </GridLine>
        <GridLine>
          <NumberButton onPress={() => numberClick("4")}>
            <ButtonLabel>4</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={() => numberClick("5")}>
            <ButtonLabel>5</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={() => numberClick("6")}>
            <ButtonLabel>6</ButtonLabel>
          </NumberButton>
          <OperationButton onPress={() => operationClick("-")}>
            <ButtonLabel>-</ButtonLabel>
          </OperationButton>
        </GridLine>
        <GridLine>
          <NumberButton onPress={() => numberClick("1")}>
            <ButtonLabel>1</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={() => numberClick("2")}>
            <ButtonLabel>2</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={() => numberClick("3")}>
            <ButtonLabel>3</ButtonLabel>
          </NumberButton>
          <OperationButton onPress={() => operationClick("+")}>
            <ButtonLabel>+</ButtonLabel>
          </OperationButton>
        </GridLine>

        <GridLine>
          <NumberButton onPress={() => numberClick(".")}>
            <ButtonLabel>.</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={() => numberClick("0")}>
            <ButtonLabel>0</ButtonLabel>
          </NumberButton>
          <NumberButton onPress={deleteClick}>
            <ButtonLabel>{"<-"}</ButtonLabel>
          </NumberButton>
          <EqualButton onPress={equalClick}>
            <ButtonLabel>=</ButtonLabel>
          </EqualButton>
        </GridLine>
      </Grid>
    </Container>
  );
}
