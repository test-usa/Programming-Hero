import React from 'react';

interface ChildComponentProps {
    show: boolean; // show is a boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>; // setShow is the setter function for the boolean state
  }
  
  const ChildComponent: React.FC<ChildComponentProps> = ({ show, setShow }) => {
    // Toggle the show state when button is clicked
    const toggleShow = () => {
      setShow(!show);
    };
  

const MenuBar = ({show}: {show: boolean})  => {
    function setShow(arg0: boolean): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="menu-bar">
      <button onClick={toggleShow}>Close</button>
      {/* Other MenuBar content */}
    </div>
  );
};

export default MenuBar;