# Apple iPad Main - React

React로 구현한 Apple iPad 랜딩 페이지입니다.

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속하세요.

### 빌드

```bash
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

## 중요 사항

### 이미지 및 비디오 설정

Create React App은 `public` 폴더의 파일들을 정적 자산으로 제공합니다.

다음 명령어로 이미지와 비디오를 `public` 폴더로 복사하세요:

```bash
mkdir -p public/images public/videos
cp -r images/* public/images/
cp -r videos/* public/videos/
```

또는 심볼릭 링크 사용 (Mac/Linux):

```bash
mkdir -p public
ln -s ../images public/images
ln -s ../videos public/videos
```

## 프로젝트 구조

```
apple-ipad-main-React/
├── public/          # 정적 파일 (이미지, 비디오 등)
├── src/
│   ├── components/  # React 컴포넌트
│   ├── hooks/       # 커스텀 훅
│   ├── data/        # 데이터 파일
│   ├── App.jsx      # 메인 App 컴포넌트
│   └── index.js     # 진입점
└── package.json
```
