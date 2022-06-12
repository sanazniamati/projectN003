//library
import React, { useState, useRef } from "react";
import { Stage, Layer } from "react-konva";

//component
import Image from "./image/Image";
import ToolButton from "./Buttons/ToolButton";
import { handleOnWheel } from "./Methods/Scale";
import Overlay from "./Overlay";

//style
// import "./styles.css";

export default function App() {
  const [draggable, setDraggable] = useState(true);
  const [mode, setMode] = useState(null);
  const stageRef = useRef(null);

  return (
    <div className="container">
      <div className="buttons-container">
        <button
          className="tool-button"
          tabIndex="1"
          onClick={(e) => {
            setMode(null);
            setDraggable(true);
          }}
          // style={{ background: mode === null ? "#12aaff" : null }}
        >
          Moving & Editing
        </button>

        <ToolButton
          buttonMode="line"
          text="Curve"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="rect"
          text="Rectangle"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="ellipse"
          text="Ellipse"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="triangle"
          text="Triangle "
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="magnifier"
          text="Magnifier"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="segment"
          text="Segment"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="angle"
          text="Angle"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="freeLine"
          text="FreeLine"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        <ToolButton
          buttonMode="text"
          text="Text"
          setMode={setMode}
          setDraggable={setDraggable}
          mode={mode}
        />
        {mode === null ? null : (
          <div className="text-tooltip"> {`Active Tool: ${mode}`}</div>
        )}
      </div>
      <div
        id="stageWrapper"
        className="stage-wrapper"
        tabIndex="0"
        onKeyDown={(e) => {
          // if (e.keyCode === 46 || e.keyCode === 68) {
          //   console.log(`Selected line index: ${selectedShape.id}`);
          //   if (selectedShape.id !== null) {
          //     switch (selectedShape.type) {
          //       case "line":
          //         const localLine = [...lines];
          //         localLine.splice(selectedShape.id, 1);
          //         setLines(localLine);
          //         selectShape({ id: null, type: null });
          //         break;
          //       case "freeline":
          //         const localFreeLines = [...freeLines];
          //         localFreeLines.splice(selectedShape.id, 1);
          //         setFreeLines(localFreeLines);
          //         selectShape({ id: null, type: null });
          //         break;
          //       default:
          //         break;
          //     }
          //   }
          //   const stage = stageRef.current.getStage();
          //   stage.batchDraw();
          // } else if (e.keyCode === 27) {
          //   setLines([...lines, []]);
          // }
        }}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          ref={stageRef}
          draggable={draggable}
          // onWheel={handleOnWheel}
        >
          <Layer>
            <Image />
          </Layer>
          <Overlay
            stageRef={stageRef}
            draggable={draggable}
            setDraggable={setDraggable}
            mode={mode}
            setMode={setMode}
          />
        </Stage>
      </div>
    </div>
  );
}
