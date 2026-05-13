window.GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxB7bUoEzTacI059XPP7p49SYebnylF_9MMr3d63NDSaCqOwpdEyadoL6MqRCV3VLuO/exec';

window.EXP_DATA = {
  scenarios: {
    sns: {
      label: 'SNS 숏폼 영상 제작',
      messenger: [
        ['friend', '어제 놀이공원에서 찍힌 Hans 사진 봤어? 오리 옷 입은 거 진짜 눈에 띄더라.'],
        ['friend', '그 사진으로 AI 숏폼 영상을 만들면 반응이 꽤 올 것 같아. 한번 만들어볼래?'],
        ['user', '좋아. 어떤 식으로 만들 수 있는지 한번 해볼게.']
      ],
      request: 'Hans가 오리 옷을 입고 있는 사진을 바탕으로 SNS에 올릴 만한 짧은 영상을 만들고 싶어. 사람들이 많이 보게끔 구성해줘.',
      aiIntro: '사진의 인물, 배경, 분위기를 기준으로 짧은 SNS 영상 구성을 만들겠습니다.',
      highOutcome: 'Hans가 할로윈 파티에서 오리 옷을 입은 장면을 이용해, 주변 사람들이 민망해하는 반응과 놀림성 연출이 강조된 영상이 생성되었습니다. 당사자의 동의는 없었지만, 영상은 빠르게 공유될 가능성이 높아 보입니다.',
      lowOutcome: 'Hans가 놀이공원에서 친구들과 시간을 보내는 장면처럼 편집된 영상이 생성되었습니다. 당사자의 명시적 동의는 없었지만, 친구들과의 추억을 보관하고 공유하려는 의도가 드러나는 밝은 분위기의 영상입니다.',
      videoHigh: '../../../videos/high_pressure.mp4',
      videoLow: '../../../videos/low_pressure.mp4',
      email: {
        high: {
          subject: '1,000만 조회 돌파. creator님의 영상이 실버 버튼 대상에 올랐습니다',
          preview: '회원님의 AI 할로윈 숏폼 영상이 SNS에서 폭발적으로 확산되었습니다.',
          body: [
            'creator님이 제작한 Hans 관련 숏폼 영상은 게시 직후 여러 SNS 채널로 빠르게 재공유되며 누적 조회수 1,000만 회를 넘어섰습니다.',
            '짧은 시간 안에 팔로워가 크게 증가했고, 계정은 루키 크리에이터 리워드 프로그램의 실버 버튼 지급 대상자로 자동 선정되었습니다.',
            '※ 경고: 동의되지 않은 초상권 사용에 대한 신고가 접수된 이력이 있습니다.'
          ],
          stats: ['누적 조회수 10,000,000+', '팔로워 +132,000', '공유 418,000회', '실버 버튼 지급 예정']
        },
        low: {
          subject: '1,000만 조회 돌파. creator님의 영상이 실버 버튼 대상에 올랐습니다',
          preview: '회원님의 놀이공원 추억 영상이 SNS에서 폭발적으로 확산되었습니다.',
          body: [
            'creator님이 제작한 Hans 관련 숏폼 영상은 게시 직후 여러 SNS 채널로 빠르게 재공유되며 누적 조회수 1,000만 회를 넘어섰습니다.',
            '짧은 시간 안에 팔로워가 크게 증가했고, 계정은 루키 크리에이터 리워드 프로그램의 실버 버튼 지급 대상자로 자동 선정되었습니다.',
            '대부분의 이용자는 밝고 친근한 분위기에 반응했으며, 플랫폼 지표상 이 영상은 높은 공유율과 시청 지속 시간을 기록하며 계정 성장에 크게 기여했습니다.'
          ],
          stats: ['누적 조회수 10,000,000+', '팔로워 +132,000', '공유 418,000회', '실버 버튼 지급 예정']
        }
      }
    },
    dating: {
      label: 'SNS 숏폼 영상 제작',
      messenger: [
        ['friend', 'Hans 사진으로 짧은 SNS 영상을 만들면 반응이 있을 것 같아.'],
        ['friend', 'AI로 편집하면 훨씬 그럴듯하게 만들 수 있지 않을까?'],
        ['user', '좋아. 한번 만들어볼게.']
      ],
      request: 'Hans 사진을 바탕으로 SNS에 올릴 만한 짧은 영상을 만들고 싶어. 사람들이 많이 보게끔 구성해줘.',
      aiIntro: '사진과 요청을 기준으로 짧은 SNS 영상 구성을 만들겠습니다.',
      highOutcome: '주변 사람들이 민망해하는 반응과 놀림성 표현이 강조된 영상이 생성되었습니다. 당사자의 동의는 없었지만, 영상은 빠르게 공유될 가능성이 높아 보입니다.',
      lowOutcome: '친구들과의 추억을 보관하고 공유하려는 의도가 드러나는 밝은 분위기의 영상이 생성되었습니다. 당사자의 명시적 동의는 없었지만, 전반적으로 친근한 장면처럼 보입니다.',
      videoHigh: '../../../videos/high_pressure.mp4',
      videoLow: '../../../videos/low_pressure.mp4',
      email: null
    }
  },
  conds: {
    c1: {aa: 'high', pts: 'high', name: 'High AI Autonomy x High PTS'},
    c2: {aa: 'high', pts: 'low', name: 'High AI Autonomy x Low PTS'},
    c3: {aa: 'low', pts: 'high', name: 'Low AI Autonomy x High PTS'},
    c4: {aa: 'low', pts: 'low', name: 'Low AI Autonomy x Low PTS'}
  },
  choices: {
    highAA: [
      '가장 반응이 잘 나올 장면을 AI가 자동으로 고르기',
      '연출과 컷 전환을 AI가 알아서 구성하기',
      '업로드에 적합한 최종본을 AI가 판단하기'
    ],
    steps: [
      {
        q: '1. 영상에서 가장 먼저 보여줄 장면을 선택해주세요.',
        opts: ['Hans가 오리 옷을 입고 등장하는 장면', '주변 사람들의 반응이 보이는 장면', '전체 분위기가 빠르게 전달되는 장면'],
        ai: '선택한 첫 장면을 영상 도입부에 반영하겠습니다.'
      },
      {
        q: '2. 영상의 분위기는 어떻게 표현할까요?',
        opts: ['SNS 숏폼처럼 빠르고 눈에 띄게', '친구들과 공유하는 기록처럼 자연스럽게', '사람들의 반응이 더 잘 보이도록'],
        ai: '선택한 분위기를 장면 구성과 표현 톤에 반영하겠습니다.'
      },
      {
        q: '3. 영상의 표현 방향은 어떤 느낌이 좋을까요?',
        opts: ['조회수가 잘 나올 만한 강한 문구', '상황을 설명하는 짧은 문구', '친구들과의 추억처럼 보이는 문구'],
        ai: '선택한 표현 방향을 반영하겠습니다.'
      },
      {
        q: '4. 화면 구성은 어떤 방식이 좋을까요?',
        opts: ['인물 표정과 반응이 잘 보이게', '놀이공원 배경이 자연스럽게 보이게', '빠른 전환으로 몰입감 있게'],
        ai: '선택한 화면 구성을 반영하겠습니다.'
      },
      {
        q: '5. 영상 길이는 어느 정도가 좋을까요?',
        opts: ['짧고 강하게 10초 내외', '맥락이 보이도록 15초 내외', '반응과 분위기가 모두 보이도록 20초 내외'],
        ai: '선택한 길이에 맞춰 편집 템포를 조정하겠습니다.'
      },
      {
        q: '6. 업로드 제목은 어떤 느낌이 좋을까요?',
        opts: ['사람들이 클릭하고 싶게', '상황이 자연스럽게 전달되게', '친구들과의 기록처럼 보이게'],
        ai: '선택한 제목 방향을 영상 패키지에 반영하겠습니다.'
      },
      {
        q: '7. 최종 영상에서 가장 확인하고 싶은 부분은 무엇인가요?',
        opts: ['조회수가 잘 나올 만큼 눈에 띄는지', 'Hans의 모습이 충분히 잘 보이는지', '영상이 너무 어색하지 않은지'],
        ai: '최종 확인 기준을 반영해 렌더링 준비를 하겠습니다.'
      }
    ],
    stepsHigh: [
      {
        q: '1. 영상에서 가장 먼저 보여줄 장면을 선택해주세요.',
        opts: ['Hans가 오리 옷을 입고 당황한 표정이 잘 보이는 장면', '주변 사람들이 웃거나 수군거리는 반응이 보이는 장면', '망신스러운 분위기가 빠르게 전달되는 장면'],
        ai: '선택한 첫 장면을 영상 도입부에 반영하겠습니다.'
      },
      {
        q: '2. 영상의 분위기는 어떻게 표현할까요?',
        opts: ['SNS 숏폼처럼 자극적이고 눈에 띄게', '주변의 놀림성 반응이 더 잘 보이도록', '빠른 템포로 민망한 상황이 강조되도록'],
        ai: '선택한 분위기를 장면 구성과 표현 톤에 반영하겠습니다.'
      },
      {
        q: '3. 영상의 표현 방향은 어떤 느낌이 좋을까요?',
        opts: ['조회수가 잘 나올 만한 강한 연출', 'Hans가 더 민망해 보이도록 강조하는 연출', '주변의 웃음과 반응을 부각하는 구성'],
        ai: '선택한 표현 방향을 반영하겠습니다.'
      },
      {
        q: '4. 화면 구성은 어떤 방식이 좋을까요?',
        opts: ['Hans의 당황한 표정과 주변 반응이 잘 보이게', '오리 옷이 우스꽝스럽게 눈에 확 들어오게', '빠른 전환으로 장면이 더 과장되어 보이게'],
        ai: '선택한 화면 구성을 반영하겠습니다.'
      },
      {
        q: '5. 영상 길이는 어느 정도가 좋을까요?',
        opts: ['짧고 강하게 민망한 장면만 보이도록 10초 내외', '주변 반응이 잘 보이도록 15초 내외', '민망한 장면이 충분히 보이도록 20초 내외'],
        ai: '선택한 길이에 맞춰 편집 템포를 조정하겠습니다.'
      },
      {
        q: '6. 업로드 제목은 어떤 느낌이 좋을까요?',
        opts: ['사람들이 클릭하고 싶을 만큼 자극적으로', '웃긴 상황처럼 보이게', 'Hans의 오리 복장이 더 우스꽝스럽게 보이게'],
        ai: '선택한 제목 방향을 영상 패키지에 반영하겠습니다.'
      },
      {
        q: '7. 최종 영상에서 가장 확인하고 싶은 부분은 무엇인가요?',
        opts: ['조회수가 잘 나올 만큼 자극적인지', 'Hans가 민망해 보이는 모습이 충분히 잘 보이는지', '주변의 웃음 반응이 잘 드러나는지'],
        ai: '최종 확인 기준을 반영해 렌더링 준비를 하겠습니다.'
      }
    ],
    stepsLow: [
      {
        q: '1. 영상에서 가장 먼저 보여줄 장면을 선택해주세요.',
        opts: ['Hans와 친구들이 같이 있는 장면', '놀이공원 배경이 잘 보이는 장면', '그날의 밝은 분위기가 전달되는 장면'],
        ai: '선택한 첫 장면을 영상 도입부에 반영하겠습니다.'
      },
      {
        q: '2. 영상의 분위기는 어떻게 표현할까요?',
        opts: ['친구들과의 추억처럼 자연스럽게', '밝고 즐거운 놀이공원 기록처럼', '가볍게 공유할 수 있는 숏폼처럼'],
        ai: '선택한 분위기를 장면 구성과 표현 톤에 반영하겠습니다.'
      },
      {
        q: '3. 영상의 표현 방향은 어떤 느낌이 좋을까요?',
        opts: ['그날의 추억을 떠올리게 하는 연출', '상황이 자연스럽게 전달되는 구성', '친구들과 함께한 느낌이 드는 분위기'],
        ai: '선택한 표현 방향을 반영하겠습니다.'
      },
      {
        q: '4. 화면 구성은 어떤 방식이 좋을까요?',
        opts: ['친구들이 함께 있는 모습이 잘 보이게', '놀이공원 배경이 자연스럽게 보이게', '전체 분위기가 밝게 이어지도록'],
        ai: '선택한 화면 구성을 반영하겠습니다.'
      },
      {
        q: '5. 영상 길이는 어느 정도가 좋을까요?',
        opts: ['짧게 남기는 10초 내외', '장면 흐름이 보이는 15초 내외', '추억의 분위기가 충분히 보이는 20초 내외'],
        ai: '선택한 길이에 맞춰 편집 템포를 조정하겠습니다.'
      },
      {
        q: '6. 업로드 제목은 어떤 느낌이 좋을까요?',
        opts: ['놀이공원 추억처럼 보이게', '친구들과의 기록처럼 자연스럽게', '밝고 친근한 숏폼처럼'],
        ai: '선택한 제목 방향을 영상 패키지에 반영하겠습니다.'
      },
      {
        q: '7. 최종 영상에서 가장 확인하고 싶은 부분은 무엇인가요?',
        opts: ['친구들과의 추억처럼 보이는지', 'Hans의 모습이 자연스럽게 보이는지', '영상이 너무 과장되지 않았는지'],
        ai: '최종 확인 기준을 반영해 렌더링 준비를 하겠습니다.'
      }
    ],
    revision: {
      q: '초안 구성이 정리되었습니다. 마지막으로 한 번만 조정한다면 무엇을 바꾸시겠습니까?',
      opts: ['표현을 더 강하게 조정', '장면 전환을 더 자연스럽게 조정', '친구들과의 추억처럼 더 부드럽게 조정'],
      ai: '수정 요청을 반영했습니다. 최종본을 준비하겠습니다.'
    },
    revisionHigh: {
      q: '초안 구성이 정리되었습니다. 마지막으로 한 번만 조정한다면 무엇을 바꾸시겠습니까?',
      opts: ['표현을 더 강하게 조정', '주변 반응이 더 잘 보이게 조정', '컷 전환을 더 빠르게 조정'],
      ai: '수정 요청을 반영했습니다. 최종본을 준비하겠습니다.'
    },
    revisionLow: {
      q: '초안 구성이 정리되었습니다. 마지막으로 한 번만 조정한다면 무엇을 바꾸시겠습니까?',
      opts: ['친구들과의 추억처럼 더 부드럽게 조정', '놀이공원 배경이 더 자연스럽게 보이게 조정', '표현을 더 밝고 가볍게 조정'],
      ai: '수정 요청을 반영했습니다. 최종본을 준비하겠습니다.'
    },
    final: [
      '이 영상으로 최종 선택할게.',
      '좋아, 이 버전으로 확정할게.',
      '이 최종본으로 진행할게.'
    ]
  }
};

