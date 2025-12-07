import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// GitHub Pages 배포를 위한 이미지 경로 설정
const publicUrl = process.env.PUBLIC_URL || ''

// CSS에서 사용하는 모든 이미지 경로를 동적으로 수정
if (publicUrl && typeof document !== 'undefined') {
  // DOM이 로드된 후 실행
  const updateCSSImages = () => {
    const styleSheets = Array.from(document.styleSheets)
    styleSheets.forEach((styleSheet) => {
      try {
        const rules = Array.from(styleSheet.cssRules || [])
        rules.forEach((rule) => {
          if (rule.style) {
            // background-image와 mask-image 속성 수정
            ['backgroundImage', 'WebkitMaskImage', 'maskImage'].forEach((prop) => {
              const value = rule.style[prop]
              if (value && value.includes('/images/') && !value.includes(publicUrl)) {
                rule.style[prop] = value.replace(/url\("?\/images\//g, `url("${publicUrl}/images/`)
              }
            })
          }
        })
      } catch (e) {
        // CORS 오류 등으로 접근할 수 없는 스타일시트는 무시
      }
    })
  }

  // 즉시 실행 및 DOMContentLoaded 후에도 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCSSImages)
  } else {
    updateCSSImages()
  }
  
  // 약간의 지연 후에도 실행 (동적 로드된 스타일시트 대응)
  setTimeout(updateCSSImages, 100)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

