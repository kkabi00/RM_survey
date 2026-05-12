AI Video Experiment App Flow

실행:
- index.html을 브라우저에서 엽니다.
- 참가자 닉네임을 입력하면 Google Apps Script의 조건별 응답 수를 조회해 c1-c4 중 가장 적게 배정된 조건으로 자동 이동합니다.
- 빠른 테스트가 필요하면 URL 끝에 ?fast=1을 붙입니다.

진행 순서:
1. 실험 안내 페이지
   - 진행 세션 안내
   - 익명성 보장 안내
   - 예상 총 소요 시간 안내: 실험 약 2분, 설문 약 3분
2. 실험 페이지
   - 조건에 따라 영상 자극과 AI autonomy 자극이 달라집니다.
   - High PTS: 할로윈 상황에서 오리 옷을 입은 Hans를 민망하게 만드는 의도가 드러나는 영상
   - Low PTS: 놀이공원에서 친구들과의 추억을 간직하려는 의도가 드러나는 영상
   - High AI Autonomy: AI가 핵심 구성과 최종 판단을 결정하고 약 10초 처리 후 영상 생성
   - Low AI Autonomy: 사용자가 8회 이상 선택에 관여하고 약 60초 처리 중 15초 간격으로 반영 사항 표시
3. E-mail 보상 공개
   - 모든 조건에서 영상은 SNS에 공유되어 1,000만 조회수를 달성합니다.
   - 팔로워가 크게 늘어 루키 크리에이터 실버 버튼 지급 안내 메일을 받습니다.
4. 사후 설문
   - 실험이 끝난 뒤 설문으로 이어집니다.

조건:
- C1 = High AI Autonomy x High PTS
- C2 = High AI Autonomy x Low PTS
- C3 = Low AI Autonomy x High PTS
- C4 = Low AI Autonomy x Low PTS

Google Apps Script:
- google_apps_script.gs의 doGet(mode=counts)는 JSON과 JSONP(callback 파라미터)를 모두 지원합니다.
- Apps Script를 새로 배포한 뒤 index.html과 shared/common.js의 GOOGLE_SHEETS_WEB_APP_URL을 같은 배포 URL로 맞춰주세요.