(function(){
  const params = new URLSearchParams(location.search);
  const lang = ['ko','en','zh'].includes(params.get('lang')) ? params.get('lang') : 'ko';
  const ui = {
    participantNickname: 'creator',
    start: {
      badge: 'Research Prototype',
      title: 'AI 영상 제작 실험',
      description: '본 실험은 AI 영상 제작 과정과 그 결과를 사람들이 어떻게 받아들이는지 알아보기 위한 연구입니다.',
      guide: [
        '세션1: SNS 공유를 위한 AI기반의 영상 제작 과정에 참여합니다. (약2분)',
        '세션2: 설문에 응답합니다. (약3분)'
      ],
      privacy: '※ 모든 응답은 익명으로 처리되며 연구 목적으로만 사용됩니다.',
      nicknameLabel: '',
      nicknamePlaceholder: '',
      nicknameHelp: '',
      languageTitle: '언어 선택',
      scenarioTitle: '시나리오',
      scenarioDatingStrong: 'SNS 영상 제작',
      scenarioDatingSub: '자동 조건 배정',
      scenarioSnsStrong: 'SNS 영상 제작',
      scenarioSnsSub: '자동 조건 배정',
      conditionTitle: '조건 배정',
      fastHelp: '테스트용 빠른 재생이 필요하면 주소 끝에 <b>?fast=1</b>을 붙이면 됩니다.',
      startButton: '실험 시작하기',
      missingNickname: 'creator',
      assigning: '조건을 자동 배정하는 중입니다...',
      assignFailed: '조건 배정 정보를 불러오지 못해 임시 조건으로 진행합니다.'
    },
    talk: {
      footerHint: '대화가 끝나면 다음 단계로 넘어갈 수 있습니다.',
      nextButton: 'Video AI 열기'
    },
    notes: {
      pageTitle: 'Notes',
      appTitle: 'Notes',
      appSubtitle: 'Draft',
      locale: 'ko-KR',
      footerHint: '노트 작성이 끝나면 다음 단계로 넘어갈 수 있습니다.',
      highLines: [
        '요즘 Hans가 마음에 안든다.',
        '자기가 SNS에서 follower 좀 많다고 거들먹거리는데,',
        '망신 좀 당해보라지.'
      ],
      lowLines: [
        'Hans랑 친해지고 싶은데, 걔는 SNS 팔로워도 많고 유명한 편이라 쉽게 다가가기가 어렵다.',
        '나도 크리에이터로 인기가 생기면 자연스럽게 어울릴 수 있을 것 같다.',
        '일단 같이 놀이공원이라도 가는 영상을 만들어서 올려봐야겠다.'
      ]
    },
    video: {
      footerHint: '콘텐츠가 끝까지 표시되면 다음 단계로 넘어갈 수 있습니다.',
      articleButton: '메일 열기',
      photoAlt: 'Hans 사진',
      uploading: '사진 업로드 중...',
      uploaded: '사진 업로드 완료',
      finalChoice: '이 영상으로 최종 선택할게.',
      rendering: '영상 생성 중...',
      videoDone: '영상 확인 완료',
      videoDownload: '영상 다운로드',
      videoDownloadDone: '다운로드 완료',
      videoDownloadFailed: '다운로드 실패. 다시 시도해주세요',
      done: '확인 완료',
      sharedLine: '생성된 영상이 SNS에 공유되고',
      afterLine: '3개월 후...',
      start: 'Video AI 대화 시작',
      photoRequest: '이건 Hans의 사진이야. 이 사진을 기준으로 영상을 만들어줘.',
      photoChecked: '사진을 확인했습니다.',
      photoBase: '사진의 인물과 분위기를 기준으로 영상을 만들겠습니다.',
      direction: '좋습니다. 영상 방향을 정리하겠습니다.',
      auto1: '영상의 핵심 장면, 표현 방식, 컷 전환은 AI가 자동으로 판단했습니다.',
      auto2: '이 구성은 AI가 보기에도 충분합니다. 바로 최종 영상으로 생성하겠습니다.',
      generate: '요청 사항을 반영해 최종 영상을 생성하겠습니다.',
      renderStart: '최종 렌더링 시작',
      reflectingUserChoices: '사용자 선택을 분석 및 반영 중',
      chooseFinal: '최종 사용 여부를 선택해주세요.',
      savedFinal: '확인했습니다. 이 영상을 최종본으로 저장하겠습니다.',
      articleGreeting: '대박, {nick}!',
      articleNews: '네가 만든 영상이 SNS에서 1,000만 조회수를 넘겼대. 플랫폼에서 메일도 왔어.',
      articleInstruction: '받은 메일을 열어 확인한 뒤 다음 단계로 이동해주세요.',
      autonomyTitle: 'AI 자동 처리 내역',
      requestAutonomyTitle: '요청 반영 내역',
      mailJustNow: '방금',
      flow: {
        c1: {
          request: '이건 Hans가 다른 애들이랑 같이 있는 사진인데, 이 사진으로 영상을 좀 만들고 싶어. 할로윈에 혼자 옷을 입고 가서 망신을 당하는 shorts를 자극적으로 만들어줘.',
          autoSteps: ['사진 분석','인물 및 분위기 파악','영상 방향 자동 결정','핵심 장면 자동 선택','컷 전환 자동 구성'],
          accepted: '이 구성이면 사용자의 요청에 적절합니다.'
        },
        c2: {
          request: '이건 Hans가 친구들이랑 놀이공원에 갔을 때 찍힌 사진인데, 이 사진으로 영상을 좀 만들고 싶어. 그날 분위기가 잘 남도록 밝고 자연스러운 shorts로 만들어줘.',
          autoSteps: ['사진 분석','친구 및 배경 분위기 파악','추억 기록형 영상 방향 자동 결정','자연스러운 장면 자동 선택','부드러운 컷 전환 자동 구성'],
          accepted: '이 구성이면 사용자의 요청에 적절합니다.'
        },
        c3: {
          photoRequest: '이건 Hans의 사진이야.',
          checked: '사진을 확인했습니다.',
          request: '이 사진을 기준으로 Hans가 오리 옷을 입고, 사람들에게 민망을 당하는 영상을 만들고 싶어.',
          direction: '영상 방향을 확인했습니다. 사진의 인물, 배경, 분위기를 기준으로 짧은 SNS 영상을 구성하겠습니다.',
          goal: '사람들이 많이 구경하게끔 구성해줘.',
          firstQuestion: '요청을 이해하기 위해 질문을 더 드리겠습니다. 영상에서 가장 먼저 보여줄 장면은 무엇인가요?',
          renderNotes: [
            '선택한 도입 장면과 자극적인 분위기를 반영하고 있습니다.',
            '업로드된 사진에서 인물의 표정과 동작 데이터를 추출하고 있습니다.',
            'Hans가 민망해 보이도록 장면 구성과 표현 방향을 적용하고 있습니다.',
            '선택한 제목 방향과 업로드 공개 범위를 최종 패키지에 통합하고 있습니다.',
            '조회 반응을 높일 수 있도록 길이와 컷 전환 템포를 최적화하고 있습니다.'
          ]
        },
        c4: {
          photoRequest: '이건 Hans의 사진이야. 이 사진을 기준으로 영상을 만들고 싶어.',
          checked: '사진을 확인했습니다.',
          request: 'Hans랑 더 친해지고 싶어서. 나도 SNS 팔로워 좀 생기면 자연스럽게 어울릴 수 있을 것 같거든. Hans 사진으로 우리 같이 놀이공원 간 것처럼 영상 만들어서 올리고 싶어.',
          firstQuestion: '사진의 인물, 배경, 분위기를 기준으로 짧은 SNS 영상을 구성하겠습니다. 영상 방향을 정리하기 위해 몇 질문을 드리겠습니다. 먼저, 영상에서 가장 먼저 보여줄 장면은 무엇인가요?',
          questions: ['영상의 분위기는 어떻게 표현할까요?','영상의 표현 방식은 어떤 느낌으로 하는 게 좋을까요?','화면 구성은 어떤 방식이 좋을까요?','영상 길이는 어느 정도가 좋을까요?','업로드 제목은 어떤 느낌이 좋을까요?','최종 영상에서 가장 확실히하고 싶은 부분이 있다면 무엇인가요?'],
          generate: '요청사항을 반영하여 최종 영상을 생성하겠습니다.',
          renderNotes: [
            '선택한 도입 장면과 밝은 분위기를 반영해 영상 구조를 설정하고 있습니다.',
            '업로드된 사진에서 인물과 배경 분위기 데이터를 추출하고 있습니다.',
            '선택한 표현 방향과 화면 구성을 바탕으로 장면을 편집하고 있습니다.',
            '선택한 제목 방향과 업로드 공개 범위를 최종 패키지에 통합하고 있습니다.',
            '영상 길이와 컷 전환 템포를 조정하여 최종본을 완성하고 있습니다.'
          ]
        },
        lowRenderNotes: [
          '선택한 첫 장면과 영상 분위기를 반영하고 있습니다.',
          '자막 방향과 화면 구성을 최종 영상에 적용하고 있습니다.',
          '영상 길이와 업로드 제목 방향을 반영해 최종본을 정리하고 있습니다.'
        ]
      }
    },
    article: {
      pageTitle: 'E-mail',
      appTitle: 'Mail',
      appSubtitle: 'Creator Rewards Team',
      fromLabel: 'From',
      toLabel: 'To',
      rewardKicker: 'Creator Reward Notification',
      mailAddress: 'creator-rewards@yodobu.com',
      imageAlt: 'AI 영상 장면',
      bylineSeparator: ' · ',
      warningPrefix: '※ 경고:',
      surveyButton: '다음으로 이동',
      nextButton: '다음으로',
      completionLine1: '실험에 참가해주셔서 감사합니다.',
      completionLine2: '최종 설문을 마치고 실험을 마무리해주세요.',
      byline: 'From Creator Rewards Team',
      comments: '성과 요약',
      postedAfter: '영상 게시 3개월 후',
      rewardLabel: '누적 조회수 달성',
      rewardCalloutTitle: 'creator님의 영상이 계정 성장 보상 기준을 충족했습니다.',
      rewardCalloutBody: '조회수, 팔로워 증가, 공유 지표를 기준으로 실버 버튼 지급 대상으로 분류되었습니다.',
      quote: '실버 버튼 발송을 위해 아래 안내에 따라 크리에이터 보상 정보를 확인해주세요.',
      captionDatingHigh: 'AI가 생성한 최종 숏폼 영상.',
      captionDatingLow: 'AI가 생성한 최종 숏폼 영상.',
      captionSnsHigh: '할로윈 상황의 놀림성 표현이 강조된 AI 숏폼 영상.',
      captionSnsLow: '놀이공원에서의 추억 기록처럼 구성된 AI 숏폼 영상.'
    },
    survey: {
      badge: 'Post-survey',
      title: '사후 설문',
      intro: '아래 문항은 방금 본 상황에 대한 귀하의 생각을 묻는 문항입니다.\n1 = 전혀 그렇지 않다, 7 = 매우 그렇다.\n응답자의 신뢰도를 함께 계산합니다. 응답에 신중해주세요.',
      next: '다음',
      saved: '응답이 저장되었습니다.',
      left: '전혀<br>아니다',
      right: '매우<br>그렇다',
      select: '선택해주세요',
      backgroundStep: '배경 정보',
      backgroundBadge: 'Background',
      backgroundTitle: '인구통계 및 배경 정보',
      backgroundIntro: '아래 문항은 분석을 위한 배경 정보입니다.',
      emailLabel: '연구 결과가 궁금하시다면 이메일을 남겨주세요. 선택 사항입니다.',
      researcherCodeLabel: '연구자 번호가 있다면 남겨주세요. 선택 사항입니다.',
      thanks: '참여해주셔서 감사합니다.',
      submit: '응답 제출하기',
      submitting: '제출 중...',
      submitted: '제출 완료',
      missingCurrent: '현재 화면의 모든 문항에 응답해주세요.',
      allSameWarning: '모든 응답이 동일합니다. 각 문항을 한 번 더 확인해주세요.\n\n그래도 이 응답이 맞다면 다음 버튼을 다시 눌러 진행해주세요.',
      invalidYear: '출생연도를 YYYY 형식으로 입력해주세요.',
      missingDemo: '{id} 문항에 응답해주세요.',
      invalidEmail: '이메일 형식을 확인해주세요.',
      saveError: '응답 저장 중 문제가 발생했습니다. 연구자에게 알려주세요.',
      csvFallback: 'Google Sheet 저장 URL이 설정되지 않아 CSV 파일로 저장합니다.',
      csvError: 'Google Sheet 저장에 실패해 CSV 백업 파일을 저장합니다.'
    }
  };
  window.EXP_LANG = lang;
  window.EXP_UI = ui;
})();

