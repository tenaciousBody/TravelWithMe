import logo from './logo.svg';
import './App.css';
import Subscribe from './Component/subscribe';
import Bind from './Component/bind';
import Parent from './Component/parent';
import PersonList from './Component/PersonList';
import StyleSheet from './Component/StyleSheet';
import './Component/Styles/styleSheet.css'
import Refs from './Component/refs';
import ParentRef from './Component/ParentRef';
import Form from './Component/Form';
import Portal from './Component/portal';
import Hero from './Component/hero';
import ErrorBoundary from './Component/ErrorBoundary';
import HoverCounter from './Component/hoverCounter';
import PropsRender from './Component/PropsRender';
import HoverCounter2 from './Component/hoverCounter2';
import ComponentA from './Component/ComponentA';
import { UserProvider } from './Component/context';
import {GetRequest} from './Component/GetRequest'
import FormPostRequest from './Component/FormPostRequest';
import HooksCounter from './Component/HooksCounter';
import HooksWithObject from './Component/HooksWithObject';
import ArrayHooks from './Component/ArrayHooks';
import UseStateInClassComp from './Component/UseStateInClassComp';
import UseEffectComp from './Component/UseEffectComp';
import MouseHooks from './Component/MouseHooks';
import MouseContainer from './Component/MouseContainer';
import IntervalCounter from './Component/IntervalCounter';
import ApiCallByHooks from './Component/ApiCallByHooks';
import FComponentA from './Component/FComponentA';
import ReducerCounter from './Component/ReducerCounter';
import ReducerGlobalCounter from './Component/ReducerGlobalCounter';
import React,{ useReducer } from 'react';

export const context = React.createContext()

const intitialState = {
  firstCounter: 0
}

const reducer= (state, action) => {
  switch(action.type) {
      case 'increment':
          return  {firstCounter : state.firstCounter + action.value} 
      case 'decrement':
          return {firstCounter : state.firstCounter - action.value}   
      case 'reset':
          return intitialState    
       default:
          return state   
  }
}

function App() {
  const [countState, dispatch] = useReducer(reducer, intitialState)
  return (
//<Counter name="Test" type ="application"/>
//<Subscribe></Subscribe>
//<Bind></Bind>
/* <div>
<Parent></Parent>
<PersonList></PersonList>
</div> */
//Passing props from Parent components for applying css
/* <div>
<StyleSheet isPrimary={false} ></StyleSheet>
<StyleSheet isPrimary={true} ></StyleSheet>
</div> */
//<Refs/>

//<ParentRef/>
//<Form></Form>
//<Hero heroname="Hulk"></Hero>
//<Hero heroname="IronMan"></Hero>
//<ErrorBoundary>
//<Hero heroname="Thor"></Hero>
//</ErrorBoundary> 
//<HoverCounter></HoverCounter>
//<PropsRender render = {(incount, counter) => 
//</div>    (<HoverCounter2 incount={incount} counter={counter}></HoverCounter2>)}>
//</PropsRender>
//<UserProvider value ="I_am_Ashutosh">
//    <ComponentA/>
//</UserProvider>
//<GetRequest></GetRequest>
//<FormPostRequest></FormPostRequest>
//<HooksCounter></HooksCounter>
//<HooksWithObject></HooksWithObject>
//<ArrayHooks></ArrayHooks>
//<UseStateInClassComp/>
//<UseEffectComp/>
//<MouseHooks/>
//<MouseContainer/>
//<IntervalCounter/>
//<ApiCallByHooks/>
//<FComponentA/>
//<ReducerCounter/>
<div> 
 <context.Provider value={{state:countState, dispatch:dispatch} }>
    <h3>Count value - {countState.firstCounter} </h3> 
    <ReducerGlobalCounter/>
</context.Provider>

</div>

  );
}

export default App;
