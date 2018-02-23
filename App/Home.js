//import { Router, Route, browserHistory } from 'react-router';
import React, { Component } from 'react';
import {  Router, Route, browserHistory , Link } from 'react-router-dom';
class Home extends Component {
    render(){
        return(
            <Test />
        )
    }
}
class Test extends React.Component {
    constructor(props){
       super(props);
       console.log(this.props,'constructor');
       this.state = {
           fields: {},
           errors: {}
       }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
             if(!fields["name"].match(/^[a-zA-Z]+$/)){
                 formIsValid = false;
                 errors["name"] = "Only letters";
             }          
        }
       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            alert("Form Submitted.")
            this.history.push('/Login');  
        }else{
           alert("Form has errors.")
        }

    }
//  	handleclick(e) {
//      e.preventdefault();
//      this.props.history.push('/Login');
//    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    render(){
        return (
            <div>           
               <form name="contactform" className="contactform"   onSubmit= {this.contactSubmit.bind(this)} >
                    <div className="col-md-6">
                      <fieldset>
                           <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                           <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                          <br/>
                         
                         <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                         <br/>
                         <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                         <br/>
                         <button onSubmit= {this.contactSubmit.bind(this)}   >Submit</button>
                     </fieldset>
                  </div>

              </form>
            </div>
      )
    }
}

export default Home;
