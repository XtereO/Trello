import { Formik, useFormikContext } from "formik";
import { memo, useCallback, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  setBoards,
  setOpenedBoard,
} from "../../BLL/Reducers/MainReducer";
import { getOpenedList } from "../../BLL/Selectors/mainSelector";
import { BoardType, ListType, TaskType } from "../../Types/Type";
import { TaskItem } from "./TaskItem";

type Props = {
  title: string;
  tasks: TaskType[];
  height: number;
  dragStartHandler: (e: any, card: BoardType) => void;
  dragOverHandler: (e: any) => void;
  dragEndHandler: (e: any) => void;
  dropHandler: (e: any, card: BoardType) => void;
  dragStartHandlerTask: (e: any, task: TaskType, board: BoardType) => void;
  dragOverHandlerTask: (e: any) => void;
  dragEndHandlerTask: (e: any) => void;
  dropHandlerTask: (e: any, task: TaskType | null, board: BoardType) => void;
};

export const BoardItem = memo<Props>((props) => {
  const [show, setShow] = useState(false); //for modal
  const openedList = useSelector(getOpenedList);
  const onDelete = useCallback(() => {
    let updateList = {
      title: openedList ? openedList.title : "",
      boards: [],
    } as ListType;
    updateList.boards = openedList
      ? openedList.boards.filter((b) => b.title !== props.title)
      : [];
    dispatch(setBoards(updateList.boards));
    setShow(false);
  }, [openedList, props.title]);

  const [text, setText] = useState(""); //text which will be use for add task
  const [editMode, setMode] = useState(false); //switch between addTask
  const [myError, setError] = useState(""); // to show error add Task(simmiliary title)
  const dispatch = useDispatch();
  const addTaskUI = useCallback(() => {
    dispatch(setOpenedBoard({ title: props.title, tasks: props.tasks }));
    setError("");
    let check = true;
    props.tasks.forEach((t) => {
      if (t.title === text) {
        setError("This title have already exist");
        check = false;
      }
    });
    if (!text) check = false;
    if (check) {
      dispatch(addTask(text));
    }
    setText("");
    setMode(false);
  }, [props.title, props.tasks, text]);
  const tasks = useMemo(
    () =>
      props.tasks.map((t, index) => (
        <TaskItem
          key={`${props.title}-task-${index}`}
          dragEndHandler={props.dragEndHandlerTask}
          dragOverHandler={props.dragOverHandlerTask}
          dragStartHandler={props.dragStartHandlerTask}
          dropHandler={props.dropHandlerTask}
          title={t.title}
          board={{ title: props.title, tasks: props.tasks }}
          description={t.description}
        />
      )),
    [props]
  );

  return (
    <div className="bgBoardUI card">
      <div
        onDragStart={(e: any) =>
          props.dragStartHandler(e, { title: props.title, tasks: props.tasks })
        }
        onDragOver={(e: any) => props.dragOverHandler(e)}
        onDragEnd={(e: any) => props.dragEndHandler(e)}
        onDragLeave={(e: any) => props.dragEndHandler(e)}
        onDrop={(e: any) =>
          props.dropHandler(e, { title: props.title, tasks: props.tasks })
        }
        draggable={true}
        style={{ fontSize: "2em" }}
        className="card-header bg-white"
      >
        <div className="left">{props.title}</div>
        <div className="right">
          <button
            onClick={() => setShow(true)}
            className="btn btn-light bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
        </div>
      </div>
      {myError ? (
        <div className="ErrorLog text-danger">{myError}</div>
      ) : (
        <div> </div>
      )}
      <div
        className="card-body"
        style={{
          minHeight: "50px",
          maxHeight: props.height - 250,
          overflowY: "scroll",
        }}
        onDragOver={(e) => props.dragOverHandlerTask(e)}
        onDrop={
          tasks.length > 0
            ? () => {}
            : (e: any) =>
                props.dropHandlerTask(e, null, {
                  title: props.title,
                  tasks: [],
                })
        }
      >
        {tasks}
      </div>
      <button
        onClick={() => setMode(true)}
        disabled={editMode}
        style={{ outline: "none", border: "none" }}
        className="AddText mb-2"
      >
        {editMode ? (
          <form onSubmit={addTaskUI}>
            <div className="row">
              <div className="col-2">
                <button
                  type="reset"
                  onClick={() => {
                    setText("");
                    setError("");
                    setMode(false);
                  }}
                  className="EmtyButton text-danger"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <div className="col-8">
                <input
                  className="w-100"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid green",
                  }}
                  autoFocus={true}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  value={text}
                />
              </div>
              <div className="col-2">
                <button type="submit" className="EmtyButton text-success">
                  +
                </button>
              </div>
            </div>
          </form>
        ) : (
          "+ Add Task"
        )}
      </button>
      <Formik
        enableReinitialize
        initialValues={{ title: props.title }}
        onSubmit={(values) => {
          let updateList = {
            title: openedList ? openedList.title : "",
            boards: [],
          } as ListType;
          updateList.boards = openedList
            ? openedList.boards.map((b) => {
                if (b.title === props.title) {
                  return {
                    title: values.title,
                    tasks: props.tasks,
                  };
                }
                return b;
              })
            : [];
          dispatch(setBoards(updateList.boards));
          setShow(false);
        }}
        validate={(values) => {
          let errors = { title: "" };
          if (!values.title) {
            return { title: "Please enter title" };
          }
          openedList?.boards.forEach((b) => {
            if (b.title !== props.title && b.title === values.title) {
              errors.title = "This title have already exist";
            }
          });
          if (!errors.title) return {};
          else return errors;
        }}
      >
        {({ values, errors, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>Change board</Modal.Header>
              <Modal.Body>
                Title:
                <input
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  className="form-control"
                />
                {errors && <div className="text-danger">{errors.title}</div>}
              </Modal.Body>
              <Modal.Footer>
                <button onClick={onDelete} className="btn btn-danger">
                  Delete
                </button>
                <MyNaughtyButton />
              </Modal.Footer>
            </Modal>
          </form>
        )}
      </Formik>
    </div>
  );
});

const MyNaughtyButton = memo(() => {
  const { submitForm } = useFormikContext();
  return (
    <button onClick={submitForm} className="btn btn-success">
      Save
    </button>
  );
});
