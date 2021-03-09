import React from 'react';

const User = (props) => {
    const familiar = props.familiar

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {
                    familiar ?
                        <p>Welcome, my friend.</p>
                        :
                        <p>Who the hell are you?</p>
                }
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar ?
                        <p>I will provide food.</p>
                        :
                        <p>Buy yourself!</p>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <p>Lets join my facebook.</p>
                }
            </div>
        </div>
    );
};

export default User;