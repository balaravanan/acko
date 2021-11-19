import './App.css';
import React, {useState,useEffect} from 'react'
import './Style.css';
import Blue from './Blue';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fiveth from './Fiveth';
import Sixth from './Sixth';
import Responsive from './Responsive';
import useWindowDimensions from "./useWindowDimensions";
import ResInsurnace from './ResInsurnace';
import Resbikecarheart from './Resbikecarheart';
import Resbanner from './Resbanner';
import ResFirst from './ResFirst';
import ResSecond from './ResSecond';
import ResThird from './ResThird';
import ResFourth from './ResFourth';
import ResFivth from './ResFivth';
import ResSixth from './ResSixth';
import Resseventh from './Resseventh';
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
 
function App() {
  const { width } = useWindowDimensions();

  const [mobileWidth, setMobilewidth] = useState(false);
  const [webWidth, setWebWidth] = useState(false);


  useEffect(() => {
    if (width < 700) {
      setMobilewidth(true);
      setWebWidth(false);
    } else {
      setMobilewidth(false);
      setWebWidth(true);
    }
  }, [width]);
  return (
    <div>
{webWidth && (
  <div>
     <Blue/>
     <Second/>
     <Third/>
     <Fourth/>
     <Fiveth/>
     <Sixth/>
     </div>
     )}
     
    {mobileWidth && (
      <div>
     <Responsive/>
     <ResInsurnace/>
     <Resbikecarheart/>
     <Resbanner/>
     <ResFirst/>
     <ResSecond/>
     <br/>
     <ResThird/>
        <br/>  <br/>  <br/>
    <ResFourth/>
    <br/>  <br/>
    <ResFivth/>
<ResSixth/>
<br/>  <br/>
<Resseventh/>
     </div>
     ) }
    </div>
  );
}

export default App;
