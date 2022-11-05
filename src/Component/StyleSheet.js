import React from 'react'
import './Styles/styleSheet.css'

function StyleSheet(props) {
    //Based on ternary operation css class be finalized.
    let className = props.isPrimary ? "primary" :""
  return (
      //how to apply multiple css classes on a html element -
      //we can do it by using templete literal
    <h2 className = {`${className} font-style `}>This is the functional componets having CSS </h2>
  )
}

export default StyleSheet