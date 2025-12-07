import React from 'react'
import { getImagePath } from '../utils/imagePath'

function Privacy() {
  return (
    <section className="privacy">
      <div className="inner">
        <h1 className="bgtext">개인정보 보호 기능 내장.</h1>
        <div className="infos infos--large">
          <div className="info">
            <p>
              다른 모든 Apple 제품과 마찬가지로 iPad 역시 당신의 개인 정보 보호 및 보안을 염두에 두고 설계되었습니다. 결코 쉽지만은 않은 작업이죠. 하지만 그런 것만이 진정한 혁신이라 우리는
              믿습니다.
            </p>
            <a href="javascript:void(0)" className="link">개인 정보 보호를 위한<br />우리의 노력에 대해 더 알아보기</a>
          </div>
        </div>
        <div className="figures">
          <figure>
            <img src={getImagePath("/images/privacy.jpg")} alt="Safari에 표시" />
            <figcaption className="bgtext">
              <div className="caption-apple-id">Apple로 로그인</div>
              <div className="caption-touch-id">지문으로 로그인하기</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Privacy

