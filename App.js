import React, { Component } from 'react';
import {  browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './App/Home';
import Login from './App/Login';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory=createBrowserHistory();

class App extends Component {
   
   render() {
      return (
         <Router history={customHistory}>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;

// import React from 'react';

// class App extends React.Component {
//    constructor() {
//       super();
		
//       this.state = {
//          data:[
//             {
//                component: 'First...',
//                id: 1
//             },
//             {
//                component: 'Second...',
//                id: 2
//             },
//             {
//                component: 'Third...',
//                id: 3
//             }
//          ]
//       }
//    }
//    render() {
//       return (
//          <div>
//             <div>
//                {this.state.data.map((dynamicComponent, i) => <Content 
//                   key = {i} componentData = {dynamicComponent}/>)}
//             </div>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <div>{this.props.componentData.component}</div>
//             <div>{this.props.componentData.id}</div>
//          </div>
//       );
//    }
// }
// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
		
//       this.state = {
//          data: ''
//       }
//       this.updateState = this.updateState.bind(this);
//       this.clearInput = this.clearInput.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    clearInput() {
//       this.setState({data: ''});
//       ReactDOM.findDOMNode(this.refs.myInput).focus();
//    }
//    render() {
//       return (
//          <div>
//             <input value = {this.state.data} onChange = {this.updateState} 
//                ref = "myInput"></input>
//             <button onClick = {this.clearInput}>CLEAR</button>
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;



// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 'Initial data...'
//       }
//       this.updateState = this.updateState.bind(this);
//    };
//    updateState(e) {
//       this.setState({data: e.target.value});
//    }
//    render() {
//       return (
//          <div>
//             <input type = "text" value = {this.state.data} 
//                onChange = {this.updateState} />
//             <h4>{this.state.data}</h4>
//          </div>
//       );
//    }
// }
// export default App;



// import React from 'react';

// class App extends React.Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          data: 0
//       }
//       this.setNewNumber = this.setNewNumber.bind(this)
//    };
//    setNewNumber() {
//       this.setState({data: this.state.data + 1})
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    componentWillMount() {
//       console.log('Component WILL MOUNT!')
//    }
//    componentDidMount() {
//       console.log('Component DID MOUNT!')
//    }
//    componentWillReceiveProps(newProps) {    
//       console.log('Component WILL RECIEVE PROPS!')
//    }
//    shouldComponentUpdate(newProps, newState) {
//       return true;
//    }
//    componentWillUpdate(nextProps, nextState) {
//       console.log('Component WILL UPDATE!');
//    }
//    componentDidUpdate(prevProps, prevState) {
//       console.log('Component DID UPDATE!')
//    }
//    componentWillUnmount() {
//       console.log('Component WILL UNMOUNT!')
//    }
//    render() {
//       return (
//          <div>
//             <h3>{this.props.myNumber}</h3>
//          </div>
//       );
//    }
// }
// export default App;


 
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//    constructor() {
//       super();
//       this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
//    };
//    findDomNodeHandler() {
//       var myDiv = document.getElementById('myDiv');
//       ReactDOM.findDOMNode(myDiv).style.color = 'green';
//    }
//    render() {
//       return (
//          <div>
//             <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
//             <div id = "myDiv">NODE</div>
//          </div>
//       );
//    }
// }
// export default App;

// import React from 'react';
// class App extends React.Component {
//     constructor() {
//        super();
//        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//     };
//     forceUpdateHandler() {
//        this.forceUpdate();
//     };
//     render() {
//        return (
//           <div>
//              <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
//              <h4>Random number: {Math.random()}</h4>
//           </div>
//        );
//     }
//  }
// // class App extends React.Component {
// //    constructor(props) {
// //       super(props);
  
// //       this.state = {
// //          data: [
// //              'snehal'
// //          ]
// //       }
 
// //       this.setStateHandler = this.setStateHandler.bind(this);
// //    };
// //    setStateHandler(event) {
// //      event.preventDefault();
// //       var item = "setState"
// //       let myArray = this.state.data;
// //     myArray.push(item);
// //       console.log(myArray);

// //       this.setState({data: myArray})
// //       console.log("this.state.data", this.state.data)
// //    };
// //    render() {
// //       return (
// //          <div>
// //             <button onClick = {this.setStateHandler}>SET STATE</button>
            
// //             <ul>
// //         {
// //           this.state.data.map((val, index) => {
// //             return (
// //               <li key={index}>
// //                 { val }
// //               </li>
// //             );
// //           })
// //         }
// //       </ul>


// //          </div>
// //       );
// //    }
// // }
// export default App;

// import PropTypes from 'prop-types';
// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {  
//     constructor() {
//         super();
          
//         this.state = {
//            data: []
//         }
      
//         this.setStateHandler = this.setStateHandler.bind(this);
//      };
//      setStateHandler() {
//         var item = "setState..."
//         var myArray = this.state.data.slice();
//     //    console.log(myArray);
//     //    console.log(myArray = this.state.data.slice());
//         myArray.push(item);
//         this.setState({data: myArray})
//      };
//      render() {
//         return (
//            <div>
//               <button onClick = {this.setStateHandler}>SET STATE</button>
//               <h4>State Array: {this.state.data}</h4>
//            </div>
//         );
//      }
//  }
// export default App;

//////////////////////////////
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Prop />
//                 <h1>Header</h1>
//             </div>
//         );
//     }
// }
// class TableRow extends React.Component {
//     render() {
//         return (
//             <tr>
//                 <td>{this.props.data.id}</td>
//                 <td>{this.props.data.name}</td>
//                 <td>{this.props.data.age}</td>
//             </tr>
//         );
//     }
// }
// class Prop extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.headerProp}</h1>
//                 <h2>{this.props.contentProp}</h2>
//             </div>
//         );
//     }
// }
// return (
            
        //     // <div>
        //     //     <Header />
        //     //     <table>
        //     //         <tbody>
        //     //             {this.state.data.map((person, i) => <TableRow key={i}
        //     //                 data={person} />)}
        //     //         </tbody>
        //     //     </table>
        //     // </div>
        // );
        // constructor() {
    //     super();
    //     this.state = {
    //         data:
    //         [
    //             {
    //                 "id": 1,
    //                 "name": "Foo",
    //                 "age": "20"
    //             },
    //             {
    //                 "id": 2,
    //                 "name": "Bar",
    //                 "age": "30"
    //             },
    //             {
    //                 "id": 3,
    //                 "name": "Baz",
    //                 "age": "40"
    //             }
    //         ]
    //     }
    // }