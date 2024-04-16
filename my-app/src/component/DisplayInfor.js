import React from "react";

class DisplayInfor extends React.Component {
    render() {
        console.log(this.props);
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            //props=> viet tat properties

            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>


                            <div>My name is :{user.name} </div>
                            <div>I am  :{user.age} </div>


                        </div>
                    )
                })}



            </div>
        )


    }

}
export default DisplayInfor;