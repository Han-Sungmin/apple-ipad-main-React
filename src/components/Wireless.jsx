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

function Wireless() {
  return (
    <section className="wireless">
      <div className="inner">
        <div className="facetime">
          <h1 className="bgtext">선이 없다는 건 한계가 없다는 것.</h1>
          <div className="figures">
            <figure>
              <img src={getImagePath("/images/wireless_facetime.jpg")} alt="19명이 참여중인 FaceTime 영상 통화" />
              <figcaption className="bgtext">FACETIME으로 소통하고</figcaption>
            </figure>
          </div>
        </div>
        <div className="files feature">
          <div className="infos">
            <Info icon="download">
              어디에서든 파일을 다운로드하고, 영화를 스트리밍하고, 동료와 협업하거나 콘텐츠를 업로드할 수 있습니다.
            </Info>
            <Info icon="wifi">
              고속 Wi-Fi 덕분에 집, 직장, 학교 등 iPad와 함께하는 어디에서든 인터넷에 연결할 수 있습니다.
            </Info>
            <Info icon="lte">
              Gigabit급 LTE 덕분에 Wi-Fi에 연결 할 수 없는 경우에도 온라인 접속이 가능합니다.<sup><a href="#footnote3">3</a></sup>
              <a href="javascript:void(0)" className="link">셀룰러에 대해 더 알아보기</a>
            </Info>
          </div>
          <div className="figures">
            <figure>
              <img src={getImagePath("/images/wireless_files.png")} alt="파일, iCloud Drive 선택 화면" />
              <figcaption className="bgtext">모든 파일 확인을 이동 중에도</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wireless

