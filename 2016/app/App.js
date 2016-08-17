import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'

export default (props) => {
  return (
    <div>
      <Header/>
      <section className="Content">
        {props.children}
      </section>
      <Footer/>
    </div>
  )
}
