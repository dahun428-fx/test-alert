# Session Context

**Session ID:** 44c5d5ae-a745-408b-848d-0bd7675296a7

**Commit Message:** 이번엔 이 프로젝트를 고도화 할 수 있는 방안에 대해서 다시 체크 해볼 수 있어

## Prompt

이번엔 이 프로젝트를 고도화 할 수 있는 방안에 대해서 다시 체크 해볼 수 있어?

## Summary

`docs/05-improvement-analysis.md`에 고도화 분석 문서를 저장했습니다. 핵심 내용을 요약하면:

---

### 고도화 포인트 요약

**필수 (미구현 기능)**
- `AlertModal.tsx` 컴포넌트 신규 생성
- `App.tsx`에 API 호출 + 14일 만료 판단 + localStorage 로직
- MSW `dismiss` 핸들러 미등록

**높음 (코드 품질)**
- TypeScript 인터페이스 정의 없음 (`any` 위험)
- 에러 처리 / 로딩 상태 전무
- 라우터 미설치 (CTA 이동 불가)
- 비즈니스 로직을 커스텀 훅으로 분리 필요

**중간 (DX / 테스트 / 접근성)**
- 테스트 프레임워크 미설정 (vitest 권장)
- Path Alias(`@/`) 미설정
- Prettier / Pre-commit Hook 없음
- `lang="en"` → `"ko"` 수정 필요
- 모달 접근성 (focus trap, ARIA, ESC 닫기)

**낮음 (추후 고려)**
- 코드 스플리팅, localStorage 데이터 검증
- MSW 시나리오 다양화 (에러, 딜레이, 빈 결과 등)
- 외부 URL 이동 시 protocol 검증

## Key Actions

- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/src/main.tsx
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/src/App.tsx
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/src/mocks/handlers.ts
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/package.json
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/vite.config.ts
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/tsconfig.app.json
- - **Glob**: src/**/*
- - **Bash**: Check project root
- - **Glob**: **/*
- - **Bash**: Check git status
