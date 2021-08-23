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
//script me jo basic commands use hoti wo define krte. 
//react.strictmode ko error warning agr code me ho to display kre is liay use krte hain .
//StrictMode is a developer tool which detects things you might be doing by accident and brings them to your attention so you can fix them.
//react fragment use kr k extra div ni create hoti  nested div ni bntein
//const variable ko array ya object me rkh k hm modify kr skte reassign ni kr skte 