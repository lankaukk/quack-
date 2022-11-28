import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 800,
        height: 1133,
        position: 'absolute',
        left: 1036,
        top: 128,
        backgroundColor: '/*rgb(0, 0, 0, 1)*/',
        backgroundImage:
          'conic-gradient(rgb(67, 67, 67) 0.25turn, rgb(44, 45, 48) 0.25turn, rgb(44, 45, 48) 0.5turn, rgb(67, 67, 67) 0.5turn, rgb(67, 67, 67) 0.75turn, rgb(44, 45, 48) 0.75turn)',
        backgroundSize: 'auto',
      }}
      data-label='My App'
    >
      <App
        style={{ backgroundColor: 'rgb(177, 104, 104, 1)' }}
      />
    </Scene>
  </Storyboard>
)
