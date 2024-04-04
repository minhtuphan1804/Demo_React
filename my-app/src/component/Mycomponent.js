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
    render() {
        var nb = Math.random();//cach1
        return (
            <div>
                {nb}//cach1
                {Math.random()}
                //cach2

                My name is {this.state.name} and i'm from {this.state.address}

            </div>
        );
    }

}
export default myComponent;