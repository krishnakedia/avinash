import React from 'react';
import './Class2.css';

const Class2 = props => {
    const addHandler = event =>{
      event.preventDefault();
        const newClass2 = {
            id: Math.random().toString,
            text: 'My new Class!'
        };
        props.onAddClasss2(newClass2);
    };

    return (
        <>
            <form className='class2' onSubmit={addHandler} >
                <input type="text" name="" id="" />
                <input type="submit" value="submit" />
            </form>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARfTOMEBVV1_3fc3Ga_9E_UZ1pBnSGRHCG-qkB-3czg&s" alt='image' />
        </>);
};

export default Class2;