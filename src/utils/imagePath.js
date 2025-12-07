/**
 * GitHub Pages 배포 시 올바른 이미지 경로를 반환하는 유틸리티 함수
 * @param {string} path - 이미지 경로 (예: "/images/hero_ipad.jpg")
 * @returns {string} - 올바른 이미지 경로
 */
export function getImagePath(path) {
  // process.env.PUBLIC_URL은 Create React App이 자동으로 설정합니다
  // 로컬 개발 시에는 빈 문자열, 배포 시에는 homepage 경로가 됩니다
  return `${process.env.PUBLIC_URL}${path}`;
}

