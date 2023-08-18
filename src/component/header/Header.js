import React from "react";


function Header(props) {
   return <ol>{
      props.avi.map((av)=>{
         return <li key={av.id}>{av.text}</li>;
      })
   }</ol>;
}

export default Header;