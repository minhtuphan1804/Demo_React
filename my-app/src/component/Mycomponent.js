// class component
//function component
import React from 'react';
class myComponent extends React.Component {
    //JSX

    state = {
        name: 'Phan Minh Tu',
        age: 12,
        address: 'Ha Noi'
    };
    handleClick = (event) => {
        console.log(this.state);
        console.log("Random: ", Math.floor((Math.random() * 100) + 1));
        var a = Math.floor((Math.random() * 100) + 1)

        this.setState({
            name: 'Tu',
            age: a
        })

    }//set state
    handleOnMouseOver(event) {
        console.log("Yes");
        console.log(event);

    }
    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value);

    }
    handleClickButton = (event) => {
        console.log(this.state);
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        alert('ok');
    }
    render() {
        var nb = Math.random();//cach1
        return (
            <div>
                {nb}//cach1
                {Math.random()}
                //cach2

                My name is {this.state.name} and i am {this.state.age}
                <button onClick={this.handleClick}>Click</button>
                //<button onClick={(event) => { this.handleClick(event) }}>Click</button>

                <button onMouseOver={this.handleOnMouseOver}>Click</button>

                <form onSubmit={(event) => { this.handleOnSubmit(event) }} >
                    <input type='text' value={this.state.name} onChange={(event) => { this.handleOnchange(event) }}></input>
                    <button type='submit' >submit</button>
                </form>


            </div>
        );
    }

}
export default myComponent;