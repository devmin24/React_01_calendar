import moment from "moment";
// 액션
const LOAD = "todo/LOAD";
const ADD = "todo/ADD";
// 기본값
const initialState = {
  //   list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
  list: [{ title: "영화관 가기", date: "2021-03-20" }],
};

export const loadTodo = (todo) => {
  return { type: LOAD, todo };
};

export const addTodo = (todo) => {
  return { type: ADD, todo };
};

// 리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case "todo/LOAD": {
      console.log(state);
      return state;
    }

    case "todo/ADD": {
      console.log(action);
      // 기초값 리스트에 action.todo(새로입력한값) 추가
      const new_todo_list = [...state.list, action.todo];
      console.log(new_todo_list);
      return { list: new_todo_list };
    }

    default:
      return state;
  }
}
