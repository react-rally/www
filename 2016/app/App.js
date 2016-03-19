import React, { Component } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'

export default (props) => {
  return (
    <div>
      <Header/>
      <section>
        {props.children}
      </section>
      <Footer/>
    </div>
  )
}

