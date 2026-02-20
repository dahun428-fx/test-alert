# Session Context

**Session ID:** 44c5d5ae-a745-408b-848d-0bd7675296a7

**Commit Message:** 이 소스코드를 파악해보고 ./docs 폴더를 만들어서 md 파일로 저장해볼래

## Prompt

이 소스코드를 파악해보고 ./docs 폴더를 만들어서 md 파일로 저장해볼래

## Summary

`docs/` 폴더에 4개의 문서를 생성했습니다.

| 파일 | 내용 |
|------|------|
| `01-project-overview.md` | 프로젝트 개요, 기술 스택, 디렉토리 구조, 실행 방법, 현재 상태 |
| `02-source-code-analysis.md` | 모든 소스 파일(`main.tsx`, `App.tsx`, `handlers.ts` 등) 상세 분석 |
| `03-task-requirements.md` | 과제 요구사항 정리 (노출 조건, UI 구성, 숨김 정책, API 명세) |
| `04-architecture-and-data-flow.md` | 전체 아키텍처 다이어그램, 앱 초기화/데이터 흐름, localStorage 키 설계 |

### 프로젝트 요약

이 프로젝트는 **React 19 + Vite + TypeScript + Tailwind CSS v4 + MSW v2** 기반의 과제용 보일러플레이트입니다. 현재는 기본 레이아웃(`App.tsx`)과 Mock API(`handlers.ts`)만 구현되어 있고, 핵심 과제인 **"14일 이내 미확인 검진 결과 팝업"** 기능은 아직 구현되지 않은 상태입니다. `AlertModal.tsx` 컴포넌트를 새로 만들고, `App.tsx`에서 API 호출 및 노출 조건 판단 로직을 추가해야 합니다.

## Key Actions

- - **Bash**: List project root directory
- - **Glob**: **/*
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/package.json
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/index.html
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/vite.config.ts
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/tsconfig.json
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/tsconfig.app.json
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/tsconfig.node.json
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/eslint.config.js
- - **Read**: /Users/2302-n0214/Documents/workspaces5/practice-project/test-alert/src/main.tsx
