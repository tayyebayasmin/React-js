import React from 'react';
import ReactDOM from 'react-dom';


var show=React.createElement('h1',null,"Hello World")
var element=(
<div>
<p>my first paragraph</p>
<h1>tayyeba</h1>
</div>)

var element1=React.createElement('div',null,React.createElement('h1',null,'tayyeba'))
ReactDOM.render(<>
{element1}
{show}
<h1>tayyeba yasmin</h1>
{element}
</>
,

  document.getElementById('root')
);

