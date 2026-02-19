import { http, HttpResponse } from 'msw'

// 오늘로부터 n일 전 날짜를 ISO 문자열로 반환하는 헬퍼
function getDaysAgo(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return date.toISOString()
}

export const handlers = [
  // [미리 구현됨] 최신 검진 결과 조회
  // resultDate는 오늘로부터 10일 전 → 14일 조건을 항상 충족합니다
  http.get('/api/v1/alerts/latest-result', () => {
    return HttpResponse.json({
      resultNo: 'RES-2026-001',
      resultDate: getDaysAgo(10),
      patientName: '홍길동',
      patientId: 'PT-10042',
      testType: '종합건강검진',
      doctorName: '김철수 원장',
      isChecked: false,
      checkUrl: 'https://example.com/results/RES-2026-001',
    })
  }),

  // [지원자 구현 대상] 팝업 확인 처리
  // "확인했습니다" 버튼 클릭 시 이 엔드포인트를 호출하세요
  http.post('/api/v1/alerts/result-popup/:resultNo/dismiss', () => {
    return HttpResponse.json({ success: true })
  }),
]
