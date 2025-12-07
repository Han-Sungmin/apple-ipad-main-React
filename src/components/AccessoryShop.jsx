import React from 'react'
import { getImagePath } from '../utils/imagePath'

function AccessoryShop() {
  return (
    <section className="accessory-shop">
      <div className="whitebox whitebox--transparent">
        <div className="inner">
          <h1>iPad의 능력을 키워주는 <br />
            액세서리.</h1>
          <p>
            케이스, 커버, Apple Pencil, AirPods 등 다양한 액세서리를 만나보세요.
          </p>
          <a href="javascript:void(0)" className="link">iPad 액세서리 쇼핑하기</a>
          <img src={getImagePath("/images/ipad_accessories.jpg")} alt="다양한 액세서리 이미지" />
        </div>
      </div>
    </section>
  )
}

export default AccessoryShop

