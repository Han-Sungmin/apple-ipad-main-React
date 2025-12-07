import React from 'react'
import { getImagePath } from '../utils/imagePath'

function AR() {
  return (
    <section className="ar">
      <div className="whitebox">
        <div className="inner">
          <div>
            <img className="icon" src={getImagePath("/images/ar_icon.png")} alt="AR Icon" />
            <h1>AR로 새로워진 iPad 미리 보기.</h1>
            <p>iPhone 또는 iPad에서 이 페이지를 Safari로 열어보세요.</p>
          </div>
          <img className="image" src={getImagePath("/images/ar_ipad.jpg")} alt="AR Image" />
        </div>
      </div>
    </section>
  )
}

export default AR

