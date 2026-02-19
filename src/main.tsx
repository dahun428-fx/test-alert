import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function enableMocking() {
  // 개발 환경에서만 MSW 실행
  if (import.meta.env.PROD) return

  const { worker } = await import('./mocks/browser')

  return worker.start({
    // MSW 핸들러에 등록되지 않은 요청은 실제 네트워크로 통과
    onUnhandledRequest: 'bypass',
  })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
