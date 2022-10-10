import { Select } from "antd"
const { Option } = Select
export default function() {
  const handleChange = (e: Event) => {

  }
  return (
    <div>
      <Select onChange={handleChange}>
        <Option value="line">折线图</Option>
        <Option value="pie">饼图</Option>
        <Option value="bar">柱状图</Option>
      </Select>
    </div>
  )
}