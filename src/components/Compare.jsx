import React from 'react'
import ipads from '../data/ipads'

function Compare() {
  return (
    <section className="compare">
      <div className="whitebox">
        <div className="inner">
          <h1>당신에게 맞는 iPad는?</h1>
          <div className="items">
            {ipads.map((ipad, index) => (
              <div key={index} className="item">
                <div className="thumbnail">
                  <img src={ipad.thumbnail} alt={ipad.name} />
                </div>
                <ul className="colors">
                  {ipad.colors.map((color, colorIndex) => (
                    <li key={colorIndex} style={{ backgroundColor: color }}></li>
                  ))}
                </ul>
                <h3 className="name">{ipad.name}</h3>
                <p className="tagline" dangerouslySetInnerHTML={{ __html: ipad.tagline }}></p>
                <p className="price">{ipad.price.toLocaleString('en-US')}부터</p>
                <button className="btn">구입하기</button>
                <a href={ipad.url} className="link">더 알아보기</a>
              </div>
            ))}
          </div>
          <div className="links">
            <a href="javascript:void(0)" className="link">모든 iPad 모델 비교하기</a>
            <a href="javascript:void(0)" className="link">iPad 쇼핑하기</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compare

