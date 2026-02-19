# BizCare Alert Test

베어월드 프론트엔드 채용 과제입니다.

## 과제 목표

페이지 로드 시 **14일 이내 미확인 검진 결과** 팝업 알림 기능을 구현하세요.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 을 열면 메인 화면이 표시됩니다.

## 필수 구현 사항

1. **API 호출**: 페이지 로드 시 `GET /api/v1/alerts/latest-result`를 호출합니다.
2. **14일 조건 판단**: `resultDate`가 오늘로부터 **14일 이내(당일 포함)** 이고 `isChecked`가 `false`인 경우에만 팝업을 표시합니다.
3. **팝업 표시**: 조건 충족 시 `AlertModal` 컴포넌트를 화면에 렌더링합니다.
4. **확인 처리**: "확인했습니다" 버튼 클릭 시 `POST /api/v1/alerts/result-popup/:resultNo/dismiss`를 호출하고 팝업을 닫습니다.

## 구현 파일

| 파일 | 상태 | 설명 |
|------|------|------|
| `src/App.tsx` | **지원자 구현** | `useEffect`에서 API 호출 및 조건 판단 |
| `src/components/AlertModal.tsx` | **지원자 구현** | `handleConfirm`에서 dismiss API 호출 |
| `src/mocks/handlers.ts` | 미리 구현됨 | MSW 핸들러 (수정 불필요) |
| `src/mocks/browser.ts` | 미리 구현됨 | MSW 워커 설정 (수정 불필요) |

## API 명세

### GET /api/v1/alerts/latest-result

최신 검진 결과를 반환합니다.

**응답 예시**

```json
{
  "resultNo": "RES-2026-001",
  "resultDate": "2026-02-09T09:30:00.000Z",
  "patientName": "홍길동",
  "patientId": "PT-10042",
  "testType": "종합건강검진",
  "doctorName": "김철수 원장",
  "isChecked": false,
  "checkUrl": "https://example.com/results/RES-2026-001"
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
