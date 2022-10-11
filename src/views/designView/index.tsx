import Draggable from "react-draggable"
import { Button } from 'antd'
export default function designView() {
  return (
    <div className="wrapper" style={{border: '1px solid #eee', width: '500px', height: '600px'}}>
      <Draggable
        axis="both"
        handle=".handle"
        bounds="parent"
        defaultPosition={{ x: 0, y: 0 }}
        grid={[1, 1]}
        scale={1}
      >
        <div style={{display: 'inline-block'}}>
          <Button>111</Button>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </div>
  )
}
