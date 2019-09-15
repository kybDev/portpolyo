import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  console.log()

  const navList = [
    { span: "W", split:"orks", name:"WORKS", url:"/works" },
    { span: "S", split:"kills", name:"SKILLS", url:"/skills"  },
    { span: "A", split:"bout", name:"ABOUT", url:"/about" },
  ];

  return (
    <div className="kyb-nav-wrapper">
      <nav className="kyb-nav-cont">
        <ul>
          {
            navList.map( (link, index) => {
              return <li key={index}><NavLink onClick={() => props.onChangePage(link.name)} to={link.url}><span>{link.span}</span>{link.split}</NavLink></li>
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;