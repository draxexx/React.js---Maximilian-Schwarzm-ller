import ReactDOM from 'react-dom'; //import ReactDOM object from react-dom third-party library which is one of our dependencies inside of package.json

import './index.css'; //import css file to javascript
import App from './App'; //import App from App file. App is a component

/* 
the first parameter is a component that will be rendered in the place of that an element with an id of 'root'
the second parameter is default js dom which indicates a div inside public > index.html
*/
ReactDOM.render(<App />, document.getElementById('root'));