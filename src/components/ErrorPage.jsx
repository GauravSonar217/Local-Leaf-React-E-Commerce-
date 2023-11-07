import React from 'react'
import Button from './Button'

function ErrorPage() {
  return (
    <React.Fragment>
      <section className='errorSec'>
        <h1>Oops !!!</h1><br />
        <p>Sorry, an unexpected error has occurred.</p>
        <Button path="/" class="button-85" text="Go to Home Page" ></Button>
      </section>
    </React.Fragment>
  )
}

export default ErrorPage