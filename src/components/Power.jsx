import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function Info({ icon, children }) {
  const elementRef = useIntersectionObserver()
  
  return (
    <div className="info" ref={elementRef}>
      <div className={`icon icon--${icon}`}></div>
      <p>{children}</p>
    </div>
  )
}

function Power() {
  return (
    <section className="power">
      <div className="inner">
        <div className="multiple-apps">
          <h1 className="bgtext">거침없는 일 처리 성능</h1>
          <div className="figures">
            <figure>
              <img src="/images/power_multiple_apps.png" alt="Keynote 마크업과 메세지가 함께 표시된 Split View" />
              <figcaption className="bgtext">동시에 여러 앱 사용 가능</figcaption>
            </figure>
          </div>
        </div>
        <div className="arcade feature">
          <div className="figures">
            <figure>
              <img src="/images/power_arcade.png" alt="iPad에 WonderBox 앱이 열려 있는 모습" />
              <figcaption className="bgtext">신나게 즐기는 새로운 APPLE ARCADE 게임</figcaption>
            </figure>
          </div>
          <div className="infos infos--center">
            <Info icon="chip">
              A13 Bionic 칩이 메세지 전송, 인터넷 서핑, 여러 앱 동시에 사용하기 등 모든 작업에 더욱 탁월한 반응성을 더해줍니다.
            </Info>
            <Info icon="faster">
              최대 20% 빨라진 GPU로 뛰어난 그래픽 성능을 선사합니다. 몰입감 넘치는 게임 등 더 많은 것을 즐기는 데 안성맞춤이죠.
            </Info>
          </div>
        </div>
        <div className="creat feature">
          <div className="infos infos--end">
            <Info icon="neural">
              더욱 강력해진 Neural Engine이 iPadOS 15의 라이브 텍스트와 같은 머신 러닝 기반 기능을 구현해줍니다.
            </Info>
            <Info icon="apps">
              A13 Bionic 칩은 Adobe Fresco, Procreate와 같은 첨단 앱도 거뜬히 구동합니다.
            </Info>
            <Info icon="battery">
              온종일 가는 배터리를 갖춘 iPad. 당신이 열공 모드일 때도, 게임 삼매경에 빠져 있을 때도 늘 함께할 준비가 되어 있습니다. <sup><a href="#footnote1">1</a></sup>
            </Info>
          </div>
          <div className="figures">
            <figure>
              <img src="/images/power_create.jpg" alt="Procreat에서 Apple Pencil로 그림이 그려져 있는 모습" />
              <figcaption className="bgtext">스케치하고, 그리고, 색칠하고</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Power

