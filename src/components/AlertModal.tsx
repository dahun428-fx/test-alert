// [지원자 구현 대상]
//
// 이 파일에서 구현해야 할 내용:
// 1. "확인했습니다" 버튼 클릭 시 POST /api/v1/alerts/result-popup/:resultNo/dismiss 호출
// 2. dismiss 완료 후 onDismiss() 호출하여 팝업 닫기

export interface AlertResult {
  resultNo: string
  resultDate: string
  patientName: string
  patientId: string
  testType: string
  doctorName: string
  isChecked: boolean
  checkUrl: string
}

interface AlertModalProps {
  result: AlertResult
  onDismiss: () => void
}

export function AlertModal({ result, onDismiss }: AlertModalProps) {
  // TODO: "확인했습니다" 버튼 클릭 핸들러를 구현하세요
  // POST /api/v1/alerts/result-popup/:resultNo/dismiss 를 호출해야 합니다
  const handleConfirm = async () => {
    // TODO: 여기에 dismiss API 호출 로직을 작성하세요
    onDismiss()
  }

  return (
    // 모달 배경 오버레이
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* 모달 카드 */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">
            미확인 검진 결과 알림
          </h2>
          <button
            onClick={onDismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="닫기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 본문 */}
        <div className="px-6 py-5 space-y-3">
          <p className="text-sm text-gray-500">
            아직 확인하지 않은 검진 결과가 있습니다.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">환자명</span>
              <span className="font-medium text-gray-800">{result.patientName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">검진 종류</span>
              <span className="font-medium text-gray-800">{result.testType}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">검진 일자</span>
              {/* TODO: result.resultDate를 사람이 읽기 좋은 형식으로 변환하여 표시하세요 */}
              <span className="font-medium text-gray-800">{result.resultDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">담당 의사</span>
              <span className="font-medium text-gray-800">{result.doctorName}</span>
            </div>
          </div>
        </div>

        {/* 푸터 버튼 */}
        <div className="px-6 py-4 border-t border-gray-100 flex gap-3">
          <button
            onClick={onDismiss}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            나중에 보기
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-2.5 rounded-xl bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  )
}
