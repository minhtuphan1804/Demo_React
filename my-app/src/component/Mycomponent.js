// class component
//function component
import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfor from './DisplayInfor';
class myComponent extends React.Component {

    //JSX

    state = {
        listUsers: [
            { id: 1, name: "Nguyen Van A", age: 14 },
            { id: 2, name: "Nguyen Van b", age: 15 },

            { id: 3, name: "Nguyen Van c", age: 16 },

        ]
    };
    // handleClick = (event) => {
    //     console.log(this.state);
    //     console.log("Random: ", Math.floor((Math.random() * 100) + 1));
    //     var a = Math.floor((Math.random() * 100) + 1)

    //     this.setState({
    //         name: 'Tu',
    //         age: a
    //     })

    // }//set state
    // handleOnMouseOver(event) {
    //     console.log("Yes");
    //     console.log(event);

    // }
    // handleOnchange = (event) => {
    //     this.setState({
    //         name: event.target.value

    //     })
    //     console.log(event.target.value);

    // }
    // handleOnchange1 = (event) => {
    //     this.setState({
    //         age: event.target.value

    //     })
    //     console.log(event.target.value);

    // }
    // handleClickButton = (event) => {
    //     console.log(this.state);
    // }
    // handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     alert('ok');
    // }
    render() {
        var nb = Math.random();
        return (
            <div>
                {/* {nb}
                {Math.random()}



                My name is {this.state.name} and i am {this.state.age} years old
                <button onClick={this.handleClick}>Click</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click</button>

                <button onMouseOver={this.handleOnMouseOver}>Click</button>

                <form onSubmit={(event) => { this.handleOnSubmit(event) }} >
                    <input type='text' value={this.state.name} onChange={(event) => { this.handleOnchange(event) }}></input>
                    <input type='text' value={this.state.age} onChange={(event) => { this.handleOnchange1(event) }}></input>

                    <button type='submit' >submit</button>
                </form>

                <UserInfo></UserInfo> */}

                <DisplayInfor listUsers={this.state.listUsers} ></DisplayInfor>

            </div>
        );
    }

}
export default myComponent;