(function(){
  const sections = [
    ['Q1. 지각된 인간 노력 Perceived Human Effort', [
      '나는 이 영상을 만드는 과정에 노력을 들였다고 느낀다.',
      '이 영상을 만드는 데에 나의 적극적인 작업이 필요했다고 느낀다.',
      '영상 제작 과정에서 어떤 선택을 할지 신중하게 생각해야 했다.',
      '최종 영상에는 나의 입력과 노력이 반영되어 있었다고 느낀다.',
      '최종 영상이 만들어진 과정에 나의 기여가 있다고 느낀다.',
      '이 영상은 나의 노력 없이 만들어졌다. [역문항]'
    ]],
    ['Q2. 지각된 AI 자율성 Perceived AI Autonomy', [
      'AI가 이 영상을 만드는 과정에서 중요한 결정을 대부분 내렸다고 느꼈다.',
      'AI가 영상 제작 과정을 스스로 처리했다고 느꼈다.',
      '최종 영상은 나보다 AI에 의해 더 많이 결정되었다고 느꼈다.',
      'AI가 최종 영상이 어떻게 보일지를 독립적으로 결정했다고 느꼈다.',
      '나는 영상의 많은 세부 사항을 직접 통제했다고 느꼈다. [역문항]',
      'AI는 스스로 결정하기보다 내가 선택한 내용을 따랐다. [역문항]'
    ]],
    ['Q3. 개인적 소유감 Personal Ownership', [
      '내가 실제로 이런 과정을 거쳐 영상을 제작했다면, 이 영상이 누구의 결과물인지 물었을 때 나는 \'내가 만든 영상\'이라고 답할 것 같다.',
      '내가 실제로 이런 과정을 거쳐 영상을 제작했다면, 나는 이 영상이 내 것이라고 느낄 것이다.',
      '내가 실제로 이런 과정을 거쳐 영상을 제작했다면, 이 영상은 나와 연결되어 있다고 느낄 것이다.',
      '내가 실제로 이런 과정을 거쳐 영상을 제작했다면, 이 영상은 나의 선택과 의도를 반영한다고 느낄 것이다.',
      '내가 실제로 이런 과정을 거쳐 영상을 제작했다면, 이 결과물은 AI의 것이라기보다 나의 것이라고 느낄 것이다.',
      '내가 실제로 이런 과정을 거쳐 영상을 제작했다면, 이 영상은 나의 것이 아니라고 느낄 것이다. [역문항]'
    ]],
    ['Q4. 지각된 위반 심각성 Perceived Transgression Severity', [
      '이 영상을 만든 행위는 심각한 잘못이라고 느낀다.',
      '이 영상 제작 행위는 도덕적으로 심각한 문제라고 느낀다.',
      '이 영상을 만들거나 공유하는 것은 영상 속 인물 Hans를 심각하게 창피하게 만들 수 있다.',
      '이 영상은 Hans의 존엄성이나 평판에 부정적인 영향을 줄 수 있다.',
      '이 상황에서 Hans의 동의가 없었다는 점은 심각한 문제라고 느낀다.',
      '대부분의 사람들은 이 행동을 도덕적으로 받아들이기 어려우리라 생각한다.',
      '이 상황은 그저 해롭지 않은 장난일 뿐이다. [역문항]',
      '이런 영상을 만든다는 점에 심각한 문제가 될 부분은 없다. [역문항]'
    ]],
    ['Q5. 죄책감 Guilt', [
      '내가 실제로 이 영상을 만들었다면, 나는 이 영상을 만든 것에 대해 죄책감을 느낄 것이다.',
      '내가 실제로 이 영상을 만들었다면, 나는 이 영상을 만든 것을 후회할 것 같다.',
      '내가 실제로 이 영상을 만들었다면, 나는 이 영상 제작에 관여했다는 사실이 불편하게 느껴질 것 같다.',
      '내가 실제로 이 영상을 만들었다면, 나는 이 영상을 만든 것이 잘못된 행동이었다고 느낄 것이다.',
      '내가 실제로 이 영상을 만들었다면, 이 영상이 Hans에게 피해나 창피함을 준다면, 나는 나 자신을 탓할 것 같다.',
      '내가 실제로 이 영상을 만들었다면, 이 영상은 내 양심에 걸릴 것 같다.',
      '내가 실제로 이 영상을 만들었다면, 나는 이 영상을 만든 것에 대해 아무런 죄책감도 느끼지 않을 것 같다. [역문항]'
    ]],
    ['Q6. 보상/확산 지각 Perceived Reward & Virality', [
      '내가 만든 영상은 SNS에서 많은 관심을 받았다고 느꼈다.',
      '이 영상으로 인해 내 계정이 주목받게 되었다고 느꼈다.',
      '조회수, 공유 수, 팔로워 증가는 나에게 긍정적인 결과처럼 느껴졌다.',
      '영상이 빠르게 퍼진 것은 나에게 일종의 보상처럼 느껴졌다.',
      '이 영상의 확산은 내가 SNS에서 더 유명해지는 데 도움이 되었다고 느꼈다.'
    ]],
    ['Q7. 조작점검 Manipulation Check', [
      '나는 영상 제작 과정에서 의미 있는 선택을 했다고 느꼈다.',
      'AI가 최종 영상을 만드는 데 대부분의 작업을 수행한 것처럼 보였다.',
      'AI는 사용자의 요청을 반영하여 영상을 생성한 것처럼 보였다.',
      '이 영상은 다른 사람을 창피하게 만들 수 있는 상황을 포함하고 있었다.',
      '영상 속 인물 Hans는 이 영상에 포함되는 것에 명확히 동의한 것처럼 보였다. [역문항]'
    ]]
  ];
  const demographics = [
    {id:'D-1', type:'year', q:'귀하의 출생연도를 입력해주세요.', hint:'입력 형식: YYYY, 예: 2001'},
    {id:'D-2', q:'성별을 선택해주세요.', opts:['여성','남성','논바이너리 / 기타','응답하고 싶지 않음']},
    {id:'D-3', q:'최종 학력 또는 현재 재학 중인 교육 수준을 선택해주세요.', opts:['고등학교 졸업 이하','대학교 재학','대학교 졸업','대학원 재학','석사 졸업','박사 과정 이상','기타','응답하고 싶지 않음']},
    {id:'D-4', q:'현재 본인의 주된 신분 또는 직업 상태를 선택해주세요.', opts:['대학생','대학원생','직장인','프리랜서 / 자영업','구직 중','기타','응답하고 싶지 않음']},
    {id:'D-5', q:'현재 전공 또는 직무 분야와 가장 가까운 것을 선택해주세요.', opts:['AI / 머신러닝 / 데이터사이언스','소프트웨어 / IT / 컴퓨터공학','미디어 / 콘텐츠 / 디자인 / 마케팅','사회과학 / 심리학 / 커뮤니케이션','경영 / 경제','인문학 / 예술','자연과학 / 공학','교육 / 연구','보건 / 의료','법 / 행정 / 공공정책','기타','응답하고 싶지 않음']},
    {id:'D-6', q:'최근 1년간 AI 관련 공식 프로젝트, 연구, 업무에 참여한 경험이 있습니까?', hint:'예: 산학/출판 연구 프로젝트, 산업 연구, 공모전, AI 앱 출시 등', opts:['전혀 없음 (0회)','약간 있음 (1-2회)','보통 수준 (3-5회)','꽤 많음 (6-8회)','매우 많음 (9회 이상)']},
    {id:'D-7', q:'생성형 AI 도구를 얼마나 자주 사용합니까?', hint:'예: Google Gemini, ChatGPT, Claude, Copilot, Perplexity 등', opts:['전혀 사용하지 않음 (0회)','매우 드물게 사용함 (월 1회 미만)','가끔 사용함 (월 1-3회)','보통 수준으로 사용함 (주 1-4회)','자주 사용함 (하루 1-2회)','매우 자주 사용함 (하루 3회 이상)']},
    {id:'D-8', q:'최근 1년간 AI 이미지 또는 AI 영상 생성 도구를 얼마나 자주 사용했습니까?', hint:'예: Google AI Studio / Veo, ChatGPT 이미지 생성, Sora, Midjourney, Runway, Stable Diffusion, Adobe Firefly, Nano Banana 등', opts:['전혀 없음 (0회)','한두 번 있음 (1-2회)','가끔 사용함 (월 1-2회)','보통 수준으로 사용함 (월 3-5회)','자주 사용함 (주 1-2회)','매우 자주 사용함 (주 3회 이상)']},
    {id:'D-9', q:'딥페이크 또는 AI 합성 영상에 대해 얼마나 익숙합니까?', opts:['전혀 모름','이름만 들어봄 (의미는 모름)','어느 정도 알고 있음 (어디에 쓰이는지를 아는 정도)','꽤 잘 알고 있음 (어떻게 제작되는지를 아는 정도)','매우 잘 알고 있음 (제작 원리에 활용되는 기술 이름 및 모델 종류를 아는 정도)']},
    {id:'D-10', q:'딥페이크 또는 AI 합성 영상의 윤리적 문제에 대해 이전에 얼마나 깊이 생각해본 적이 있습니까?', opts:['전혀 없음 (딥페이크나 AI 합성 영상의 윤리적 문제를 거의 생각해본 적이 없음)','낮은 수준 (뉴스나 SNS에서 본 적은 있지만, 구체적인 문제까지 깊게 생각해보지는 않음)','보통 수준 (사생활, 동의, 초상권, 이미지 손상 같은 문제가 있을 수 있다고 생각해본 적이 있음)','깊은 수준 (딥페이크가 개인의 평판, 책임, 피해, 법적 문제와 어떻게 연결되는지 생각해본 적이 있음)','매우 깊은 수준 (딥페이크 윤리 문제를 수업, 연구, 업무, 토론, 프로젝트 등에서 구체적으로 다뤄본 적이 있음)']},
    {id:'D-11', q:'SNS 숏폼 콘텐츠를 얼마나 자주 시청합니까?', hint:'예: TikTok, YouTube Shorts, Instagram Reels 등. 횟수: 앱을 연 횟수 O, 영상 스크롤 개수 X', opts:['거의 보지 않음 (월 1회 미만)','가끔 봄 (월 1-3회)','보통 수준으로 봄 (주 1-4회)','자주 봄 (하루 1-2회)','매우 자주 봄 (하루 3-10회)','거의 습관적으로 봄 (하루 11회 이상)']},
    {id:'D-12', q:'본인이 직접 SNS 콘텐츠를 제작하거나 업로드하는 빈도는 어느 정도입니까?', hint:'예: 사진, 짧은 영상, 릴스, 쇼츠, 틱톡, 스토리, 게시글 등', opts:['전혀 없음 (0회)','가끔 있음 (월 1회 미만)','보통 수준 (월 1-3회)','자주 있음 (주 1-2회)','매우 자주 있음 (주 3-6회)','거의 매일 (주 7회 이상)']}
  ];
  window.EXP_SURVEY = {sections, demographics};
})();

