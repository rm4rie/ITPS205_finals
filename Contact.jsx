import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact Me</h2>
            <p>You can reach me at: example@example.com</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;