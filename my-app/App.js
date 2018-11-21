import React, { Component } from 'react';

var headerStyle = {
   width: "100%",
   height: "677px",
   backgroundImage: "url(../images/background_img.jpg)"
 };

 var mainStyle={
   float: "left",
   width: "67%",
   backgroundColor: "#f1f1f1",
   height:"300px",
   padding:"20px"
 }

 var bodyStyle={
    color:"green"
 }

 var navStyle={
   float: "left",
   width: "28%",
   backgroundColor: "cyan",
   height:"300px",
   padding:"20px"
 }

 var footerStyle={
   float: "left",
   width: "100%",
   padding: "20px",
 }
 
class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
      this.date=(new Date().getMonth()+1)+"-"+new Date().getDate()+"-"+new Date().getFullYear()
   };  

   updateState(e) {
      this.setState({data: e.target.value})
   }

   render() {
      return (
         <div>
            <Header />
            <Section myDataProp = {this.state.data} updateStateProp = {this.updateState} dateProp = {this.date}  />
            <Footer />
         </div>
      );
   }
}

class Section extends React.Component {
   render() {
      return (
         <section>
            <Main myDataProp = {this.props.myDataProp} updateStateProp = {this.props.updateStateProp} dateProp = {this.props.dateProp}  />
            <Nav />
          </section>  
      );
   }
}

class Main extends React.Component {
   render() {
      return (
         <article id="main" style={mainStyle}>
            <h1>Bonjour</h1>
            <p>{this.props.dateProp}</p>
            <div id="body">
               <p> This is the body of the main tag, please change the input value </p>
               <input type='text' onChange = {this.props.updateStateProp}/><br />
               <p style={bodyStyle}>{this.props.myDataProp}</p>
            </div>
         </article>
      );
   }
}

class Nav extends React.Component {
   render() {
      return (
         <nav style={navStyle}>
            <ul>
               <li><a href="http://google.com" target="_blank">Google</a></li>
               <li><a href="http://imdb.com"  target="_blank">IMDB</a></li>
               <li><a href="http://yahoo.com"  target="_blank">Yahoo</a></li>
            </ul>
         </nav>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <header style={headerStyle}>{this.props.myDataProp}</header>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
         <footer style={footerStyle}> &copy; MyCode</footer>
      );
   }
}

export default App;