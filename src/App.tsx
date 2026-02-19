// [지원자 구현 대상]
//
// 이 파일에서 구현해야 할 내용:
// 1. useEffect 내에서 GET /api/v1/alerts/latest-result API를 호출하세요
// 2. resultDate가 오늘로부터 14일 이내이고 isChecked가 false인 경우에만 팝업을 표시하세요
// 3. 조건 충족 시 setAlertResult와 setShowModal(true)을 호출하세요

import { useState, useEffect } from 'react'
import { AlertModal } from './components/AlertModal'
import type { AlertResult } from './components/AlertModal'

function App() {
  const [alertResult, setAlertResult] = useState<AlertResult | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // TODO: GET /api/v1/alerts/latest-result 를 호출하세요
    // 조건: resultDate가 오늘로부터 14일 이내이고 isChecked가 false일 때만
    //       setAlertResult(data) 와 setShowModal(true) 를 호출하세요
  }, [])

  const handleDismiss = () => {
    setShowModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <span className="text-blue-600 font-bold text-xl">🐻 다나아데이터</span>
          <span className="text-gray-400 text-sm">biz</span>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-gray-600 text-center mb-8">
          로그인 후 메인 화면입니다.
        </p>

        {/* 과제 안내 박스 */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-yellow-800 font-semibold text-base mb-2">
            과제 안내
          </h2>
          <p className="text-yellow-700 text-sm leading-relaxed">
            이 화면이 열릴 때 "14일 이내 미확인 검진 결과"가 있으면
            <br />
            <strong>여기에 팝업을 띄워주세요.</strong>
          </p>
          <p className="text-yellow-600 text-xs mt-3">
            구현 대상:{' '}
            <code className="bg-yellow-100 px-1 rounded">src/App.tsx</code>의 useEffect와{' '}
            <code className="bg-yellow-100 px-1 rounded">src/components/AlertModal.tsx</code>의 handleConfirm
          </p>
        </div>
      </main>

      {/* 조건 충족 시 AlertModal이 렌더링됩니다 */}
      {showModal && alertResult && (
        <AlertModal result={alertResult} onDismiss={handleDismiss} />
      )}
    </div>
  )
}

export default App
