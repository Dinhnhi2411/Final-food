import React from 'react'
import { MuiColorInput } from 'mui-color-input'

const ColorStore = () => {
  const [color, setColor] = React.useState('#ffffff')

  const handleChange = (color) => {
    setColor(color)
  }

  return (
    <MuiColorInput value={color} onChange={handleChange} />
  )
}
export default ColorStore;