import React from "react";

export default function ToolButton({
  buttonMode,
  mode,
  setMode,
  text,
  setDraggable,
  // selectShape,
  // extended,
  // closed,
  // setClosed,
}) {
  return (
    <button
      className="tool-button"
      tabIndex="1"
      onClick={(e) => {
        //selectShape({ id: null, type: null });
        if (mode === buttonMode) {
          setMode(null);
          setDraggable(true);
        } else {
          setMode(buttonMode);
          setDraggable(false);
        }
      }}
      // style={{ background: mode === buttonMode ? "#12aaff" : null }}
    >
      {text}
      {/*sn*/}
      {/*{extended ? (*/}
      {/*  <button*/}
      {/*    onClick={(e) => {*/}
      {/*      e.stopPropagation();*/}
      {/*      setClosed(!closed);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {closed ? "Открыть" : "Закрыть"}*/}
      {/*  </button>*/}
      {/*) : null}*/}
    </button>
  );
}
