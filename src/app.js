import '../public/globals.css'
import { FlexCol, FlexRow } from './utils'
import { Thingy } from './thingy'

export var App = (props) => {
  const runCallback = (cb) => {
    return cb()
  }
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        padding: 50,
        gap: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        ...props.style,
        backgroundColor: 'rgb(35, 37, 44, 1)',
        marginTop: -50,
      }}
    >
      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy
                color='rgb(245, 182, 209, 1)'
                style={{
                  backgroundColor: 'rgb(219, 119, 97, 1)',
                }}
              />,
            )
          }
          return thangs
        })}
      </FlexRow>
      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy color='rgb(235, 54, 84, 1)' />,
            )
          }
          return thangs
        })}
      </FlexRow>
      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy
                style={{
                  backgroundColor: 'rgb(214, 56, 175, 1)',
                }}
              />,
            )
          }
          return thangs
        })}
      </FlexRow>

      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy
                style={{
                  backgroundColor: 'rgb(56, 69, 207, 1)',
                }}
              />,
            )
          }
          return thangs
        })}
      </FlexRow>
      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy
                style={{
                  backgroundColor: 'rgb(56, 147, 207, 1)',
                }}
              />,
            )
          }
          return thangs
        })}
      </FlexRow>

      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy
                style={{
                  backgroundColor: 'rgb(64, 213, 141, 1)',
                }}
              />,
            )
          }
          return thangs
        })}
      </FlexRow>
      <img
        className='quack'
        src='quacker.png'
        alt='quack!'
        style={{
          position: 'absolute',
          left: 320,
          top: 400,
        }}
      />
      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy
                style={{
                  backgroundColor: 'rgb(203, 221, 132, 1)',
                }}
              />,
            )
          }
          return thangs
        })}
      </FlexRow>
      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy
                style={{
                  backgroundColor: 'rgb(219, 119, 97, 1)',
                }}
              />,
            )
          }
          return thangs
        })}
      </FlexRow>
      <FlexRow style={{ gap: 50 }}>
        {runCallback(() => {
          const thangs = []
          for (var i = 0; i < 6; i++) {
            thangs.push(
              <Thingy color='rgb(235, 54, 84, 1)' />,
            )
          }
          return thangs
        })}
      </FlexRow>
    </FlexCol>
  )
}
