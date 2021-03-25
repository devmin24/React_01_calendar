import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Container } from "@material-ui/core";
import { isPropsValid } from "@fullcalendar/common";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/modules/todo";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "500px",
    minHeight: "50vh",
    height: "60vh",
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "1px solid #ddd",
    alignItems: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function ListAdd(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const contents = React.useRef(null);
  const datetime = React.useRef(null);

  const writeTodo = () => {
    // 콘솔로 내가 선택한 데이터가 잘 왔나 확인해볼까요? :)
    console.log(contents.current.value);
    console.log(datetime.current.value);

    // 내용 없으면 경고!
    if (contents.current.value === "") {
      window.alert("내용을 입력해주세요!");
      return;
    }

    // 일시 없으면 경고!
    if (datetime.current.value === "") {
      window.alert("날짜를 입력해주세요!");
      return;
    }
    let _new_todo = {
      title: contents.current.value,
      date: moment(datetime.current.value).format("YYYY-MM-DD"), // 우리 데이터 형식대로 맞춰줍니다.
    };
    // 주석을 풀고 데이터를 확인해봐요!
    console.log(_new_todo);

    // 리덕스에 넣자!
    dispatch(addTodo(_new_todo));
    // 추가로 하나만 더! 일정을 추가했으면 원래 페이지로 돌아가야죠! replace 사용해봅시다!
    props.history.replace("/");
  };

  return (
    <Container fixed maxWidth="xs" className={classes.container} noValidate>
      <h2>새로운 일정 추가</h2>

      {/* <TextField
        id="date"
        label="날짜 선택"
        type="date"
        defaultValue="2021-01-01"
        className={classes.textField}
        ref={datetime}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
      <h3>날짜 선택</h3>
      <input type="datetime-local" ref={datetime} />

      <div>
        <p
          style={{
            margin: "20px 10px 10px -1px",
            color: "gray",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          새로운 일정 내용
        </p>

        <input
          style={{
            padding: "10px 50px 10px 10px",
            backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
          type="text"
          ref={contents}
          placeholder="내용을 입력해주세요."
        ></input>
      </div>

      <div
        style={{
          dlsplay: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          style={{
            margin: "20px 20px 0px 0px",
            padding: "7px",
            backgroundColor: "pink",
            border: "1px solid pink",
            borderRadius: "5px",
          }}
          onClick={writeTodo}
        >
          작성 완료
        </button>
        <button
          style={{
            margin: "20px auto",
            padding: "7px",
            backgroundColor: "pink",
            border: "1px solid pink",
            borderRadius: "5px",
          }}
        >
          작성 취소
        </button>
      </div>
    </Container>
  );
}

// const Input = styled.input`
// padding: 10px 50px 10px 10px;
// backgroundColor:"white;
// border: 1px solid gray;
// borderRadius: 10px;
// `;
