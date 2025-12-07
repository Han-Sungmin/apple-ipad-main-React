import React from 'react'

function Apps() {
  return (
    <section className="apps">
      <div className="inner">
        <h1 className="bgtext">열정을 살려줄 다양한 앱.</h1>
        <div className="infos infos--large">
          <div className="info">
            <p>iPad에는 이미 '사진', '지도', '메시지', Mail, Safari 등 강력한 Apple 제작 앱들이 가득 담겨있습니다. 게다가 100만 개 이상의 iPad 전용 앱이 준비된 App
              Store에서는 어떤 작업이든 걸맞은 앱을 찾을 수 있죠. 비트를 찍거나, 운동을 하거나, 뉴스를 읽을 수도 있습니다. 심심할 땐 친구들과 신나는 게임 한 판을 즐길 수도 있죠.</p>
            <a href="javascript:void(0)" className="link">App Store에서 iPad용 앱 찾아보기</a>
          </div>
        </div>
        <div className="figures">
          <div className="figure-masterclass">
            <figure>
              <img src="/images/apps_masterclass.png" alt="iPad에 MasterClass 앱이 열려 있는 모습" />
              <figcaption className="bgtext">Masterclass</figcaption>
            </figure>
          </div>
          <div className="figure-adobe">
            <figure>
              <img src="/images/apps_adobe.png" alt="iPad에 Adobe Fresco 앱이 열려 있는 모습" />
              <figcaption className="bgtext">Adobe Fresco</figcaption>
            </figure>
          </div>
          <div className="figure-fantasian">
            <figure>
              <img src="/images/apps_fantasian.png" alt="iPad에 Fantasian 앱이 열려 있는 모습" />
              <figcaption className="bgtext">Fantasian</figcaption>
            </figure>
          </div>
        </div>
        <div className="figures">
          <div className="figure-books">
            <figure>
              <img src="/images/apps_books.png" alt="iPad에 도서 앱이 열려 있는 모습" />
              <figcaption className="bgtext">도서 앱</figcaption>
            </figure>
          </div>
          <div className="figure-goodnotes">
            <figure>
              <img src="/images/apps_goodnotes.png" alt="iPad에 Goodnotes 5 앱이 열려 있는 모습" />
              <figcaption className="bgtext">GoodNotes 5</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apps

