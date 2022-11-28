import '../public/globals.css'

export var Thingy = (props) => {
  return (
    <div
      className='thingy'
      style={{
        height: 100,
        width: 100,
        borderRadius: 10,
        background: props.color,
        ...props.style,
      }}
    />
  )
}
