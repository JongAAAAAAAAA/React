import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  // static getDerivedStateFromProps(props, state){
  //     return {favoriteColor: props.favoriteColor}
  // }

  // componentDidMount(){ // 렌더링 되고 1초뒤에 바뀜
  //     setTimeout( ()=>{
  //         this.setState({favoriteColor:"yellow"})
  //     },1000)
  // }

  // shouldComponentUpdate(){
  //     return true;
  // }

  // changeColor = () => {
  //     this.setState({favoriteColor:"blue"});
  // }

  render() {
    return (
      <div>
        My favorite color is {this.state.favoriteColor}
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Header;
