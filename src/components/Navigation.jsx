import React, { useState } from 'react'

function Navigation() {
  const [activeMenu, setActiveMenu] = useState('개요')

  const menuItems = [
    { text: '개요', active: true },
    { text: 'iPad를 선택하는 이유', active: false },
    { text: '제품 사양', active: false }
  ]

  return (
    <nav>
      <div className="inner">
        <h1>iPad</h1>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={activeMenu === item.text ? 'active' : ''}
              onClick={() => setActiveMenu(item.text)}
            >
              <a href="javascript:void(0)">{item.text}</a>
            </li>
          ))}
        </ul>
        <button className="btn">구입하기</button>
      </div>
    </nav>
  )
}

export default Navigation

