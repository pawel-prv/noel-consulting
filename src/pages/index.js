import React from 'react'
import Helmet from 'react-helmet'

import SEO from '../components/seo'
import logo from '../images/logo.png'

import './index.css'

const IndexPage = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
    </Helmet>
    <SEO
      title="Strona główna"
      keywords={[`dotacje`, `biznesplan`, `dofinansowania`, `dotacje unijne`]}
    />
    <div className="page">
      <div className="page__body">
        <h1 className="page__heading heading">
          <span className="heading__main">NOEL CONSULTING</span>
          <span className="heading__sub">Elżbieta Nowak</span>
        </h1>
        <img
          alt="NOEL Consulting Elżbieta Nowak - Logo"
          className="page__img img"
          src={logo}
        />
        <p className="page__text">Tutaj powstanie nasza nowa strona!</p>
        <div className="page__footer footer">
          <p className="footer__intro">Zapraszamy do kontaktu:</p>
          <div className="footer__content">
            <a className="footer__link" href="tel:+48604169555">
              604-169-555
            </a>
            {' '}
            <span className="footer__phrase">lub</span>
            {' '}
            <a
              className="footer__link"
              href="mailto:elzbieta.nowak11@gmail.com"
            >
              elzbieta.nowak11@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
