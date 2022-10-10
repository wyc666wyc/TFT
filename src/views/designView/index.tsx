import Draggable from "react-draggable"
export default function designView() {
  return (
    <div>
      <Draggable
        axis={isHorizontal ? "x" : "y"}
        handle=".handle"
        position={position}
        onStart={}
        onDrag={}
        onStop={}
      >
        <div className="handle">111</div>
        <div className="handle">222</div>
      </Draggable>
    </div>
  )
}