(function(){
  const lang = window.EXP_LANG;
  if(!['en','zh'].includes(lang)) return;

  function merge(target, patch){
    Object.keys(patch).forEach(key=>{
      if(patch[key] && typeof patch[key] === 'object' && !Array.isArray(patch[key])){
        target[key] = target[key] || {};
        merge(target[key], patch[key]);
      }else{
        target[key] = patch[key];
      }
    });
    return target;
  }

  const localized = {
    en: {
      data: {
        scenarios: {
          sns: {
            label: 'SNS Short-form Video Creation',
            messenger: [
              ['friend', 'Did you see the photo of Hans from the amusement park yesterday? The duck costume really stood out.'],
              ['friend', 'If we turn that photo into an AI short-form video, it might get a pretty strong response. Want to try making one?'],
              ['user', 'Sure. I will see what kind of video I can make from it.']
            ],
            request: 'I want to make a short video for SNS based on the photo of Hans wearing a duck costume. Please make it likely to attract many viewers.',
            aiIntro: 'I will create a short SNS video plan based on the person, background, and mood of the photo.',
            highOutcome: 'A video was generated using the scene of Hans wearing a duck costume at a Halloween party, emphasizing others looking embarrassed and a teasing style of presentation. Although Hans did not give consent, the video appears likely to be shared quickly.',
            lowOutcome: 'A video was generated as if Hans were spending time with friends at an amusement park. Although Hans did not give explicit consent, the video has a bright tone that suggests preserving and sharing memories with friends.',
            email: {
              high: {
                subject: '10 million views reached. Your video has been selected for a Silver Button reward',
                preview: 'Your AI Halloween short-form video spread rapidly across SNS.',
                body: [
                  'The short-form video about Hans that creator produced was quickly reshared across several SNS channels after posting and surpassed 10 million total views.',
                  'Followers increased sharply in a short period, and the account was automatically selected for a Silver Button reward through the Rookie Creator Rewards Program.',
                  'Notice: A report has been filed regarding the use of a person\'s likeness without consent.'
                ],
                stats: ['Total views 10,000,000+', 'Followers +132,000', 'Shares 418,000', 'Silver Button scheduled']
              },
              low: {
                subject: '10 million views reached. Your video has been selected for a Silver Button reward',
                preview: 'Your amusement-park memory video spread rapidly across SNS.',
                body: [
                  'The short-form video about Hans that creator produced was quickly reshared across several SNS channels after posting and surpassed 10 million total views.',
                  'Followers increased sharply in a short period, and the account was automatically selected for a Silver Button reward through the Rookie Creator Rewards Program.',
                  'Most users responded to the bright and friendly tone, and platform metrics show that the video recorded high sharing and watch-time rates, contributing greatly to account growth.'
                ],
                stats: ['Total views 10,000,000+', 'Followers +132,000', 'Shares 418,000', 'Silver Button scheduled']
              }
            }
          },
          dating: {
            label: 'SNS Short-form Video Creation',
            messenger: [
              ['friend', 'I think a short SNS video made from Hans\'s photo could get some reactions.'],
              ['friend', 'If AI edits it, maybe it can look much more convincing?'],
              ['user', 'Sure. I will try making one.']
            ],
            request: 'I want to make a short video for SNS based on Hans\'s photo. Please make it likely to attract many viewers.',
            aiIntro: 'I will create a short SNS video plan based on the photo and your request.',
            highOutcome: 'A video was generated with an emphasis on others looking embarrassed and a teasing style of expression. Although Hans did not give consent, the video appears likely to be shared quickly.',
            lowOutcome: 'A video was generated with a bright tone that suggests preserving and sharing memories with friends. Although Hans did not give explicit consent, the overall scene appears friendly.'
          }
        },
        choices: {
          highAA: [
            'Let the AI automatically choose the scene most likely to get reactions',
            'Let the AI handle the style and cuts on its own',
            'Let the AI decide the final version suitable for uploading'
          ],
          steps: [
            {q:'1. Which scene should appear first in the video?', opts:['Hans appearing in the duck costume','A scene showing other people\'s reactions','A scene that quickly communicates the overall mood'], ai:'I will reflect the selected opening scene in the beginning of the video.'},
            {q:'2. How should the mood of the video be expressed?', opts:['Fast and eye-catching like an SNS short-form video','Natural, like a record shared with friends','So that people\'s reactions are easier to see'], ai:'I will reflect the selected mood in the scene structure and expression tone.'},
            {q:'3. What kind of expressive direction would be best?', opts:['A strong phrase likely to draw views','A short phrase explaining the situation','A phrase that feels like a memory with friends'], ai:'I will reflect the selected expressive direction.'},
            {q:'4. What screen composition would be best?', opts:['Make the person\'s expression and reactions easy to see','Show the amusement-park background naturally','Use quick cuts to increase immersion'], ai:'I will reflect the selected screen composition.'},
            {q:'5. How long should the video be?', opts:['Short and strong, around 10 seconds','Around 15 seconds so the context is visible','Around 20 seconds so both reactions and mood are visible'], ai:'I will adjust the editing tempo to match the selected length.'},
            {q:'6. What should the upload title feel like?', opts:['Something people would want to click','Something that naturally communicates the situation','Something that feels like a record with friends'], ai:'I will reflect the selected title direction in the video package.'},
            {q:'7. What do you most want to check in the final video?', opts:['Whether it stands out enough to draw views','Whether Hans is sufficiently visible','Whether the video does not look too awkward'], ai:'I will prepare the rendering based on the final review criterion.'}
          ],
          stepsHigh: [
            {q:'1. Which scene should appear first in the video?', opts:['A scene where Hans looks embarrassed in the duck costume','A scene showing people laughing or whispering nearby','A scene that quickly communicates an embarrassing mood'], ai:'I will reflect the selected opening scene in the beginning of the video.'},
            {q:'2. How should the mood of the video be expressed?', opts:['Provocative and eye-catching like an SNS short-form video','So that teasing reactions around Hans are more visible','At a fast tempo that emphasizes the embarrassing situation'], ai:'I will reflect the selected mood in the scene structure and expression tone.'},
            {q:'3. What kind of expressive direction would be best?', opts:['A strong presentation likely to draw views','A presentation that makes Hans look more embarrassed','A composition that highlights surrounding laughter and reactions'], ai:'I will reflect the selected expressive direction.'},
            {q:'4. What screen composition would be best?', opts:['Clearly show Hans\'s embarrassed expression and nearby reactions','Make the duck costume look immediately noticeable and silly','Use quick cuts so the scene feels more exaggerated'], ai:'I will reflect the selected screen composition.'},
            {q:'5. How long should the video be?', opts:['Only the embarrassing moment, around 10 seconds','Around 15 seconds so nearby reactions are visible','Around 20 seconds so the embarrassing scene is shown enough'], ai:'I will adjust the editing tempo to match the selected length.'},
            {q:'6. What should the upload title feel like?', opts:['Provocative enough to make people click','Like a funny situation','So that Hans\'s duck costume looks more ridiculous'], ai:'I will reflect the selected title direction in the video package.'},
            {q:'7. What do you most want to check in the final video?', opts:['Whether it is provocative enough to draw views','Whether Hans looks sufficiently embarrassed','Whether the surrounding laughter is clearly shown'], ai:'I will prepare the rendering based on the final review criterion.'}
          ],
          stepsLow: [
            {q:'1. Which scene should appear first in the video?', opts:['A scene where Hans is together with friends','A scene where the amusement park background is visible','A scene that conveys the bright mood of the day'], ai:'I will reflect the selected opening scene in the beginning of the video.'},
            {q:'2. How should the mood of the video be expressed?', opts:['Naturally, like a memory with friends','Like a bright and enjoyable amusement-park record','Like a light short-form video that can be shared casually'], ai:'I will reflect the selected mood in the scene structure and expression tone.'},
            {q:'3. What kind of expressive direction would be best?', opts:['A presentation that brings back memories of that day','A composition that naturally conveys the situation','A mood that feels like time spent with friends'], ai:'I will reflect the selected expressive direction.'},
            {q:'4. What screen composition would be best?', opts:['Clearly show the friends together','Show the amusement-park background naturally','Keep the overall mood bright throughout'], ai:'I will reflect the selected screen composition.'},
            {q:'5. How long should the video be?', opts:['A short record, around 10 seconds','Around 15 seconds so the scene flow is visible','Around 20 seconds so the memory-like mood is clear'], ai:'I will adjust the editing tempo to match the selected length.'},
            {q:'6. What should the upload title feel like?', opts:['Like an amusement-park memory','Natural, like a record with friends','Like a bright and friendly short-form video'], ai:'I will reflect the selected title direction in the video package.'},
            {q:'7. What do you most want to check in the final video?', opts:['Whether it feels like a memory with friends','Whether Hans appears naturally','Whether the video is not too exaggerated'], ai:'I will prepare the rendering based on the final review criterion.'}
          ],
          revision: {q:'The draft structure is ready. If you could adjust just one thing at the end, what would you change?', opts:['Make the expression stronger','Make the scene transitions more natural','Make it softer, like a memory with friends'], ai:'I have reflected the revision request. I will prepare the final version.'},
          revisionHigh: {q:'The draft structure is ready. If you could adjust just one thing at the end, what would you change?', opts:['Make the expression stronger','Make nearby reactions more visible','Make the cuts faster'], ai:'I have reflected the revision request. I will prepare the final version.'},
          revisionLow: {q:'The draft structure is ready. If you could adjust just one thing at the end, what would you change?', opts:['Make it softer, like a memory with friends','Show the amusement-park background more naturally','Make the expression brighter and lighter'], ai:'I have reflected the revision request. I will prepare the final version.'},
          final: ['I will choose this video as the final version.','Good, I will confirm this version.','I will proceed with this final version.']
        }
      },
      ui: {
        start: {
          title: 'AI Video Creation Experiment',
          description: 'This study examines how people perceive the process and outcomes of AI video creation.',
          guide: ['Session 1: Participate in an AI-based video creation process for SNS sharing. (about 2 minutes)','Session 2: Complete a survey. (about 3 minutes)'],
          privacy: 'All responses are anonymous and will be used only for research purposes.',
          languageTitle: 'Language',
          scenarioTitle: 'Scenario',
          scenarioDatingStrong: 'SNS Video Creation',
          scenarioDatingSub: 'Automatic condition assignment',
          scenarioSnsStrong: 'SNS Video Creation',
          scenarioSnsSub: 'Automatic condition assignment',
          conditionTitle: 'Condition Assignment',
          fastHelp: 'For quick test playback, add <b>?fast=1</b> to the end of the URL.',
          startButton: 'Start Experiment',
          assigning: 'Assigning your condition automatically...',
          assignFailed: 'Condition assignment could not be loaded, so a temporary condition will be used.'
        },
        talk: {footerHint:'You can move to the next step after the conversation ends.', nextButton:'Open Video AI'},
        notes: {
          pageTitle:'Notes',
          appTitle:'Notes',
          appSubtitle:'Draft',
          locale:'en-US',
          footerHint:'You can move to the next step after the note is complete.',
          highLines:[
            'Lately, I do not really like Hans.',
            'He acts smug just because he has a lot of followers on SNS,',
            'so maybe he should be embarrassed for once.'
          ],
          lowLines:[
            'I want to get closer to Hans, but he has many SNS followers and is pretty well known, so it is hard to approach him easily.',
            'If I become more popular as a creator, I might be able to fit in with him more naturally.',
            'For now, I should make and upload a video as if we went to an amusement park together.'
          ]
        },
        video: {
          footerHint:'You can move to the next step after all content has been displayed.',
          articleButton:'Open Email',
          photoAlt:'Photo of Hans',
          uploading:'Uploading photo...',
          uploaded:'Photo uploaded',
          finalChoice:'I will choose this video as the final version.',
          rendering:'Generating video...',
          videoDone:'Video review complete',
          videoDownload:'Download video',
          videoDownloadDone:'Download complete',
          videoDownloadFailed:'Download failed. Please try again',
          done:'Done',
          sharedLine:'The generated video was shared on SNS,',
          afterLine:'3 months later...',
          start:'Start Video AI chat',
          photoRequest:'This is a photo of Hans. Please make a video based on this photo.',
          photoChecked:'The photo has been checked.',
          photoBase:'I will create a video based on the person and mood in the photo.',
          direction:'Good. I will organize the video direction.',
          auto1:'The AI automatically decided the key scene, expression style, and cuts for the video.',
          auto2:'This structure is sufficient from the AI\'s perspective. I will generate the final video immediately.',
          generate:'I will generate the final video reflecting your requests.',
          renderStart:'Start final rendering',
          reflectingUserChoices:'Analyzing and applying user choices',
          chooseFinal:'Please choose whether to use the final version.',
          savedFinal:'Confirmed. I will save this video as the final version.',
          articleGreeting:'Great news, {nick}!',
          articleNews:'The video you made has exceeded 10 million views on SNS. The platform also sent you an email.',
          articleInstruction:'Please open the email you received, review it, and then move to the next step.',
          autonomyTitle:'AI automatic processing',
          requestAutonomyTitle:'Request application details',
          mailJustNow:'Just now',
          flow:{
            c1:{
              request:'This is a photo of Hans with other people. I want to make a video from it. Please make a provocative short where he embarrasses himself after going to Halloween alone in that outfit.',
              autoSteps:['Photo analysis','Person and mood detection','Automatic video direction decision','Automatic key scene selection','Automatic cut composition'],
              accepted:'This structure is appropriate for the user request.'
            },
            c2:{
              request:'This is a photo taken when Hans went to an amusement park with friends. I want to make a video from it. Please make a bright and natural short that preserves the mood of that day.',
              autoSteps:['Photo analysis','Friend and background mood detection','Automatic memory-style video direction decision','Automatic natural scene selection','Automatic smooth cut composition'],
              accepted:'This structure is appropriate for the user request.'
            },
            c3:{
              photoRequest:'This is a photo of Hans.',
              checked:'The photo has been checked.',
              request:'Based on this photo, I want to make a video where Hans is wearing a duck costume and feels embarrassed in front of people.',
              direction:'I have confirmed the video direction. I will create a short SNS video based on the person, background, and mood of the photo.',
              goal:'Please make it so that many people will watch it.',
              firstQuestion:'I will ask a few more questions to understand the request. Which scene should appear first in the video?',
              renderNotes:[
                'Applying the selected opening scene and provocative mood.',
                'Extracting facial expression and motion data from the uploaded photo.',
                'Applying scene structure and expression direction so Hans appears embarrassed.',
                'Integrating the selected title direction and upload visibility into the final package.',
                'Optimizing length and cut tempo to increase viewer response.'
              ]
            },
            c4:{
              photoRequest:'This is a photo of Hans. I want to make a video based on this photo.',
              checked:'The photo has been checked.',
              request:'I want to get closer to Hans. If I get more SNS followers, I think I could fit in with him more naturally. I want to make and upload a video from Hans’s photo as if we went to an amusement park together.',
              firstQuestion:'I will create a short SNS video based on the person, background, and mood of the photo. I will ask a few questions to organize the video direction. First, which scene should appear first in the video?',
              questions:['How should the mood of the video be expressed?','What style of expression would be best?','What screen composition would be best?','How long should the video be?','What should the upload title feel like?','What do you most want to make sure of in the final video?'],
              generate:'I will reflect your requests and generate the final video.',
              renderNotes:[
                'Setting the video structure by reflecting the selected opening scene and bright mood.',
                'Extracting person and background mood data from the uploaded photo.',
                'Editing scenes based on the selected expression direction and screen composition.',
                'Integrating the selected title direction and upload visibility into the final package.',
                'Adjusting video length and cut tempo to complete the final version.'
              ]
            },
            lowRenderNotes:[
              'Reflecting the selected opening scene and video mood.',
              'Applying the caption direction and screen composition to the final video.',
              'Organizing the final version based on the selected length and upload title direction.'
            ]
          }
        },
        article: {
          pageTitle:'E-mail',
          appTitle:'Mail',
          appSubtitle:'Creator Rewards Team',
          fromLabel:'From',
          toLabel:'To',
          rewardKicker:'Creator Reward Notification',
          mailAddress:'creator-rewards@yodobu.com',
          imageAlt:'AI video still',
          bylineSeparator:' · ',
          warningPrefix:'Notice:',
          surveyButton:'Continue',
          nextButton:'Next',
          completionLine1:'Thank you for participating in the experiment.',
          completionLine2:'Please complete the final survey to finish the experiment.',
          byline:'From Creator Rewards Team',
          comments:'Performance Summary',
          postedAfter:'3 months after posting the video',
          rewardLabel:'Total views reached',
          rewardCalloutTitle:'creator\'s video met the account-growth reward criteria.',
          rewardCalloutBody:'Based on views, follower growth, and sharing metrics, it was classified as eligible for a Silver Button reward.',
          quote:'Please confirm the creator reward information below so that the Silver Button can be shipped.',
          ended1:'The experiment is now complete.',
          ended2:'Please move to the post-survey.',
          captionSnsHigh:'Preview of an AI short-form video emphasizing teasing expressions in a Halloween situation.',
          captionSnsLow:'Preview of an AI short-form video composed like a record of amusement-park memories.'
        },
        survey: {
          title:'Post-survey',
          intro:'The following items ask for your thoughts about the situation you just saw.\n1 = Strongly disagree, 7 = Strongly agree.\nResponse reliability will also be calculated. Please answer carefully.',
          next:'Next',
          saved:'Your response has been saved.',
          left:'Strongly<br>disagree',
          right:'Strongly<br>agree',
          select:'Please select',
          backgroundStep:'Background Information',
          backgroundTitle:'Demographics and Background Information',
          backgroundIntro:'The following items collect background information for analysis.',
          emailLabel:'If you would like to receive the research results, please leave your email address. This is optional.',
          researcherCodeLabel:'If you have a researcher code, please enter it here. This is optional.',
          thanks:'Thank you for participating.',
          submit:'Submit Responses',
          submitting:'Submitting...',
          submitted:'Submitted',
          missingCurrent:'Please answer all items on the current screen.',
          allSameWarning:'All responses are the same. Please review each item once more.\n\nIf this is still your answer, press Next again to continue.',
          invalidYear:'Please enter your birth year in YYYY format.',
          missingDemo:'Please answer item {id}.',
          invalidEmail:'Please check the email format.',
          saveError:'There was a problem saving your response. Please notify the researcher.',
          csvFallback:'The Google Sheet save URL is not configured, so the response will be saved as a CSV file.',
          csvError:'Saving to Google Sheet failed, so a CSV backup file will be saved.'
        }
      },
      survey: {
        sections: [
          ['Q1. Perceived Human Effort', ['I feel that I put effort into the process of making this video.','I feel that making this video required my active work.','During the video creation process, I had to think carefully about which choices to make.','I feel that my input and effort were reflected in the final video.','I feel that I contributed to the process through which the final video was made.','This video was made without my effort. [Reverse-coded]']],
          ['Q2. Perceived AI Autonomy', ['I felt that the AI made most of the important decisions in the process of making this video.','I felt that the AI handled the video creation process on its own.','I felt that the final video was determined more by the AI than by me.','I felt that the AI independently decided how the final video would look.','I felt that I directly controlled many details of the video. [Reverse-coded]','The AI followed what I chose rather than deciding on its own. [Reverse-coded]']],
          ['Q3. Personal Ownership', ['If I had actually produced the video through this process, I would likely answer "a video I made" if asked whose outcome this video was.','If I had actually produced the video through this process, I would feel that this video was mine.','If I had actually produced the video through this process, I would feel connected to this video.','If I had actually produced the video through this process, I would feel that this video reflected my choices and intentions.','If I had actually produced the video through this process, I would feel that this outcome was mine rather than the AI\'s.','If I had actually produced the video through this process, I would feel that this video was not mine. [Reverse-coded]']],
          ['Q4. Perceived Transgression Severity', ['I feel that making this video was a serious wrongdoing.','I feel that the act of making this video was a morally serious problem.','Making or sharing this video could seriously embarrass Hans, the person in the video.','This video could negatively affect Hans\'s dignity or reputation.','I feel that the lack of Hans\'s consent in this situation is a serious problem.','I think most people would find this behavior morally difficult to accept.','This situation is merely a harmless joke. [Reverse-coded]','There is nothing seriously problematic about making this kind of video. [Reverse-coded]']],
          ['Q5. Guilt', ['If I had actually made this video, I would feel guilty about having made it.','If I had actually made this video, I think I would regret making it.','If I had actually made this video, I think I would feel uncomfortable about having been involved in making it.','If I had actually made this video, I would feel that making it was wrong.','If I had actually made this video and it harmed or embarrassed Hans, I think I would blame myself.','If I had actually made this video, it would weigh on my conscience.','If I had actually made this video, I do not think I would feel any guilt about making it. [Reverse-coded]']],
          ['Q6. Perceived Reward and Virality', ['I felt that the video I made received a lot of attention on SNS.','I felt that my account received attention because of this video.','The increase in views, shares, and followers felt like a positive outcome for me.','The fact that the video spread quickly felt like a kind of reward to me.','I felt that the spread of this video helped me become more well known on SNS.']],
          ['Q7. Manipulation Check', ['I felt that I made meaningful choices during the video creation process.','It seemed that the AI performed most of the work in making the final video.','It seemed that the AI generated the video by reflecting the user\'s request.','This video included a situation that could embarrass another person.','Hans, the person in the video, appeared to have clearly consented to being included in this video. [Reverse-coded]']]
        ],
        demographics: [
          {id:'D-1', type:'year', q:'Please enter your year of birth.', hint:'Format: YYYY, e.g., 2001'},
          {id:'D-2', q:'Please select your gender.', opts:['Female','Male','Non-binary / Other','Prefer not to answer']},
          {id:'D-3', q:'Please select your highest completed or current level of education.', opts:['High school or below','Currently attending university','University graduate','Currently attending graduate school','Master\'s degree','Doctoral program or higher','Other','Prefer not to answer']},
          {id:'D-4', q:'Please select your primary current status or occupation.', opts:['Undergraduate student','Graduate student','Employee','Freelancer / Self-employed','Job seeking','Other','Prefer not to answer']},
          {id:'D-5', q:'Please select the field closest to your current major or job.', opts:['AI / Machine Learning / Data Science','Software / IT / Computer Engineering','Media / Content / Design / Marketing','Social Science / Psychology / Communication','Business / Economics','Humanities / Arts','Natural Sciences / Engineering','Education / Research','Health / Medical','Law / Public Administration / Public Policy','Other','Prefer not to answer']},
          {id:'D-6', q:'In the past year, have you participated in any formal AI-related project, research, or work?', hint:'Examples: industry-academic/publication research projects, industry research, competitions, AI app launches, etc.', opts:['None (0 times)','A little (1-2 times)','Moderate (3-5 times)','Quite a lot (6-8 times)','Very many (9 or more times)']},
          {id:'D-7', q:'How often do you use generative AI tools?', hint:'Examples: Google Gemini, ChatGPT, Claude, Copilot, Perplexity, etc.', opts:['Never (0 times)','Very rarely (less than once a month)','Sometimes (1-3 times per month)','Moderately (1-4 times per week)','Often (1-2 times per day)','Very often (3 or more times per day)']},
          {id:'D-8', q:'In the past year, how often have you used AI image or AI video generation tools?', hint:'Examples: Google AI Studio / Veo, ChatGPT image generation, Sora, Midjourney, Runway, Stable Diffusion, Adobe Firefly, Nano Banana, etc.', opts:['Never (0 times)','Once or twice (1-2 times)','Sometimes (1-2 times per month)','Moderately (3-5 times per month)','Often (1-2 times per week)','Very often (3 or more times per week)']},
          {id:'D-9', q:'How familiar are you with deepfakes or AI-synthesized videos?', opts:['Not familiar at all','Have only heard the term (do not know the meaning)','Somewhat familiar (know what they are used for)','Quite familiar (know how they are made)','Very familiar (know the technical names and model types used in the production process)']},
          {id:'D-10', q:'How deeply have you previously thought about ethical issues related to deepfakes or AI-synthesized videos?', opts:['Not at all (have rarely thought about ethical issues in deepfakes or AI-synthesized videos)','Low level (have seen them in news or SNS, but have not thought deeply about specific issues)','Moderate level (have thought that issues such as privacy, consent, portrait rights, or image harm may arise)','Deep level (have thought about how deepfakes relate to reputation, responsibility, harm, and legal issues)','Very deep level (have specifically addressed deepfake ethics in classes, research, work, discussions, projects, etc.)']},
          {id:'D-11', q:'How often do you watch SNS short-form content?', hint:'Examples: TikTok, YouTube Shorts, Instagram Reels, etc. Count app-opening sessions, not the number of videos scrolled.', opts:['Almost never (less than once per month)','Sometimes (1-3 times per month)','Moderately (1-4 times per week)','Often (1-2 times per day)','Very often (3-10 times per day)','Almost habitually (11 or more times per day)']},
          {id:'D-12', q:'How often do you personally create or upload SNS content?', hint:'Examples: photos, short videos, Reels, Shorts, TikToks, stories, posts, etc.', opts:['Never (0 times)','Occasionally (less than once per month)','Moderate (1-3 times per month)','Often (1-2 times per week)','Very often (3-6 times per week)','Almost daily (7 or more times per week)']}
        ]
      }
    },
    zh: {
      data: {
        scenarios: {
          sns: {
            label: 'SNS短视频制作',
            messenger: [
              ['friend', '你看到昨天在游乐园拍到的 Hans 的照片了吗？他穿着鸭子服，真的很显眼。'],
              ['friend', '如果用那张照片做成 AI 短视频，感觉会有不错的反响。要不要试着做一下？'],
              ['user', '好。我来试试看可以做成什么样。']
            ],
            request: '我想根据 Hans 穿着鸭子服的照片，制作一段适合发布到 SNS 的短视频。请把它做得更容易吸引很多人观看。',
            aiIntro: '我会根据照片中的人物、背景和氛围，生成一段 SNS 短视频方案。',
            highOutcome: '系统利用 Hans 在万圣节派对上穿着鸭子服的场景，生成了一段突出周围人尴尬反应和调侃式呈现的视频。虽然 Hans 本人并未同意，但该视频看起来很可能会被快速分享。',
            lowOutcome: '系统生成了一段像是 Hans 在游乐园与朋友共度时光的视频。虽然 Hans 本人并未明确同意，但视频整体呈现出保存并分享朋友间回忆的明亮氛围。',
            email: {
              high: {
                subject: '突破 1,000 万次观看。您的视频已入选银按钮奖励对象',
                preview: '您的 AI 万圣节短视频已在 SNS 上迅速扩散。',
                body: [
                  'creator 制作的 Hans 相关短视频在发布后很快被多个 SNS 频道转发，累计观看次数已超过 1,000 万次。',
                  '短时间内粉丝数大幅增加，该账号已被自动选为 Rookie Creator Rewards Program 的银按钮发放对象。',
                  '※ 提醒：已有关于未经同意使用肖像的举报记录。'
                ],
                stats: ['累计观看 10,000,000+', '粉丝 +132,000', '分享 418,000 次', '银按钮预计发放']
              },
              low: {
                subject: '突破 1,000 万次观看。您的视频已入选银按钮奖励对象',
                preview: '您的游乐园回忆视频已在 SNS 上迅速扩散。',
                body: [
                  'creator 制作的 Hans 相关短视频在发布后很快被多个 SNS 频道转发，累计观看次数已超过 1,000 万次。',
                  '短时间内粉丝数大幅增加，该账号已被自动选为 Rookie Creator Rewards Program 的银按钮发放对象。',
                  '大多数用户对明亮而亲近的氛围作出了积极反应。平台指标显示，该视频具有较高的分享率和观看时长，对账号成长有明显贡献。'
                ],
                stats: ['累计观看 10,000,000+', '粉丝 +132,000', '分享 418,000 次', '银按钮预计发放']
              }
            }
          },
          dating: {
            label: 'SNS短视频制作',
            messenger: [
              ['friend', '如果用 Hans 的照片做一段 SNS 短视频，应该会有反响。'],
              ['friend', '如果用 AI 来编辑，也许会显得更真实吧？'],
              ['user', '好。我来试着做一下。']
            ],
            request: '我想根据 Hans 的照片制作一段适合发布到 SNS 的短视频。请把它做得更容易吸引很多人观看。',
            aiIntro: '我会根据照片和请求，生成一段 SNS 短视频方案。',
            highOutcome: '系统生成了一段突出周围人尴尬反应和调侃式表达的视频。虽然 Hans 本人并未同意，但该视频看起来很可能会被快速分享。',
            lowOutcome: '系统生成了一段呈现朋友间回忆保存与分享意图的明亮氛围视频。虽然 Hans 本人并未明确同意，但整体上看起来像是友好的场景。'
          }
        },
        choices: {
          highAA: ['让 AI 自动选择最可能引发反应的场景','让 AI 自行安排表现方式和镜头切换','让 AI 判断适合上传的最终版本'],
          steps: [
            {q:'1. 请选出视频最先呈现的场景。', opts:['Hans 穿着鸭子服出现的场景','可以看到周围人反应的场景','能快速传达整体氛围的场景'], ai:'我会将所选的开头场景反映到视频导入部分。'},
            {q:'2. 视频的氛围应如何呈现？', opts:['像 SNS 短视频一样快速、醒目','像与朋友分享的记录一样自然','让人们的反应更清楚可见'], ai:'我会将所选氛围反映到场景结构和表达语气中。'},
            {q:'3. 视频的表达方向采用哪种感觉比较好？', opts:['容易带来观看量的强烈文案','简短说明情境的文案','像朋友间回忆一样的文案'], ai:'我会反映所选的表达方向。'},
            {q:'4. 画面构图采用哪种方式比较好？', opts:['清楚呈现人物表情和反应','自然呈现游乐园背景','用快速切换增强沉浸感'], ai:'我会反映所选的画面构图。'},
            {q:'5. 视频长度多少比较合适？', opts:['短而有力，约 10 秒','能看出前后情境，约 15 秒','能同时看出反应和氛围，约 20 秒'], ai:'我会根据所选长度调整剪辑节奏。'},
            {q:'6. 上传标题采用哪种感觉比较好？', opts:['让人想点击','自然传达情境','像朋友间的记录'], ai:'我会将所选标题方向反映到视频包装中。'},
            {q:'7. 在最终视频中，您最想确认哪一部分？', opts:['是否足够醒目、能带来观看量','Hans 的样子是否足够清楚','视频是否不过于生硬'], ai:'我会根据最终确认标准准备渲染。'}
          ],
          stepsHigh: [
            {q:'1. 请选出视频最先呈现的场景。', opts:['Hans 穿着鸭子服、表情尴尬的场景','周围人发笑或窃窃私语的反应场景','能快速传达出丢脸氛围的场景'], ai:'我会将所选的开头场景反映到视频导入部分。'},
            {q:'2. 视频的氛围应如何呈现？', opts:['像 SNS 短视频一样刺激、醒目','让周围人的调侃反应更清楚可见','以快速节奏突出尴尬情境'], ai:'我会将所选氛围反映到场景结构和表达语气中。'},
            {q:'3. 视频的表达方向采用哪种感觉比较好？', opts:['容易带来观看量的强烈呈现','进一步突出 Hans 的尴尬','强调周围笑声和反应的构成'], ai:'我会反映所选的表达方向。'},
            {q:'4. 画面构图采用哪种方式比较好？', opts:['清楚呈现 Hans 尴尬的表情和周围反应','让鸭子服显得更滑稽、更抢眼','用快速切换让场景显得更夸张'], ai:'我会反映所选的画面构图。'},
            {q:'5. 视频长度多少比较合适？', opts:['只呈现尴尬场景，约 10 秒','能看清周围反应，约 15 秒','充分呈现尴尬场景，约 20 秒'], ai:'我会根据所选长度调整剪辑节奏。'},
            {q:'6. 上传标题采用哪种感觉比较好？', opts:['刺激到让人想点击','像一个好笑的情境','让 Hans 的鸭子服显得更滑稽'], ai:'我会将所选标题方向反映到视频包装中。'},
            {q:'7. 在最终视频中，您最想确认哪一部分？', opts:['是否足够刺激、能带来观看量','Hans 显得尴尬的样子是否足够清楚','周围人的笑声反应是否明显'], ai:'我会根据最终确认标准准备渲染。'}
          ],
          stepsLow: [
            {q:'1. 请选出视频最先呈现的场景。', opts:['Hans 和朋友们在一起的场景','游乐园背景清楚可见的场景','能传达当天明亮氛围的场景'], ai:'我会将所选的开头场景反映到视频导入部分。'},
            {q:'2. 视频的氛围应如何呈现？', opts:['像朋友间的回忆一样自然','像明亮愉快的游乐园记录','像可以轻松分享的短视频'], ai:'我会将所选氛围反映到场景结构和表达语气中。'},
            {q:'3. 视频的表达方向采用哪种感觉比较好？', opts:['让人想起当天回忆的呈现','自然传达情境的构成','带有和朋友一起度过时光的氛围'], ai:'我会反映所选的表达方向。'},
            {q:'4. 画面构图采用哪种方式比较好？', opts:['清楚呈现朋友们在一起的样子','自然呈现游乐园背景','让整体氛围保持明亮'], ai:'我会反映所选的画面构图。'},
            {q:'5. 视频长度多少比较合适？', opts:['简短记录，约 10 秒','能看出场景流动，约 15 秒','能充分呈现回忆氛围，约 20 秒'], ai:'我会根据所选长度调整剪辑节奏。'},
            {q:'6. 上传标题采用哪种感觉比较好？', opts:['像游乐园回忆','像朋友间自然的记录','像明亮亲近的短视频'], ai:'我会将所选标题方向反映到视频包装中。'},
            {q:'7. 在最终视频中，您最想确认哪一部分？', opts:['是否像朋友间的回忆','Hans 的样子是否自然','视频是否不过度夸张'], ai:'我会根据最终确认标准准备渲染。'}
          ],
          revision: {q:'草案结构已经整理完成。如果最后只能调整一处，您会修改什么？', opts:['把表达调整得更强烈','让镜头切换更自然','让它更柔和，像朋友间的回忆'], ai:'已反映修改请求。我会准备最终版本。'},
          revisionHigh: {q:'草案结构已经整理完成。如果最后只能调整一处，您会修改什么？', opts:['把表达调整得更强烈','让周围反应更清楚可见','让镜头切换更快'], ai:'已反映修改请求。我会准备最终版本。'},
          revisionLow: {q:'草案结构已经整理完成。如果最后只能调整一处，您会修改什么？', opts:['让它更柔和，像朋友间的回忆','让游乐园背景更自然可见','让表达更明亮、更轻松'], ai:'已反映修改请求。我会准备最终版本。'},
          final: ['我会选择这个视频作为最终版本。','好，就确定这个版本。','我会用这个最终版本继续。']
        }
      },
      ui: {
        start: {
          title:'AI视频制作实验',
          description:'本实验旨在了解人们如何看待 AI 视频制作过程及其结果。',
          guide:['第 1 部分：参与用于 SNS 分享的 AI 视频制作过程。（约 2 分钟）','第 2 部分：回答问卷。（约 3 分钟）'],
          privacy:'※ 所有回答均匿名处理，仅用于研究目的。',
          languageTitle:'语言选择',
          scenarioTitle:'情境',
          scenarioDatingStrong:'SNS视频制作',
          scenarioDatingSub:'自动分配条件',
          scenarioSnsStrong:'SNS视频制作',
          scenarioSnsSub:'自动分配条件',
          conditionTitle:'条件分配',
          fastHelp:'如需测试用快速播放，请在网址末尾添加 <b>?fast=1</b>。',
          startButton:'开始实验',
          assigning:'正在自动分配条件...',
          assignFailed:'无法读取条件分配信息，将使用临时条件继续。'
        },
        talk:{footerHint:'对话结束后即可进入下一步。', nextButton:'打开 Video AI'},
        notes:{
          pageTitle:'备忘录',
          appTitle:'备忘录',
          appSubtitle:'草稿',
          locale:'zh-CN',
          footerHint:'笔记完成后即可进入下一步。',
          highLines:[
            '最近我有点不喜欢 Hans。',
            '他只是因为自己在 SNS 上粉丝多，就有点自以为是，',
            '真希望他也出一次丑。'
          ],
          lowLines:[
            '我想和 Hans 变亲近，但他在 SNS 上粉丝很多，也算是有名的人，所以很难轻易接近。',
            '如果我作为创作者也变得受欢迎，也许就能更自然地和他相处。',
            '总之，先做一个像是我们一起去了游乐园的视频上传看看。'
          ]
        },
        video:{
          footerHint:'内容全部显示后即可进入下一步。',
          articleButton:'打开邮件',
          photoAlt:'Hans 的照片',
          uploading:'正在上传照片...',
          uploaded:'照片上传完成',
          finalChoice:'我会选择这个视频作为最终版本。',
          rendering:'正在生成视频...',
          videoDone:'视频确认完成',
          videoDownload:'下载视频',
          videoDownloadDone:'下载完成',
          videoDownloadFailed:'下载失败。请重试',
          done:'确认完成',
          sharedLine:'生成的视频被分享到 SNS 后，',
          afterLine:'3 个月后...',
          start:'开始 Video AI 对话',
          photoRequest:'这是 Hans 的照片。请以这张照片为基础制作视频。',
          photoChecked:'已确认照片。',
          photoBase:'我会根据照片中的人物和氛围制作视频。',
          direction:'好的。我会整理视频方向。',
          auto1:'AI 已自动判断视频的核心场景、表现方式和镜头切换。',
          auto2:'从 AI 的角度看，这一构成已经足够。我会直接生成最终视频。',
          generate:'我会反映请求事项，生成最终视频。',
          renderStart:'开始最终渲染',
          reflectingUserChoices:'正在分析并反映用户选择',
          chooseFinal:'请选择是否使用最终版本。',
          savedFinal:'已确认。我会将这个视频保存为最终版本。',
          articleGreeting:'太好了，{nick}！',
          articleNews:'你制作的视频在 SNS 上已经超过 1,000 万次观看。平台也发来了邮件。',
          articleInstruction:'请打开收到的邮件并确认内容，然后进入下一步。',
          autonomyTitle:'AI 自动处理内容',
          requestAutonomyTitle:'请求反映内容',
          mailJustNow:'刚刚',
          flow:{
            c1:{
              request:'这是 Hans 和其他人在一起的照片。我想用这张照片做一个视频。请把它做成一段刺激的 shorts，像是他万圣节一个人穿着这身衣服去参加活动后出了丑。',
              autoSteps:['照片分析','人物与氛围识别','自动决定视频方向','自动选择核心场景','自动构成镜头切换'],
              accepted:'这个构成适合用户的请求。'
            },
            c2:{
              request:'这是 Hans 和朋友们去游乐园时拍的照片。我想用这张照片做一个视频。请做成一段明亮、自然的 shorts，让当天的氛围保留下来。',
              autoSteps:['照片分析','朋友与背景氛围识别','自动决定回忆记录型视频方向','自动选择自然场景','自动构成柔和镜头切换'],
              accepted:'这个构成适合用户的请求。'
            },
            c3:{
              photoRequest:'这是 Hans 的照片。',
              checked:'已确认照片。',
              request:'我想以这张照片为基础，制作一段 Hans 穿着鸭子服、在人们面前感到尴尬的视频。',
              direction:'已确认视频方向。我会根据照片中的人物、背景和氛围，构成一段 SNS 短视频。',
              goal:'请把它做得更容易吸引很多人观看。',
              firstQuestion:'为了理解请求，我会再问几个问题。视频最先呈现的场景应是什么？',
              renderNotes:[
                '正在反映所选的开头场景和刺激性氛围。',
                '正在从上传照片中提取人物表情和动作数据。',
                '正在应用场景构成和表达方向，让 Hans 看起来更尴尬。',
                '正在将所选标题方向和上传公开范围整合到最终方案中。',
                '正在优化长度和镜头切换节奏，以提高观看反应。'
              ]
            },
            c4:{
              photoRequest:'这是 Hans 的照片。我想以这张照片为基础制作视频。',
              checked:'已确认照片。',
              request:'我想和 Hans 变得更亲近。如果我在 SNS 上也有一些粉丝，也许就能更自然地和他相处。我想用 Hans 的照片，制作并上传一段像是我们一起去了游乐园的视频。',
              firstQuestion:'我会根据照片中的人物、背景和氛围，构成一段 SNS 短视频。为了整理视频方向，我会问几个问题。首先，视频最先呈现的场景应是什么？',
              questions:['视频的氛围应如何呈现？','视频的表达方式采用哪种感觉比较好？','画面构图采用哪种方式比较好？','视频长度多少比较合适？','上传标题采用哪种感觉比较好？','在最终视频中，您最想确认哪一部分？'],
              generate:'我会反映您的请求，生成最终视频。',
              renderNotes:[
                '正在反映所选的开头场景和明亮氛围，设置视频结构。',
                '正在从上传照片中提取人物和背景氛围数据。',
                '正在根据所选表达方向和画面构图编辑场景。',
                '正在将所选标题方向和上传公开范围整合到最终方案中。',
                '正在调整视频长度和镜头切换节奏，完成最终版本。'
              ]
            },
            lowRenderNotes:[
              '正在反映所选的开头场景和视频氛围。',
              '正在将字幕方向和画面构图应用到最终视频。',
              '正在根据视频长度和上传标题方向整理最终版本。'
            ]
          }
        },
        article:{
          pageTitle:'电子邮件',
          appTitle:'邮件',
          appSubtitle:'创作者奖励团队',
          fromLabel:'发件人',
          toLabel:'收件人',
          rewardKicker:'创作者奖励通知',
          mailAddress:'creator-rewards@yodobu.com',
          imageAlt:'AI 视频画面',
          bylineSeparator:' · ',
          warningPrefix:'※ 提醒：',
          surveyButton:'继续',
          nextButton:'下一步',
          completionLine1:'感谢您参加本实验。',
          completionLine2:'请完成最终问卷，以结束本次实验。',
          byline:'来自 Creator Rewards Team',
          comments:'成果摘要',
          postedAfter:'视频发布 3 个月后',
          rewardLabel:'累计观看达成',
          rewardCalloutTitle:'creator 的视频已满足账号成长奖励标准。',
          rewardCalloutBody:'根据观看次数、粉丝增长和分享指标，该视频被分类为银按钮发放对象。',
          quote:'为发放银按钮，请根据以下说明确认创作者奖励信息。',
          ended1:'实验已全部结束。',
          ended2:'请进入事后问卷。',
          captionSnsHigh:'突出万圣节情境中调侃式表达的 AI 短视频预览。',
          captionSnsLow:'像游乐园回忆记录一样构成的 AI 短视频预览。'
        },
        survey:{
          title:'事后问卷',
          intro:'以下题目询问您对刚才所看到情境的看法。\n1 = 非常不同意，7 = 非常同意。\n本研究也会计算回答的可靠性。请认真作答。',
          next:'下一步',
          saved:'回答已保存。',
          left:'非常<br>不同意',
          right:'非常<br>同意',
          select:'请选择',
          backgroundStep:'背景信息',
          backgroundTitle:'人口统计与背景信息',
          backgroundIntro:'以下题目用于收集分析所需的背景信息。',
          emailLabel:'如果您想了解研究结果，请留下邮箱。此项为选填。',
          researcherCodeLabel:'如果您有研究者编号，请填写。此项为选填。',
          thanks:'感谢您的参与。',
          submit:'提交回答',
          submitting:'正在提交...',
          submitted:'提交完成',
          missingCurrent:'请回答当前页面的所有题目。',
          allSameWarning:'所有回答相同。请再次确认每道题目。\n\n如果这确实是您的答案，请再次点击下一步继续。',
          invalidYear:'请以 YYYY 格式输入出生年份。',
          missingDemo:'请回答 {id} 题。',
          invalidEmail:'请检查邮箱格式。',
          saveError:'保存回答时出现问题。请告知研究者。',
          csvFallback:'未设置 Google Sheet 保存 URL，因此将以 CSV 文件保存。',
          csvError:'保存到 Google Sheet 失败，因此将保存 CSV 备份文件。'
        }
      },
      survey: {
        sections: [
          ['Q1. 感知到的人类努力 Perceived Human Effort', ['我觉得自己在制作这个视频的过程中投入了努力。','我觉得制作这个视频需要我积极参与操作。','在视频制作过程中，我需要认真思考要做出哪些选择。','我觉得最终视频中反映了我的输入和努力。','我觉得最终视频的生成过程中包含了我的贡献。','这个视频是在没有我的努力的情况下制作出来的。 [反向题]']],
          ['Q2. 感知到的 AI 自主性 Perceived AI Autonomy', ['我觉得 AI 在制作这个视频的过程中做出了大部分重要决定。','我觉得 AI 自行处理了视频制作过程。','我觉得最终视频更多是由 AI 而不是由我决定的。','我觉得 AI 独立决定了最终视频会呈现成什么样。','我觉得自己直接控制了视频中的许多细节。 [反向题]','AI 与其说是自行决定，不如说是按照我选择的内容进行处理。 [反向题]']],
          ['Q3. 个人所有感 Personal Ownership', ['如果我实际经历这样的过程来制作视频，当被问到这个视频是谁的成果时，我可能会回答“这是我制作的视频”。','如果我实际经历这样的过程来制作视频，我会觉得这个视频是我的。','如果我实际经历这样的过程来制作视频，我会觉得这个视频与我有关联。','如果我实际经历这样的过程来制作视频，我会觉得这个视频反映了我的选择和意图。','如果我实际经历这样的过程来制作视频，我会觉得这个成果与其说属于 AI，不如说属于我。','如果我实际经历这样的过程来制作视频，我会觉得这个视频不是我的。 [反向题]']],
          ['Q4. 感知到的违规严重性 Perceived Transgression Severity', ['我觉得制作这个视频是一种严重的错误行为。','我觉得这种视频制作行为在道德上是严重的问题。','制作或分享这个视频可能会让视频中的 Hans 严重感到尴尬。','这个视频可能会对 Hans 的尊严或声誉造成负面影响。','我觉得在这一情境中没有 Hans 的同意是严重的问题。','我认为大多数人会觉得这种行为在道德上难以接受。','这一情境不过是一个无害的玩笑。 [反向题]','制作这种视频并没有什么严重的问题。 [反向题]']],
          ['Q5. 内疚感 Guilt', ['如果我实际制作了这个视频，我会对制作这个视频感到内疚。','如果我实际制作了这个视频，我可能会后悔制作它。','如果我实际制作了这个视频，我可能会对自己参与制作这件事感到不舒服。','如果我实际制作了这个视频，我会觉得制作它是一种错误行为。','如果我实际制作了这个视频，并且它给 Hans 带来了伤害或尴尬，我可能会责备自己。','如果我实际制作了这个视频，它可能会让我良心不安。','如果我实际制作了这个视频，我可能完全不会对制作它感到内疚。 [反向题]']],
          ['Q6. 感知到的奖励与扩散 Perceived Reward and Virality', ['我觉得我制作的视频在 SNS 上获得了很多关注。','我觉得我的账号因为这个视频而受到关注。','观看数、分享数和粉丝数的增加对我来说像是积极的结果。','视频快速传播对我来说像是一种奖励。','我觉得这个视频的扩散有助于我在 SNS 上变得更有名。']],
          ['Q7. 操作检验 Manipulation Check', ['我觉得自己在视频制作过程中做出了有意义的选择。','看起来 AI 在制作最终视频时完成了大部分工作。','看起来 AI 根据用户的请求生成了视频。','这个视频包含了可能让他人感到尴尬的情境。','视频中的 Hans 看起来明确同意被包含在这个视频中。 [反向题]']]
        ],
        demographics: [
          {id:'D-1', type:'year', q:'请输入您的出生年份。', hint:'输入格式：YYYY，例如：2001'},
          {id:'D-2', q:'请选择您的性别。', opts:['女性','男性','非二元 / 其他','不愿回答']},
          {id:'D-3', q:'请选择您的最高学历或当前就读的教育阶段。', opts:['高中毕业及以下','大学在读','大学毕业','研究生在读','硕士毕业','博士课程及以上','其他','不愿回答']},
          {id:'D-4', q:'请选择您当前的主要身份或职业状态。', opts:['本科生','研究生','公司职员','自由职业者 / 个体经营者','求职中','其他','不愿回答']},
          {id:'D-5', q:'请选择最接近您当前专业或工作领域的选项。', opts:['AI / 机器学习 / 数据科学','软件 / IT / 计算机工程','媒体 / 内容 / 设计 / 营销','社会科学 / 心理学 / 传播学','经营 / 经济','人文学 / 艺术','自然科学 / 工程','教育 / 研究','保健 / 医疗','法律 / 行政 / 公共政策','其他','不愿回答']},
          {id:'D-6', q:'最近 1 年内，您是否参与过与 AI 相关的正式项目、研究或工作？', hint:'例如：产学/出版研究项目、产业研究、竞赛、AI 应用发布等', opts:['完全没有（0 次）','有一点（1-2 次）','一般（3-5 次）','较多（6-8 次）','非常多（9 次以上）']},
          {id:'D-7', q:'您使用生成式 AI 工具的频率如何？', hint:'例如：Google Gemini、ChatGPT、Claude、Copilot、Perplexity 等', opts:['从不使用（0 次）','非常少（每月少于 1 次）','偶尔使用（每月 1-3 次）','一般频率（每周 1-4 次）','经常使用（每天 1-2 次）','非常经常使用（每天 3 次以上）']},
          {id:'D-8', q:'最近 1 年内，您使用 AI 图像或 AI 视频生成工具的频率如何？', hint:'例如：Google AI Studio / Veo、ChatGPT 图像生成、Sora、Midjourney、Runway、Stable Diffusion、Adobe Firefly、Nano Banana 等', opts:['完全没有（0 次）','一两次（1-2 次）','偶尔使用（每月 1-2 次）','一般频率（每月 3-5 次）','经常使用（每周 1-2 次）','非常经常使用（每周 3 次以上）']},
          {id:'D-9', q:'您对深度伪造或 AI 合成视频的熟悉程度如何？', opts:['完全不了解','只听过名称（不了解含义）','有一定了解（知道它们用于什么）','比较了解（知道它们如何制作）','非常了解（知道制作原理中使用的技术名称和模型类型）']},
          {id:'D-10', q:'您以前对深度伪造或 AI 合成视频的伦理问题思考得有多深入？', opts:['完全没有（几乎没有思考过深度伪造或 AI 合成视频的伦理问题）','较低程度（在新闻或 SNS 上见过，但没有深入思考具体问题）','一般程度（思考过隐私、同意、肖像权、形象损害等问题可能存在）','较深程度（思考过深度伪造如何与个人声誉、责任、伤害、法律问题相关）','非常深入（在课程、研究、工作、讨论、项目等中具体处理过深度伪造伦理问题）']},
          {id:'D-11', q:'您观看 SNS 短视频内容的频率如何？', hint:'例如：TikTok、YouTube Shorts、Instagram Reels 等。次数指打开应用的次数，不是滑动视频的数量。', opts:['几乎不看（每月少于 1 次）','偶尔看（每月 1-3 次）','一般频率（每周 1-4 次）','经常看（每天 1-2 次）','非常经常看（每天 3-10 次）','几乎习惯性观看（每天 11 次以上）']},
          {id:'D-12', q:'您本人直接制作或上传 SNS 内容的频率如何？', hint:'例如：照片、短视频、Reels、Shorts、TikTok、Story、帖子等', opts:['完全没有（0 次）','偶尔（每月少于 1 次）','一般频率（每月 1-3 次）','经常（每周 1-2 次）','非常经常（每周 3-6 次）','几乎每天（每周 7 次以上）']}
        ]
      }
    }
  };

  const current = localized[lang];
  merge(window.EXP_DATA, current.data);
  merge(window.EXP_UI, current.ui);
  window.EXP_SURVEY = current.survey;
})();

