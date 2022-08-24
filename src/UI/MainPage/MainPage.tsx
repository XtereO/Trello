import React, { memo, useCallback, useState } from "react";
import { Plus } from "../Bricks/Plus";
import { Header } from "./Header";
import { AddList } from "./AddList";
import { addList } from "../../BLL/Reducers/MainReducer";
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../../BLL/Selectors/mainSelector";
import { ListItem } from "../Bricks/ListItem";
import { Toast } from "react-bootstrap";

type Props = {
  isPC: boolean;
  height: number;
};

export const MainPage = memo<Props>((props) => {
  const lists = useSelector(getLists);
  const listsJSX = lists.map((l, index) => (
    <ListItem key={index} title={l.title} />
  ));

  const dispatch = useDispatch();
  const addListWithDispatch = useCallback((text: string) => {
    dispatch(addList(text));
    setShowToast(true);
  }, []);

  const [showToast, setShowToast] = useState(false);

  const [show, setShow] = useState(false);
  const closeHandler = useCallback(() => {
    setShow(false);
  }, []);
  const openHandler = useCallback(() => {
    setShow(true);
  }, []);
  return (
    <div>
      <Header />
      <div className="container mt-4">{[...listsJSX].reverse()}</div>
      <div className="text-center prompt">
        {listsJSX.length == 0 && "To create list tap +"}
      </div>
      <Plus isPC={props.isPC} function={openHandler} />
      <AddList
        show={show}
        closeHandler={closeHandler}
        title={"list"}
        addFunction={addListWithDispatch}
        borrowedGroup={lists}
      />
      <div
        className="ml-4"
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: props.height - 400,
        }}
      >
        <Toast
          show={showToast}
          autohide
          onClose={() => setShowToast(false)}
          delay={3000}
        >
          <Toast.Header>
            <strong className="mr-auto">Notice</strong>
          </Toast.Header>
          <Toast.Body>New list added successfull</Toast.Body>
        </Toast>
      </div>
    </div>
  );
});
