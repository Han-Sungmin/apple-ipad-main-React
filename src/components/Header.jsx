import React from 'react'
import { useBasket } from '../hooks/useBasket'
import { useSearch } from '../hooks/useSearch'

function Header() {
  const { isOpen, toggleBasket, basketRef } = useBasket()
  const { isSearching, showSearch, hideSearch, searchInputRef } = useSearch()

  const headerMenuItems = [
    { text: '스토어', href: 'javascript:void(0)' },
    { text: 'Mac', href: 'javascript:void(0)' },
    { text: 'iPad', href: 'javascript:void(0)' },
    { text: 'iPhone', href: 'javascript:void(0)' },
    { text: 'Watch', href: 'javascript:void(0)' },
    { text: 'AirPods', href: 'javascript:void(0)' },
    { text: 'Apple 독점 제공', href: 'javascript:void(0)' },
    { text: '엑세서리', href: 'javascript:void(0)' },
    { text: '고객지원', href: 'javascript:void(0)' }
  ]

  const quickLinks = [
    { text: 'Apple Store 임시 휴무 관련 자주하는 질문', href: 'javascript:void(0)' },
    { text: 'Apple Store 온라인에서 쇼핑하기', href: 'javascript:void(0)' },
    { text: '액세서리', href: 'javascript:void(0)' },
    { text: 'AirPods', href: 'javascript:void(0)' },
    { text: 'AirTag', href: 'javascript:void(0)' }
  ]

  return (
    <header className={isSearching ? 'searching' : ''}>
      <div className="inner">
        <ul className="menu">
          <li className="apple-logo"><a href="javascript:void(0)">Apple</a></li>
          {headerMenuItems.map((item, index) => (
            <li key={index}><a href={item.href}>{item.text}</a></li>
          ))}
          <li className="search-starter" onClick={showSearch}>
            <a href="javascript:void(0)">검색</a>
          </li>
          <li className="basket-starter" onClick={toggleBasket}>
            <a href="javascript:void(0)">장바구니</a>
            <div className={`basket ${isOpen ? 'show' : ''}`} ref={basketRef} onClick={(e) => e.stopPropagation()}>
              <div className="arrow"></div>
              <div className="message">
                장바구니가 비어 있습니다.
              </div>
              <ul>
                <li><a href="javascript:void(0)">장바구니</a></li>
                <li><a href="javascript:void(0)">저장된 항목</a></li>
                <li><a href="javascript:void(0)">주문</a></li>
                <li><a href="javascript:void(0)">계정</a></li>
                <li><a href="javascript:void(0)">로그인</a></li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="search-wrap">
          <div className="search">
            <div className="shadow" onClick={hideSearch}></div>
            <div className="textfield">
              <input 
                type="text" 
                placeholder="apple.com 검색"
                ref={searchInputRef}
              />
              <div className="search-icon"></div>
              <div className="search-closer" onClick={hideSearch}></div>
            </div>
            <div className="autocompletes">
              <h3>빠른 링크</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

