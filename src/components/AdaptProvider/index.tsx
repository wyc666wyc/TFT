import { ReactNode, useEffect, useState, useMemo } from "react";
import style from './index.module.scss'

interface AdaptProviderProps {
  children: ReactNode
  name?: string
}

export function AdaptProvider (props: AdaptProviderProps) {
  const width = 1920
  const [height, setHeight] = useState(0)
  const [scale, setScale] = useState(1)
  const transform = useMemo(() => {
    return `scale(${scale}) translate(-50%, -50%)`
  }, [scale])
  const getScale = () => {
    const ww = window.innerWidth / width
    const wh = window.innerHeight / height
    const ratio = window.innerWidth / window.innerHeight
    const compHeight = 1920 / ratio
    return {
      height: compHeight % 2 === 0 ? compHeight : compHeight - 1,
      scale: ww < wh ? ww : wh
    }
  }
  const setStyle = () => {
    const { height, scale } = getScale()
    setScale(scale)
    setHeight(height)
  }
  const resize = () => {
    window.onresize = () => {
      setStyle()
    }
  }
  useEffect(() => {
    setStyle()
    resize()
  }, [])
  return (
    <div className={style.adaptProvider} style={{ transform, width, height }}>
      {props.children}
    </div>
  )
}