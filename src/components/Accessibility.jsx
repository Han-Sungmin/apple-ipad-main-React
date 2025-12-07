import React from 'react'
import { getImagePath } from '../utils/imagePath'

function Accessibility() {
  return (
    <section className="accessibility">
      <div className="inner">
        <h1 className="bgtext">모두를 위해 만들다.</h1>
        <div className="infos infos--large">
          <div className="info">
            <p>누구나 사용할 수 있는 기술이야말로 가장 강력한 기술입니다. iPad에 시각, 청각, 운동 및 인지능력 등을 보완해주는 손쉬운 사용 기능을 탑재한 이유도 바로 그 때문이죠. 그룹
              FaceTime 통화 중 수어를 사용하는 사람이 있는 경우, 그 사람이 이야기 중인 것을 알 수 있도록 해당 타일을 더 크게 표시해주는 것이 좋은 예입니다.</p>
            <a href="javascript:void(0)" className="link">모든 손쉬운 사용 기능 살펴보기</a>
          </div>
        </div>
        <div className="figures">
          <figure>
            <img src={getImagePath("/images/accessibility.jpg")} alt="FaceTime 앱으로 4명이 수어로 영상 통화" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Accessibility

