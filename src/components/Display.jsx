import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { getImagePath } from '../utils/imagePath'

function Info({ icon, children }) {
  const elementRef = useIntersectionObserver()
  
  return (
    <div className="info" ref={elementRef}>
      <div className={`icon icon--${icon}`}></div>
      <p>{children}</p>
    </div>
  )
}

function Display() {
  return (
    <section className="display">
      <div className="inner">
        <div className="notes">
          <h1 className="bgtext">빛나는 아이디어에 걸맞는 디스플레이</h1>
          <div className="figures">
            <figure>
              <img src={getImagePath("/images/display_notes.jpg")} alt="iPad의 Goodnotes 5 앱에서 편집 중인 손글씨 필기" />
              <figcaption className="bgtext">노트 필기는 GOODNOTES 5로</figcaption>
            </figure>
          </div>
        </div>
        <div className="shareplay feature">
          <div className="figures">
            <figure>
              <img src={getImagePath("/images/display_shareplay.png")} alt="SharePlay 기능으로 영상을 함께 즐기는 모습" />
              <figcaption className="bgtext">함께 보고 함께 즐기고</figcaption>
            </figure>
          </div>
          <div className="infos infos--center">
            <Info icon="display">
              놀랍도록 섬세한 디테일과 생생한 색상을 자랑하는 25.9cm Retina 디스플레이를 갖춘 iPad.<sup><a href="#footnote2">2</a></sup>
              영화를 감상할 때도, 프로젝트를 진행할 때도 또는 멋진 그림을 그릴 때도 더할 나위 없죠.
            </Info>
            <Info icon="true-tone">
              True Tone이 주변의 조명에 맞춰 색온도를 조절해줍니다.
              덕분에 어떤 조명에서도 눈이 편안한 화면을 경험할 수 있죠.
            </Info>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Display

