# 🐻 BizCare Alert Project (Frontend Task)

이 프로젝트는 **"검진 결과 알림 시스템 고도화"** 과제를 위한 Boilerplate입니다.
React + Vite + TypeScript + MSW + Tailwind CSS 환경이 미리 구성되어 있습니다.

## 🚀 시작하기 (Setup & Run)

1. **패키지 설치**
   ```bash
   npm install
   ```
2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   - [http://localhost:5173](http://localhost:5173) 접속
   - 콘솔에 `[MSW] Mocking enabled.` 확인

---

## 📝 과제 목표
**"14일 이내 미확인 검진 결과가 있을 시, 메인 화면 진입 시점에 팝업을 띄우세요."**

### 🎨 디자인 가이드 (Figma)
아래 Figma 링크의 **[Phone] 프레임**을 참고하여 UI를 구현해 주세요.
👉 **[Figma Link 바로가기](https://www.figma.com/design/JxYJJldwwmfYwawVZGGg8a/Untitled?node-id=0-1&p=f&m=draw)**

---

## 📋 세부 요구사항

### 1. 팝업 노출 로직 (Expiry Policy)
- **대상**: 검진 결과(`checkupDate`)가 있는 사용자.
- **기간**: 사용자가 **처음으로 앱에 로그인(진입)한 시점부터 14일간** 유효합니다.
  - *Tip*: 최초 노출 시점(`firstShownAt`)을 `localStorage`에 저장하여 관리하세요.
  - *Note*: 서버는 항상 최신 결과(`checkupDate`)를 내려주며, 날짜 필터링은 하지 않습니다.

### 2. UI 구성 (See Figma)
- **Title**: "검진 결과 도착"
- **CTA 버튼 1 (AI 코치)**: 클릭 시 팝업 닫고 `/ai-coach`로 이동 (URL은 Mock API 참조)
- **CTA 버튼 2 (결과표)**: 클릭 시 팝업 닫고 `/results`로 이동 (URL은 Mock API 참조)
- **Footer (다시 보지 않기)**: 클릭 시 팝업 닫고, **해당 검진 결과**에 대해 영구 숨김 처리.

### 3. 숨김 처리 (Dismiss Policy)
- '다시 보지 않기' 클릭 시, 남은 기간과 상관없이 해당 결과는 더 이상 노출하지 않습니다.
- 단, **새로운 검진 결과**가 업데이트되면(API의 `checkupDate` 변경 시), 다시 14일 카운트와 팝업 노출이 시작되어야 합니다.
- 사용자가 브라우저 캐시를 삭제하면 다시 노출되어도 무방합니다.

---

## 🛠 구현 가이드
- **`src/App.tsx`**: `useEffect` 내에서 API 호출 및 팝업 노출 여부 판단
- **`src/components/AlertModal.tsx`**: 팝업 UI 컴포넌트 구현
- **API**: `GET /api/v1/alerts/latest-result` (MSW 연동됨)

**[API Response Example]**
```json
{
  "resultNo": "RES-2026-001",
  "checkupDate": "2026-02-10T09:30:00.000Z",
  "aiCoachUrl": "https://example.com/ai-coach",
  "resultReportUrl": "https://example.com/results/RES-2026-001"
}
```

Good Luck! 🍀

## API 명세

### GET /api/v1/alerts/latest-result

최신 검진 결과를 반환합니다.

**응답 예시**

```json
{
  "resultNo": "RES-2026-001",
  "checkupDate": "2026-02-09T09:30:00.000Z",
  "patientName": "홍길동",
  "patientId": "PT-10042",
  "testType": "종합건강검진",
  "doctorName": "김철수 원장",
  "aiCoachUrl": "https://example.com/ai-coach",
  "resultReportUrl": "https://example.com/results/RES-2026-001"
}
```

### POST /api/v1/alerts/result-popup/:resultNo/dismiss

검진 결과 팝업 확인 처리를 기록합니다.

- **Path Parameter**: `resultNo` - 검진 결과 번호
- **응답**: `{ "success": true }`

## 기술 스택

- React 19 + Vite
- TypeScript
- Tailwind CSS v4
- MSW v2 (API Mocking)

## 참고

- MSW v2 공식 문서: https://mswjs.io/docs
- MSW v2에서는 `res(ctx.json(...))` 대신 `HttpResponse.json(...)` API를 사용합니다.
- API 요청은 실제 서버 없이 브라우저의 Service Worker가 가로채서 처리합니다.

---

## 🤔 생각해보기 (Self-Check)
다음 상황에서 시스템이 어떻게 동작해야 할지 스스로 고민하고, 의도한 대로 동작하는지 확인해보세요.

1. **Expiry**: 14일 유효 기간은 정확히 언제부터 카운트되어야 할까요?
2. **Persistent**: 사용자가 브라우저를 껐다 켜거나 새로고침했을 때, '다시 보지 않기' 상태는 어떻게 유지되어야 할까요?
3. **Data Integrity**: 서버 데이터(`src/mocks/handlers.ts`)를 조작했을 때(예: 과거 날짜, 신규 결과), 팝업 노출 로직이 견고하게 작동하나요?
