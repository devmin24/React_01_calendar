import React from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import { Route, Switch, withRouter } from "react-router-dom";
import ListAdd from "./ListAdd";

const MyCalendar = (props) => {
  return (
    <div>
      <Title>내 달력</Title>
      <Line />
      <Route path="/" exact component={Calendar} />
      <Route path="/listadd" component={ListAdd} />
    </div>
  );
};

const Title = styled.h1`
  color: pink;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default withRouter(MyCalendar);
