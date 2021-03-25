import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Modal from "./Modal";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { loadTodo } from "./redux/modules/todo";

const Calendar = (props) => {
  // const today = useSelector((state) => state.todo.today);
  // 기본값 가져오는 친구
  const todo_list = useSelector((state) => state.todo.list);
  console.log(todo_list);
  const dispatch = useDispatch();

  // useEffect는 didMount와 같이 로드 시 초기값 발생하는 것
  useEffect(() => {
    dispatch(loadTodo());
  }, []);

  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Outer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={todo_list}
        // 모달만들기
        eventClick={openModal}
        locale={"ko"}
      />
      <Modal open={modalOpen} close={closeModal} header="일정 상세보기"></Modal>
      <div style={{ position: "relative" }}>
        <button
          style={{
            background: "#ffc0cb",
            border: "1px solid pink",
            borderRadius: "10px",
            float: "right",
            padding: "5px",
            margin: "5px",
            display: "flex",
            flex_direction: "row",
          }}
        >
          완료된 일정 보기
        </button>
        <Button>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => {
              props.history.push("/listadd");
            }}
          >
            <AddIcon />
          </Fab>
        </Button>
      </div>
    </Outer>
  );
};

const Outer = styled.div`
  max-width: 500px;
  height: 70vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.div`
  margin: 5px 2px;
  float: right;
  display: flex;
  flex_direction: row;
`;

export default Calendar;
