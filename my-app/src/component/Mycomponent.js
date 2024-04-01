// class component
//function component
import React from 'react';
class myComponent extends React.Component {
    //JSX

    render() {
        var nb = Math.random();//cach1
        return (
            <div>
                {nb}//cach1
                {Math.random()}
                //cach2

            </div>
        );
    }

}
export default myComponent;