import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addBoard,
  setBoard,
  setBoards,
  setOpenedList,
} from "../../BLL/Reducers/MainReducer";
import { getLists, getOpenedList } from "../../BLL/Selectors/mainSelector";
import { BoardType, ListType, TaskType } from "../../Types/Type";
import { Plus } from "../Bricks/Plus";
import { Header } from "./Header";
import { AddList } from "../MainPage/AddList";
import { BoardItem } from "../Bricks/BoardItem";
import { Bucket } from "../Bricks/Bucket";

type Props = {
  height: number;
  isPC: boolean;
};

export const ListPage = memo<Props>((props) => {
  const [currentCard, setCard] = useState<BoardType | null>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const lists = useSelector(getLists);
  const openedList = useSelector(getOpenedList);
  const [showBucket, setShowBucket] = useState(false);
  const [currentBoard, setCurrentBoard] = useState<null | BoardType>(null);
  const [currentTask, setCurrentTask] = useState<null | TaskType>(null);
  const dragStartHandlerTask = useCallback(
    (e: any, task: TaskType, board: BoardType) => {
      setCurrentTask(task);
      setCurrentBoard(board);
      setShowBucket(true);
    },
    []
  );
  const dragEndHandlerTask = useCallback((e: any) => {
    setShowBucket(false);
  }, []);
  const dragOverHandlerTask = useCallback((e: any) => {
    //@ts-ignore
    e.preventDefault();
  }, []);
  const dropHandlerTask = useCallback(
    (e: any, task: TaskType | null, board: BoardType | null) => {
      //@ts-ignore
      e.preventDefault();
      let oldBoard = currentBoard;
      //@ts-ignore
      oldBoard.tasks = currentBoard.tasks.filter(
        (o) => o.title !== currentTask?.title
      );
      //@ts-ignore
      dispatch(setBoard(oldBoard));
      if (board) {
        if (board.title !== currentBoard?.title && task) {
          let i1 = 0;
          board.tasks.forEach((t, index) => {
            if (t.title === task.title) {
              i1 = index;
            }
          });
          board.tasks.push({ title: "", description: "" });
          for (let i = board.tasks.length - 1; i > i1; i--) {
            let t = board.tasks[i];
            board.tasks[i] = board.tasks[i - 1];
            board.tasks[i - 1] = t;
          }
          board.tasks[i1] = currentTask as TaskType;
          dispatch(setBoard(board));
        } else if (task) {
          let i1 = 0;
          let i2 = 0;
          board.tasks.forEach((t, index) => {
            if (t.title === task.title) {
              i1 = index;
            }
            if (t.title === currentTask?.title) {
              i2 = index;
            }
          });
          let t = board.tasks[i1];
          board.tasks[i1] = board.tasks[i2];
          board.tasks[i2] = t;
          dispatch(setBoard(board));
        } else {
          board.tasks.push(currentTask as TaskType);
          dispatch(setBoard(board));
        }
      }
      setShowBucket(false);
    },
    [currentBoard, currentTask]
  );

  const dragStartHandler = useCallback((e: any, card: BoardType) => {
    setCard(card);
  }, []);
  const dragEndHandler = useCallback((e: any) => {
    e.target.style.background = "white";
  }, []);
  const dragOverHandler = useCallback((e: any) => {
    //@ts-ignore
    e.preventDefault();
    //@ts-ignore
    e.target.style.background = "lightgray";
  }, []);
  const dropHandler = useCallback(
    (e: any, card: BoardType) => {
      //@ts-ignore
      e.target.style.background = "white";
      e.preventDefault();
      let boards = openedList?.boards;
      let t = null as null | BoardType;
      let i1 = 0;
      let i2 = 0;
      boards?.forEach((b, index) => {
        if (b.title == currentCard?.title) {
          i1 = index;
        }
        if (b.title == card.title) {
          i2 = index;
        }
      });
      t = boards ? boards[i1] : null;
      //@ts-ignore
      boards[i1] = boards[i2];
      //@ts-ignore
      boards[i2] = t;
      //@ts-ignore
      dispatch(setBoards(boards));
    },
    [openedList, currentCard]
  );

  const [show, setShow] = useState(false);
  const closeHandler = useCallback(() => {
    setShow(false);
  }, []);
  const openHandler = useCallback(() => {
    setShow(true);
  }, []);

  const addBoardWithDispatch = useCallback((text: string) => {
    dispatch(addBoard(text));
  }, []);

  useEffect(() => {
    const url = new URL("https://wws/" + history.location.search);
    const listName = url.searchParams.get("title");
    let openList = null as null | ListType;
    lists.forEach((l) => {
      if (l.title === listName) {
        openList = l;
      }
    });
    if (openList) dispatch(setOpenedList(openList));
  }, [lists]);

  const boards = openedList?.boards.map((o, index) => {
    return (
      <BoardItem
        key={`board-${index}`}
        height={props.height}
        dragEndHandlerTask={dragEndHandlerTask}
        dragOverHandlerTask={dragOverHandlerTask}
        dragStartHandlerTask={dragStartHandlerTask}
        dropHandlerTask={dropHandlerTask}
        dragStartHandler={dragStartHandler}
        dragOverHandler={dragOverHandler}
        dragEndHandler={dragEndHandler}
        dropHandler={dropHandler}
        title={o.title}
        tasks={o.tasks}
      />
    );
  });
  return (
    <div
      style={{ height: props.height, overflowX: "scroll" }}
      className="bgListUI"
    >
      <Header
        isPC={props.isPC}
        title={openedList?.title ? openedList?.title : "Pricol"}
      />
      <div
        style={{
          marginTop: "4em",
          width: 375 * (boards ? boards.length : 0),
        }}
      >
        {boards}
      </div>
      <div className="text-center mt-4 prompt">
        {!boards?.length && "To create board tap +"}
      </div>
      <Plus isPC={props.isPC} function={openHandler} />
      <AddList
        show={show}
        closeHandler={closeHandler}
        addFunction={addBoardWithDispatch}
        title="board"
        borrowedGroup={openedList ? openedList.boards : []}
      />
      <Bucket
        show={showBucket}
        dropHandler={(e: any) => dropHandlerTask(e, null, null)}
        isPC={props.isPC}
        dragOverHandler={dragOverHandlerTask}
      />
      <div></div>
    </div>
  );
});
