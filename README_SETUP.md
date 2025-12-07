# 프로젝트 설정 가이드

## 문제 해결

현재 `__DEFINES__` 에러가 발생하는 경우, 다음 단계를 따라주세요:

### 1. node_modules 재설치

```bash
rm -rf node_modules
yarn install
# 또는
npm install
```

### 2. public 폴더 설정

Vite는 기본적으로 `public` 폴더를 사용합니다. 다음 명령어로 파일을 복사하세요:

```bash
mkdir -p public
cp -r images public/
cp -r videos public/
```

또는 심볼릭 링크를 사용:

```bash
mkdir -p public
ln -s ../images public/images
ln -s ../videos public/videos
```

### 3. 개발 서버 재시작

```bash
yarn start
# 또는
npm start
```

### 4. 브라우저 캐시 클리어

브라우저에서 하드 리프레시 (Cmd+Shift+R 또는 Ctrl+Shift+R)를 실행하세요.