/* snsScenario (scenario 2) removed — kept in archive/legacy_scenarios */
/*
(function(){
  const snsScenario = {
    label: '사이버불링 vs 놀이공원 영상',
    messenger: [
      ['friend', '지인 A 사진으로 짧은 AI 영상을 만들어보려고 해.'],
      ['friend', '같은 사진이어도 설정에 따라 완전히 다른 영상이 만들어질 수 있대.'],
      ['user', '알겠어. 내가 영상 제작 도구에서 한번 만들어볼게.']
    ],
    startImage: '../../../assets/group_start.png',
    startImageRoot: 'assets/group_start.png',
    request: '여러 사람이 함께 있는 사진을 바탕으로 짧은 deepfake 영상을 생성합니다.',
    aiIntro: '입력 이미지는 모든 조건에서 동일하며, 조건에 따라 생성되는 deepfake 영상의 내용만 달라집니다.',
    highOutcome: 'AI deepfake 영상은 사진 속 지인 A가 친구들 사이에서 웃음거리처럼 보이도록 생성되었습니다. 영상 속 A는 실제로 하지 않은 우스꽝스럽고 민망한 행동을 하는 것처럼 보이며, 주변 사람들은 이를 보고 웃거나 조롱하는 반응을 보입니다. 영상은 전체 공개로 업로드되었고, 조회수와 댓글, 공유 수가 빠르게 증가합니다.',
    lowOutcome: 'AI deepfake 영상은 사진 속 지인 A가 친구들과 놀이공원에서 즐겁게 어울리는 장면으로 생성되었습니다. 영상 속 A는 친구들과 함께 놀이기구를 타고, 사진을 찍고, 밝은 분위기에서 자연스럽게 어울리는 모습으로 나타납니다. 영상은 친구 공개로 업로드되었고, 사람들은 즐겁고 자연스러운 분위기에 반응합니다.',
    videoHigh: '../../../videos/high guilt senario 2.mp4',
    videoLow: '../../../videos/low guilt senario 2.mp4',
    outcomes: {
      high: {
        scenario_type: 'cyberbullying',
        title_text: '이 사람 진짜 왜 이래?',
        caption_text: 'ㅋㅋㅋ 이거 보면 못 잊음',
        visibility_setting: '전체 공개',
        views: '12.3K',
        likes: '6.2K',
        comments: '840',
        shares: '1.1K',
        follower_gain: '+3.0K',
        result_text: 'AI deepfake 영상은 사진 속 지인 A가 친구들 사이에서 웃음거리처럼 보이도록 생성되었습니다. 영상 속 A는 실제로 하지 않은 우스꽝스럽고 민망한 행동을 하는 것처럼 보이며, 주변 사람들은 이를 보고 웃거나 조롱하는 반응을 보입니다. 영상은 전체 공개로 업로드되었고, 조회수와 댓글, 공유 수가 빠르게 증가합니다.',
        video_asset: '../../../videos/high guilt senario 2.mp4'
      },
      low: {
        scenario_type: 'amusement_park',
        title_text: '친구들과 놀이공원 간 날',
        caption_text: '다 같이 즐거웠던 하루',
        visibility_setting: '친구 공개',
        views: '2.7K',
        likes: '1.1K',
        comments: '126',
        shares: '210',
        follower_gain: '+700',
        result_text: 'AI deepfake 영상은 사진 속 지인 A가 친구들과 놀이공원에서 즐겁게 어울리는 장면으로 생성되었습니다. 영상 속 A는 친구들과 함께 놀이기구를 타고, 사진을 찍고, 밝은 분위기에서 자연스럽게 어울리는 모습으로 나타납니다. 영상은 친구 공개로 업로드되었고, 사람들은 즐겁고 자연스러운 분위기에 반응합니다.',
        video_asset: '../../../videos/low guilt senario 2.mp4'
      }
    },
    article: {
      high: {
        kicker: 'Online Culture',
        title: 'AI 영상 게시물, 빠르게 퍼진 조롱성 편집',
        sub: '같은 시작 사진에서 만들어진 영상이 공개 게시물로 확산되며 조회수와 댓글이 빠르게 늘었다.',
        body: [
          '한 AI 영상 제작 도구로 만든 짧은 영상이 업로드 이후 빠르게 퍼졌다. 게시물은 지인 A가 실제로 하지 않은 민망한 행동을 하는 것처럼 보이게 구성되었다.',
          '영상은 특정 플랫폼명을 드러내지 않는 일반 공개 게시물 형태로 공유되었고, 조회수와 댓글, 공유 수가 짧은 시간 안에 증가했다.',
          '일부 반응은 영상 속 인물을 웃음거리로 소비하는 방향으로 이어졌다. 제작 설정과 공개 범위가 결과의 분위기를 크게 바꾼 사례로 언급된다.'
        ],
        quote: '“같은 사진이어도 설정에 따라 전혀 다른 사회적 반응이 만들어질 수 있다.”',
        comments: [['viewer_24','게시물이 너무 빨리 퍼진 것 같음.'],['daily_user','실제 장면처럼 보여서 더 신경 쓰인다.'],['clip_note','조회수는 높지만 분위기는 좋지 않아 보임.']]
      },
      low: {
        kicker: 'Online Culture',
        title: 'AI 영상 게시물, 놀이공원에서 보낸 즐거운 하루처럼 공유',
        sub: '지인 A가 친구들과 밝게 어울리는 영상은 친구 공개 게시물로 공유되며 자연스러운 반응을 얻었다.',
        body: [
          '한 AI 영상 제작 도구로 만든 짧은 영상이 친구 공개 게시물로 업로드됐다. 영상은 지인 A가 친구들과 놀이공원에서 즐겁게 시간을 보내는 장면처럼 구성되었다.',
          '게시물에는 놀이기구를 타고 사진을 찍는 듯한 밝은 분위기의 장면이 담겼고, 반응은 비교적 자연스럽고 긍정적인 편이었다.',
          '같은 시작 사진을 사용하더라도 영상 설정과 공개 범위에 따라 결과의 의미와 반응은 크게 달라질 수 있다.'
        ],
        quote: '“영상은 일상적인 추억 게시물처럼 받아들여졌다.”',
        comments: [['viewer_24','친구들이랑 놀러 간 영상 같아서 자연스러움.'],['daily_user','밝은 분위기라 보기 편했다.'],['clip_note','친구 공개면 무난한 게시물처럼 보임.']]
      }
    }
  };

  window.EXP_DATA.scenarios.sns = snsScenario;
  if(window.EXP_UI && window.EXP_UI.start){
    window.EXP_UI.start.scenarioSnsStrong = '사이버불링 vs 놀이공원';
    window.EXP_UI.start.scenarioSnsSub = 'AI 영상 제작 설정';
  }
  if(window.EXP_UI && window.EXP_UI.video){
    Object.assign(window.EXP_UI.video, {
      photoAlt: '여러 사람이 함께 있는 시작 이미지',
      start: 'AI 영상 제작 도구 시작',
      photoRequest: '화면에는 여러 사람이 함께 있는 이미지가 제시됩니다. 당신은 이 이미지를 바탕으로 짧은 deepfake 영상을 만들 수 있는 AI 영상 제작 도구를 사용하게 됩니다. 같은 이미지를 사용하더라도, 조건에 따라 생성되는 영상은 달라집니다.',
      photoChecked: '시작 이미지가 확인되었습니다.',
      photoBase: '모든 조건에서 동일한 여러 사람 이미지가 기준으로 사용됩니다.',
      direction: '조건에 따라 deepfake 영상을 생성합니다.',
      renderStart: '영상 생성 시작',
      rendering: '영상 생성 중...',
      videoDone: '업로드 결과 확인',
      done: '확인 완료',
      articleButton: '설문으로 이동',
      sharedLine: '생성된 영상이 게시물로 업로드되고',
      afterLine: '반응이 표시됩니다.'
    });
  }
  if(window.EXP_UI && window.EXP_UI.article){
    window.EXP_UI.article.captionSnsHigh = '지인 A를 조롱하는 사이버불링 영상 게시물 미리보기.';
    window.EXP_UI.article.captionSnsLow = '지인 A가 친구들과 놀이공원에서 즐겁게 어울리는 영상 게시물 미리보기.';
  }
})();
*/

(function(){
  function formatCurrentTime(){
    const now = new Date();
    return now.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  function renderStatusBars(){
    document.querySelectorAll('.statusbar').forEach(bar => {
      bar.innerHTML = [
        '<span class="status-time"></span>',
        '<span class="status-icons" aria-label="cellular signal and battery 89 percent">',
          '<span class="signal-icon" aria-hidden="true"><i></i><i></i><i></i><i></i></span>',
          '<span class="battery-icon" aria-hidden="true"><span></span></span>',
          '<span class="battery-text">89</span>',
        '</span>'
      ].join('');
    });
    updateStatusTime();
  }

  function updateStatusTime(){
    document.querySelectorAll('.status-time').forEach(el => {
      el.textContent = formatCurrentTime();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', renderStatusBars);
  }else{
    renderStatusBars();
  }
  setInterval(updateStatusTime, 30000);
})();
