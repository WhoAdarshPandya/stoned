import React from 'react'

import { Button } from 'stoned'

const App = () => {
  return (
    <>
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
      >
        primary
      </Button>
      <Button
        color='secondary'
        onClick={(e) => {
          console.log(e)
        }}
      >
        secondary
      </Button>
      <Button
        color='inherit'
        textColor='textColorPrimary'
        // disableRipple={true}
        onClick={(e) => {
          console.log(e)
        }}
      >
        transparent
      </Button>
      <Button
        color='inherit'
        textColor='textColorPrimary'
        disableRipple={true}
        onClick={(e) => {
          console.log(e)
        }}
      >
        no ripple
      </Button>
      <br />
      <Button
        onClick={(e) => {
          console.log(e)
        }}
        raised={true}
      >
        primary raised
      </Button>
      <Button
        raised={true}
        color='secondary'
        onClick={(e) => {
          console.log(e)
        }}
      >
        secondary raised
      </Button>
      <Button
        raised={true}
        color='inherit'
        textColor='textColorSecondary'
        onClick={(e) => {
          console.log(e)
        }}
      >
        transparent
      </Button>
      <Button
        raised={true}
        color='inherit'
        textColor='textColorSecondary'
        disableRipple={true}
        onClick={(e) => {
          console.log(e)
        }}
      >
        no ripple raised
      </Button>
      <br />
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
        size='small'
      >
        small
      </Button>
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
        size='medium'
      >
        medium
      </Button>
      <Button
        color='primary'
        onClick={(e) => {
          console.log(e)
        }}
        size='large'
      >
        large
      </Button>
      <Button
        color='primary'
        href='https://google.com'
        onClick={(e) => {
          console.log(e)
        }}
        size='large'
      >
        Link
      </Button>
      <br />
      <Button variant='outlined'>primary outlined</Button>
      <Button variant='outlined' raised={true}>
        primary outlined raised
      </Button>
      <Button color='secondary' variant='outlined'>
        secondary outlined
      </Button>
      <Button color='secondary' variant='outlined' raised={true}>
        secondary outlined raised
      </Button>
    </>
  )
}

export default App
