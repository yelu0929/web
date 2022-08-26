import React from "react";
export const getNodeByString = (content:string) => {
  if(content.indexOf("\n") > -1) {
    return (<div>
      {content.split("\n").map(item => <div key={item}>{item}</div>)}
    </div>)
  }
  return <div dangerouslySetInnerHTML={{__html:content}} />
}