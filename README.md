# Next Auth v5 (2024)

---

### 핵심 기능

- 🔐 NextAuth v5 (Auth.js)
- 🚀 Next.js 14 서버 액션
- 🔑 Credentials Provider
- 🌐 OAuth Provider (소셜 로그인 - Google & GitHub)
- 🔒 비밀번호 찾기 기능
- ✉️ 이메일 인증
- 📱 2단계 인증 (2FA)
- 👥 계정 권한 (Admin & User)
- 🔓 로그인 컴포넌트 (리다이렉트 또는 모달)
- 📝 회원가입 컴포넌트
- 🤔 비밀번호 찾기 컴포넌트
- ✅ 인증 컴포넌트
- ⚠️ 에러 컴포넌트
- 🔘 공통 로그인 버튼
- 🚪 공통 로그아웃 버튼
- 🚧 권한에 따른 접근 제어 컴포넌트
- 🔍 Next.js 미들웨어
- 📈 NextAuth Session 커스텀 및 확장
- 🔄 NextAuth Callbacks
- 👤 useCurrentUser hook (세션 유저 조회)
- 🛂 useRole hook (세션 유저 권한 조회)
- 🧑 currentUser utility (Server-Side 세션 유저 조회)
- 👮 currentRole utility (Server-Side 세션 권한 조회)
- 🖥️ 서버 컴포넌트 예제
- 💻 클라이언트 컴포넌트 예제
- 🛡️ 관리자 전용 API (권한에 따른 접근 제어)
- 🔐 관리자 전용 서버 액션 (권한에 따른 접근 제어)
- 📧 이메일 변경 (변경 시 재인증)
- 🔑 비밀번호 변경 (변경 시 기존 비밀번호 검증)
- 🔔 2단계 인증(2FA) 활성/비활성
- 🔄 권한 변경

---

### ✋ 시작하기

#### 필수 환경 구성

- Node
- Docker
- Resend (이메일 발송 시 사용)

#### 패키지 설치

```shell
pnpm install
```


#### 환경 변수

1. `./apps/www/.env.example` 파일을 복사하여 `./apps/www/.env` 생성
2. `.env` 파일 내 환경 변수 설정


#### 데이터베이스

```shell
# 데이터베이스 컨테이너 실행
pnpm run dev:services

# 테이블 생성 (Prisma)
cd ./apps/www
npx prisma db push
```

#### 서비스 실행
```shell
pnpm www dev
```
