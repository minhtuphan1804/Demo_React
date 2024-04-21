import React from "react";

class DisplayInfor extends React.Component {
    state = {
        isShowList: true
    }
    handleShowList() {
        this.setState({
            isShowList: !this.state.isShowList
        })
    }
    render() {
        console.log(this.props);
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            //props=> viet tat properties
            <div>
                <div>
                    <button onClick={() => { this.handleShowList() }}>{this.state.isShowList == true ? "Hide list User" : "Show list Users"}</button>
                </div>
                {this.state.isShowList &&
                    <div>
                        {listUsers.map((user) => {
                            // if (+user.age < 18) {  +user: chuyen doi chuoi sang so 
                            //     return (
                            //         <div key={user.id} className="red">
                            //             <div>My name is :{user.name} </div>
                            //             <div>I am  :{user.age} </div>
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className="green">
                            //             <div>My name is :{user.name} </div>
                            //             <div>I am  :{user.age} </div>
                            //         </div>
                            //     )
                            // }

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is :{user.name} </div>
                                    <div>I am  :{user.age} </div>
                                </div>
                            )
                        })}



                    </div>
                }
            </div>
        )


    }

}
export default DisplayInfor;