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

function App() {
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
<div> 
{/* <Hero heroname="Hulk"></Hero>
<Hero heroname="IronMan"></Hero>
<ErrorBoundary>
<Hero heroname="Thor"></Hero>
</ErrorBoundary> */
//<HoverCounter></HoverCounter>
//<PropsRender render = {(incount, counter) => 
//</div>    (<HoverCounter2 incount={incount} counter={counter}></HoverCounter2>)}>
//</PropsRender>
//<UserProvider value ="I_am_Ashutosh">
//    <ComponentA/>
//</UserProvider>
//<GetRequest></GetRequest>
//<FormPostRequest></FormPostRequest>
<HooksCounter></HooksCounter>
}


</div>

  );
}

export default App;
