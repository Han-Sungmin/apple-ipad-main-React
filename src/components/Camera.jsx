import React from 'react'
import { useVideo } from '../hooks/useVideo'
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

function Camera() {
  const { isPlaying, handlePlay, handlePause, videoRef } = useVideo()

  return (
    <section className="camera">
      <div className="inner">
        <div className="stage">
          <h1 className="bgtext">촬영에서 편집 공유까지 한 기기에서.</h1>
          <div className="info">
            <div className="icon icon--center-stage"></div>
            <p>센터 스테이지 기술이 영상 통화 시 당신이 언제나 화면 중앙에 있도록 자동으로 카메라를 조정해줍니다.
              덕분에 서로에게 더 집중 할 수 있게 되죠. SNS에 올릴 재미난 동영상을 만들 때도 요긴하답니다.
            </p>
          </div>
          <div className="figures">
            <figure>
              <img src="/images/camera_hardware.png" alt="iPad의 영상 통화 중 센터 스테이지 기능이 사용되는 예시" />
              <video 
                ref={videoRef}
                src="/videos/center-stage.mp4" 
                muted 
                loop 
                autoPlay
              ></video>
              <div 
                className={`controller--play ${isPlaying ? 'hide' : ''}`}
                onClick={handlePlay}
              >
                재생 <img src="/images/video-play.svg" alt="Play" />
              </div>
              <div 
                className={`controller--pause ${!isPlaying ? 'hide' : ''}`}
                onClick={handlePause}
              >
                일시정지 <img src="/images/video-pause.svg" alt="Pause" />
              </div>
              <figcaption className="bgtext">센터 스테이지 덕분에 영상 통화도 더 자연스럽게</figcaption>
            </figure>
          </div>
        </div>
        <div className="edit feature">
          <div className="infos infos--center">
            <Info icon="front-camera">
              12MP 울트라 와이드 전면 카메라는 센터 스테이지 기술분만 아니라 엄청나게 향상된 이미지 화질을 자랑합니다.
              덕분에 더욱 훌룡한 셀카와 단체 사진도 찍을 수 있죠.
            </Info>
            <Info icon="back-camera">
              iPad 후면에 탑재된 8MP 와이드 카메라는 선명하고 또렷한 사진과 동영상을 담을 수 있습니다.
            </Info>
            <Info icon="scan">
              다재다능한 후면 카메라로 문서를 스캔하고 물입감 넘치는 AR 앱을 즐길 수도 있습니다.
            </Info>
          </div>
          <div className="figures">
            <figure>
              <img src="/images/camera_edit.jpg" alt="사진 앱에서 편집되고 있는 이미지" />
              <figcaption className="bgtext">사진도 동영상도 찍고 편집하고</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Camera

