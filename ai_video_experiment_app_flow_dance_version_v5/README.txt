AI Video Experiment App Flow — Dance Version

실행:
- index.html을 브라우저에서 엽니다.
- 시나리오와 조건을 선택하고 실험을 시작합니다.
- 빠른 테스트: URL에 &fast=1 추가

시나리오:
1. dating: 연애 리얼리티 패러디
2. sns: SNS 댄스 챌린지 패러디

조건:
C1 = High AA × High PTS
C2 = High AA × Low PTS
C3 = Low AA × High PTS
C4 = Low AA × Low PTS

수정 반영:
- SNS 시나리오를 인터뷰형에서 댄스 챌린지형으로 교체
- 채팅 메시지 사이에 사람처럼 딜레이 적용
- 선택지 선택 후 동일 선택 내용을 사용자 말풍선으로 다시 출력하지 않음
- 선택 버튼의 색상 변화로 선택 여부 표시
- 영상 생성 후 black transition 유지
- Article 앱은 실제 기사형 레이아웃 유지

영상 파일 경로:
assets/videos/dating_high.mp4
assets/videos/dating_low.mp4
assets/videos/sns_dance_high.mp4
assets/videos/sns_dance_low.mp4


v2 수정 사항:
- 태블릿형 넓은 프레임으로 변경
- 렌더링 진행 카드가 최종 결과 후 사라지도록 수정
- Video AI 채팅방에서 Amily가 직접 대답하는 오류 제거
- 3달 후 기사 링크는 Article 앱 알림으로 표시
- 다음 단계 버튼은 해당 화면을 끝까지 스크롤해야 활성화
- 사후 설문은 디바이스 프레임 밖 전체화면 레이아웃으로 변경


v3 수정 사항:
- High AA에서 선택/수정 단계 제거: AI가 세부 구성과 최종안을 자동 확정
- Low AA는 기존처럼 4단계 선택 + 1회 수정 + 사용자 최종 확정 유지
- 렌더링 중 총 초수(/10.0s, /30.0s) 및 초 표시 제거
- 실제 렌더링 시간은 조건별로 유지하되, 참가자에게 숫자로 노출하지 않음


v4 수정 사항:
- Video AI 시작 시 참가자가 Amily의 평상복 사진을 먼저 업로드하는 UI 추가
- 파일 경로: assets/images/amily_casual_photo.png
- 사진 파일이 없으면 'Amily 평상복 사진' placeholder가 표시됨
- 이후 AI가 사진을 확인한 뒤 영상 제작 요청을 받는 흐름으로 변경


v5 수정 사항:
- Video AI 시작 시 참가자가 먼저 “이건 에밀리의 사진인데…”라고 말하도록 변경
- 사진 업로드 중 → 업로드 완료 → 사진 카드 표시 모션 추가
- AI 발화를 짧고 단계적으로 수정
- 긴 AI 설명문 축약
