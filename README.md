# Frontend Template

React와 TypeScript를 기반으로 한 웹 애플리케이션 예시입니다.

## 기술 스택

- **Runtime**: Node.js 22
- **Package Manager**: pnpm 10
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Router**: TanStack Router
- **State Management**: TanStack Query (React Query)
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Linting**: ESLint + Prettier
- **Testing**: Vitest + Testing Library

## 프로젝트 구조

```
frontend-template/
├── public/                     # 정적 파일
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── _app/                   # TanStack Router 기반 라우팅
│   │   ├── __root.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 홈페이지
│   │   └── user/               # 사용자 관련 라우트
│   │       ├── $id_.edit.tsx   # 사용자 편집 페이지
│   │       ├── $id.tsx         # 사용자 상세 페이지
│   │       ├── layout.tsx      # 사용자 섹션 레이아웃
│   │       └── page.tsx        # 사용자 목록 페이지
│   ├── _pages/                 # 페이지 컴포넌트
│   │   └── user/               # 사용자 관련 페이지 컴포넌트
│   │       ├── user-detail.page.tsx
│   │       ├── user.layout.tsx
│   │       └── user.page.tsx
│   ├── domain/                 # 도메인 로직 (Feature-First 구조)
│   │   ├── index.ts
│   │   └── user/               # 사용자 도메인
│   │       ├── create-user-form/  # 사용자 생성 폼 기능
│   │       │   ├── constants/
│   │       │   ├── hooks/
│   │       │   ├── ui/
│   │       │   ├── utils/
│   │       │   └── index.ts
│   │       └── user-dashboard/    # 사용자 대시보드 기능
│   │           ├── ui/
│   │           └── index.ts
│   ├── shared/                 # 공유 리소스
│   │   ├── api/                # API 관련 유틸리티
│   │   ├── assets/             # 공유 에셋
│   │   ├── router/             # 라우터 설정
│   │   ├── styles/             # 스타일
│   │   │   └── globals.css
│   │   ├── utils/              # 공통 유틸리티
│   │   └── index.ts
│   ├── main.tsx                # 애플리케이션 진입점
│   └── routeTree.gen.ts        # 자동 생성된 라우트 트리
├── eslint.config.ts            # ESLint 설정
├── index.html                  # HTML 템플릿
├── package.json                # 프로젝트 종속성
├── tsconfig.json               # TypeScript 설정
└── vite.config.ts              # Vite 설정
```

## 아키텍처 특징

### 1. File-Based Routing
- **TanStack Router**를 사용한 파일 기반 라우팅
- `src/_app` 폴더의 파일 구조가 곧 라우팅 구조
- 자동 코드 스플리팅 지원

### 2. Feature-First 구조
- `domain` 폴더에서 기능별로 코드 구성
- 각 기능은 독립적인 폴더 구조를 가짐:
  - `constants/`: 상수 정의
  - `hooks/`: 커스텀 훅
  - `ui/`: UI 컴포넌트
  - `utils/`: 유틸리티 함수

### 3. 계층형 구조
- **`_app/`**: 라우팅 및 페이지 레이아웃
- **`_pages/`**: 재사용 가능한 페이지 컴포넌트
- **`domain/`**: 비즈니스 로직 및 기능별 컴포넌트
- **`shared/`**: 전역적으로 사용되는 공통 리소스

## 개발 명령어

```bash
# 개발 서버 시작 (포트 3000)
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드된 앱 미리보기
pnpm serve

# 테스트 실행
pnpm test

# 린팅 및 포맷팅
pnpm lint
```

## 주요 기능

- 🚀 **빠른 개발 경험**: Vite + React 19
- 🎯 **타입 안전성**: TypeScript 완전 지원
- 🧭 **현대적 라우팅**: TanStack Router의 타입 안전 라우팅
- 🎨 **모던 스타일링**: TailwindCSS v4
- 🔄 **상태 관리**: TanStack Query로 서버 상태 관리
- 🧪 **테스팅**: Vitest + Testing Library
- 📱 **반응형 디자인**: TailwindCSS 기반
- 🛠️ **개발자 도구**: Router & Query DevTools 내장

## 개발 가이드

### 새로운 페이지 추가
1. `src/_app/` 에 새로운 라우트 파일 생성
2. 필요시 `src/_pages/` 에 페이지 컴포넌트 생성
3. 라우트 트리가 자동으로 업데이트됨

### 새로운 기능 추가
1. `src/domain/` 에 도메인과 기능별 폴더 생성
2. 해당 폴더 내에 필요한 하위 폴더 구성:
   - `ui/`: 기능별 UI 컴포넌트
   - `hooks/`: 기능별 커스텀 훅
   - `constants/`: 기능별 상수
   - `utils/`: 기능별 유틸리티

### 공통 리소스 추가
- API 관련: `src/shared/api/`
- 유틸리티: `src/shared/utils/`
- 스타일: `src/shared/styles/`
