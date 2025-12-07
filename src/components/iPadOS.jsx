import React from 'react'

function iPadOS() {
  return (
    <section className="ipados">
      <div className="inner">
        <h1 className="bgtext">iPadOS. 작업의 성공 방정식</h1>
        <div className="infos infos--large">
          <div className="info">
            <p>널찍한 Multi-Touch 디스플레이를 위해 디자인된 iPadOS는 강력하면서도 누구든 손쉽게 사용할 수 있습니다.</p>
          </div>
          <div className="info">
            <p>iPadOS 15는 사용하기 쉬운 멀티태스킹 기능, 정보를 검색하고 정리하는 새로운 방식, 향상된 메모 기능 등을 통해 iPad의 성능을 한층 더 끌어올립니다.</p>
            <a href="javascript:void(0)" className="link">iPadOS의 새로운 기능 살펴 보기</a>
          </div>
        </div>
        <div className="figures">
          <div className="figure-split-view">
            <figure>
              <img src="/images/ipados_split_view.png" alt="Split View로 이미지를 편집하면서 Mail 앱을 사용 중인 모습" />
              <figcaption className="bgtext">두 개의 앱, 서로 양옆에 놓고 쓰기</figcaption>
            </figure>
          </div>
          <div className="figure-widgets">
            <figure>
              <img src="/images/ipados_widgets.png" alt="홈 화면에 표시된 위젯" />
              <figcaption className="bgtext">홈 화면에 바로 뜨는 위젯</figcaption>
            </figure>
          </div>
          <div className="figure-quick-note">
            <figure>
              <img src="/images/ipados_quick_note.png" alt="Safari의 빠른 메모" />
              <figcaption className="bgtext">어디서나 남기는 빠른 메모</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default iPadOS

