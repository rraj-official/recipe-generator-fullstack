import React, { useState } from 'react'
import LandingPage from './LandingPage'
import SurveyPage from './SurveyPage';


// Note that this is a landing page if the user is not logged in and a home page if the user is logged in 

const Survey = (props) => {
  const {loginStatus} = props;
  return (
    <div>{loginStatus ? (<div><SurveyPage /></div>):(<div><LandingPage /></div>)}</div>
  )
}

export default Survey