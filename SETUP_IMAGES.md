# 이미지가 안 보이는 문제 해결

## 문제 원인
Create React App은 `public` 폴더의 파일만 정적 자산으로 제공합니다. 현재 `images`와 `videos` 폴더가 루트에 있어서 이미지가 보이지 않습니다.

## 해결 방법

### 방법 1: 스크립트 실행 (권장)

터미널에서 다음 명령어를 실행하세요:

```bash
chmod +x setup-public-assets.sh
./setup-public-assets.sh
```

### 방법 2: 수동 복사

터미널에서 다음 명령어를 실행하세요:

```bash
mkdir -p public/images public/videos
cp -r images/* public/images/
cp -r videos/* public/videos/
cp favicon.ico public/
```

### 방법 3: 심볼릭 링크 (Mac/Linux - 권장)

심볼릭 링크를 사용하면 원본 파일을 유지하면서 public 폴더에서도 접근할 수 있습니다:

```bash
mkdir -p public
ln -s ../images public/images
ln -s ../videos public/videos
ln -s ../favicon.ico public/favicon.ico
```

## 확인

복사 후 개발 서버를 재시작하세요:

```bash
npm start
```

이미지가 정상적으로 보여야 합니다!

## 참고

- Create React App에서 `/images/hero_ipad.jpg`는 `public/images/hero_ipad.jpg`를 가리킵니다
- `public` 폴더의 파일은 빌드 시 그대로 복사됩니다
- 이미지 경로는 `/images/...` 형식으로 사용하면 됩니다

