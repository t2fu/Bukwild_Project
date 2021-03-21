//Programmer: Tiancheng Fu

import logo from './abc_logo.svg';
import './App.css';
import data from './content.json';
import React from 'react';
import Background1 from './slide_one.jpg'
import Background2 from './slide_two.jpg'
import Background3 from './slide_three.jpg'


function App() {
  return <BulWild/>
}

class BulWild extends React.Component {

  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    let menu = data.pages.map( (page,index) => 
    <h3 className = "Industries-Services" key={index} id={index}
     onClick={this.changePage}>{page.title}</h3> );
    this.state = { 
      page : 0,
      menu : menu,
      image : Background1
    };

  }

  // console.log(data);
  // let page = 1;
  // const [page, setPage] = useState(0);
  changePage(e){
    // page = 1;
    this.setState ( state => ({ page: e.target.id }));
    // setPage(1);
    // console.log(e)
     if (e.target.id == 0){
      this.setState (state => ({ image: Background1}));
     }else if(e.target.id == 1){
       this.setState (state => ({ image: Background2}));
     }else{
       this.setState (state => ({ image: Background3}));
     }
    //console.log(e.target.id);
  }

  render() {
    return (
      <div style={{overflow:"auto"}}>
      <div className="App" style={{backgroundImage: 'url('+this.state.image+')',
       backgroundSize: "cover", height: "100%", width: "100%", position: "absolute"}}>
        <img src = {logo} className="logo"></img>
        <a href="#" class="button1">Contact Us</a>
        <div className="menu">
        <div>{this.state.menu}</div>
        </div>
      <Marquee headline = {data.pages[this.state.page].blocks[0].headline} 
            subhead = {data.pages[this.state.page].blocks[0].subhead} 
            cta = {data.pages[this.state.page].blocks[0].cta}
            background = {data.pages[this.state.page].blocks[0].background}>
            </Marquee>
      </div>
      </div>
    );
  }
}

function Marquee(props){
  return (
    <div>
    <div className="main">
    <h2 className="headline"> {props.headline} </h2>
    </div>
    <div className="right">
    <h2 className="subhead"> {props.subhead} </h2>
    </div>
    <div className = "rectangle">
    <h2 className="cta"> {props.cta} </h2>
    <a href ="#" className = "button2">LET'S TALK &nbsp;&nbsp;    
    <span style= {{color: "#FFC001", fontSize: "150%", fontWeight: "bold"}}>&#62;&#62;
    </span></a>
    </div>
    </div>
  );

}
export default App;
