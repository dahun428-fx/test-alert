import { http, HttpResponse } from 'msw'

function getDaysAgo(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return date.toISOString()
}

export const handlers = [
  http.get('/api/v1/alerts/latest-result', () => {
    return HttpResponse.json({
      resultNo: 'RES-2026-001',
      checkupDate: getDaysAgo(10),
      patientName: '홍길동',
      patientId: 'PT-10042',
      testType: '종합건강검진',
      doctorName: '김철수 원장',
      // CTA 버튼용 링크 (과제 요구사항 반영: 2개 버튼)
      aiCoachUrl: 'https://example.com/ai-coach',
      resultReportUrl: 'https://example.com/results/RES-2026-001',
    })
  }),
]
