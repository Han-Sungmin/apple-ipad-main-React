import React from 'react'
import { getImagePath } from '../utils/imagePath'

function Hero() {
  return (
    <section className="hero">
      <div className="inner">
        <h1 className="bgtext">iPad</h1>
        <div className="figures">
          <figure>
            <img src={getImagePath("/images/hero_ipad.jpg")} alt="iPad와 Smart Keyborad9 및 Apple pencil" />
            <figcaption className="bgtext">
              <div className="caption-camera">센터 스테이지 기술이 적용된 새로운 울트라 와이드 전면 카메라</div>
              <div className="caption-chip">A13 BIONIC 칩 전격 탑재</div>
              <div className="caption-storage">저장 용량은 64GB부터</div>
            </figcaption>
          </figure>
        </div>
        <h2 className="bgtext">매사를 더욱 쉽게</h2>
        <p className="pricing">
          449,000원부터
        </p>
        <p className="description">
          강력한 성능에 간편함과 다재다능까지 갖춘 새로워진 iPad.
          당신이 어떤 일을 즐겨하든 함께할 수 있도록 디자인되었습니다.
          직업, 취미, 공부, 소통 등. 이 모든 것을 부담 없이 누릴 수 있죠.
        </p>
        <div className="links">
          <a href="javascript:void(0)" className="link">이벤트 시청하기</a>
          <a href="javascript:void(0)" className="link">iPad를 선택하는 이유</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

