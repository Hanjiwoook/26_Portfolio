window.projectsData = [
    // ---------------------------------------------------------
    // PROJECTS (개발 + QA 통합 — 문제 해결 스토리 중심)
    // ---------------------------------------------------------
    {
      "id": "project-morphing",
      "sectionId": "projects",
      "placeholderLabel": "Morphing I (Intern)",
      "title": "(주)모핑아이 - 사내 관제 시스템 개발 (인턴십)",
      "period": "2025.11 ~ 2026.01",
      "summary": "분산되어 실행되던 비효율적인 다중 프로그램 구조를 '단일 통합 윈도우 UI'로 합치면서, 오히려 시스템 부하량은 획기적으로 낮춘 관제 시스템 고도화 프로젝트.",
      "tags": ["Python", "PyQt5", "OpenCV", "Gemini API", "SQLite"],
      "devDetails": "<h3>🤔 왜 이 구조를 바꿨나?</h3><p>기존 관제 시스템은 <b>3D 파이프 렌더링 창, 센서 모니터링 창, 카메라 뷰어가 각각 독립된 프로그램</b>으로 실행되고 있었습니다. 운영자는 3개 프로그램을 동시에 띄워놓고 번갈아 확인해야 했고, 시스템 간 데이터 동기화도 불안정했습니다.</p><h3>🔧 핵심 구현</h3><ul><li><b>단일 GUI 통합(Consolidation):</b> 3개의 독립 프로그램을 하나의 PyQt5 윈도우로 완벽하게 병합. 탭/패널 구조로 운영자의 화면 전환 부담을 제거했습니다.</li><li><b>부하 역전 최적화:</b> 통합하면 부하가 3배 증가할 것이라는 우려가 있었으나, 내부 처리 로직을 멀티프로세스로 분리하고 렌더링 파이프라인을 최적화하여 <b>오히려 개별 실행 때보다 가볍게 동작</b>하도록 고도화했습니다.</li><li><b>AI 리포트 자동화:</b> 센서 수치 변동을 파싱하여 Google Gemini API로 전송, 이상 징후 탐지 결과가 담긴 PDF 리포트를 100% 자동 생성하는 로직을 구현했습니다.</li></ul>",
      "qaDetails": "<h3>🐛 발견한 이슈 & 해결</h3><ul><li><b>메모리 누수 (Memory Leak):</b> 24시간 연속 가동 테스트 중 OpenCV 카메라 버퍼가 프로세스 간 공유 메모리에서 제대로 해제되지 않아 RAM 점유율이 지속 상승하는 현상 발견. → 영상 프레임 수신 후 즉시 폐기하는 버퍼 관리 규칙을 수립하여 메모리 안정화.</li><li><b>DB 교착(Deadlock):</b> 데이터 저장 프로세스와 UI 읽기 프로세스가 SQLite 파일에 동시 접근할 때 <code>Database is locked</code> 에러 발생. → Queue 기반 비동기 처리 방식으로 DB 접근을 직렬화하여 교착 원천 차단.</li></ul><h3>📊 검증 결과</h3><ul><li>통합 후 24시간 무중단 가동 시 데이터 누락 제로 달성</li><li>UI 반응 속도 대폭 개선 (체감 2~3초 → 즉시 반응)</li></ul><p style='margin-top:2rem; font-size:0.9rem; color:var(--text-secondary); text-align:center;'>※ 회사 내부 보안 규정(NDA)에 따라 시스템 스크린샷은 첨부하지 않았습니다.</p>",
      "imageUrl": "",
      "githubUrl": ""
    },
    {
        "id": "project-gather-us",
        "sectionId": "projects",
        "placeholderLabel": "Gather Us Web",
        "title": "Gather Us - 단체 여행 N빵/숙소 큐레이션 플랫폼",
        "period": "2026.03",
        "summary": "8~15인 규모의 단체 여행객을 타겟으로 한 복잡한 할증 로직 계산 및 맞춤형 숙소 추천 서비스.",
        "tags": ["Next.js 15", "TypeScript", "Zustand", "Playwright", "CI/CD"],
        "devDetails": "<h3>🤔 왜 만들었나?</h3><p>기존 여행 플랫폼(야놀자/여기어때)은 <b>2~4인 소규모 여행만 최적화</b>되어 있습니다. 8~15인 단체 여행에서는 '성수기 할증 + 인원별 추가 요금 + 옵션별 가격 변동'을 매번 <b>카톡이나 엑셀로 수동 계산</b>하는 페인 포인트가 있었습니다.</p><h3>🔧 핵심 구현</h3><ul><li><b>실시간 N빵 State 엔진:</b> 인원 추가/감소, 비수기/성수기 할증 등 다변하는 조건에 따라 총액과 1인당 금액이 즉시 재계산되는 Zustand 기반 상태 관리 로직을 구현했습니다.</li><li><b>비교함(Compare) 기능:</b> 여러 숙소를 담아 다중 항목을 한눈에 대조할 수 있는 UI/UX를 설계하여, 단체 의사결정의 병목을 해소했습니다.</li><li><b>Next.js 15 App Router:</b> 최신 프레임워크를 도입하여 서버 컴포넌트 기반의 빠른 초기 로딩을 달성했습니다.</li></ul>",
        "qaDetails": "<h3>🐛 발견한 이슈 & 해결</h3><ul><li><b>가격 State 정합성 오류:</b> 인원수를 빠르게 올렸다 내렸을 때 비동기 State 업데이트가 꼬여 <b>가격이 음수로 표시</b>되는 버그 발견. → Zustand의 상태 업데이트 로직에 최솟값 바운더리를 설정하고, Playwright E2E로 '인원 +15 → -1 → 가격 ≥ 0' 시나리오를 자동 검증하는 TC를 구축했습니다.</li><li><b>비교함 중복 추가:</b> 같은 숙소를 비교함에 여러 번 담을 수 있는 논리 결함 발견. → ID 기반 중복 체크 로직을 추가했습니다.</li></ul><h3>📊 구축한 QA 인프라</h3><ul><li><b>E2E 자동화:</b> Playwright로 결제 로직 핵심 플로우를 자동 검증 (수동 10분 → 자동 10초)</li><li><b>CI/CD:</b> GitHub Actions 연동, 코드 Push마다 Headless 브라우저가 전수 검사</li></ul>",
        "githubUrl": "https://github.com/Hanjiwoook/Gather_us"
    },
    {
        "id": "project-ideal",
        "sectionId": "projects",
        "placeholderLabel": "Ideal WorldCup",
        "title": "이상형 월드컵 - UGC 소셜 투표 플랫폼",
        "period": "2026.03",
        "summary": "누구나 월드컵을 만들고 플레이할 수 있는 커뮤니티형 투표 플랫폼. 콘텐츠 신뢰성, 미디어 확장, 바이럴 유입까지 고려한 설계.",
        "tags": ["Next.js", "Prisma", "Playwright", "K6", "GitHub Actions"],
        "devDetails": "<h3>🤔 왜 만들었나?</h3><p>'이상형 월드컵'은 단순한 투표 게임이 아닌, <b>누구나 자기만의 월드컵을 생성하고, 댓글로 소통하며, 인기 랭킹을 확인하는 커뮤니티 플랫폼</b>을 목표로 했습니다. 이 과정에서 세 가지 핵심 설계 고민이 있었습니다.</p><h3>🔧 핵심 설계 & 구현</h3><ul><li><b>콘텐츠 신뢰성 확보 (OAuth 기반 생성 권한):</b> 월드컵 '생성'은 소셜 로그인(NextAuth) 인증된 사용자만 가능하도록 제한했습니다. 비로그인 사용자도 '플레이'는 자유롭게 할 수 있어 진입 장벽은 낮추면서, 스팸/저품질 콘텐츠 생성은 구조적으로 방지합니다.</li><li><b>미디어 확장 (YouTube Shorts 임베딩):</b> 이미지뿐 아니라 YouTube Shorts 영상도 후보로 등록할 수 있도록 미디어 타입을 분리 설계(<code>mediaType: IMAGE | YOUTUBE_SHORTS</code>)했습니다.</li><li><b>스트리머 모드:</b> 방송 환경에 최적화된 UI를 URL 파라미터(<code>?streamer=true</code>)로 전환합니다. 카드와 텍스트가 화면 가득 커지고 불필요한 UI가 숨겨져, 스트리머의 바이럴 유입 채널로 활용 가능합니다.</li></ul><h3>💡 커뮤니티 기능</h3><ul><li>인기순/최신순 정렬 · 검색 · 댓글 · 우승 랭킹(승률 계산) · 키보드 방향키(←→) 접근성 지원</li></ul>",
        "qaDetails": "<h3>🐛 발견한 이슈 & 해결</h3><ul><li><b>더블클릭 어뷰징 (TC-03):</b> 카드를 0.1초 내 3번 연타하면 State가 꼬여 <b>8강을 건너뛰는 치명적 버그</b> 발생. → <code>useRef</code> Guard(<code>isAnimatingRef</code>)로 애니메이션 중 중복 이벤트를 차단하고, Playwright TC-03으로 자동 회귀 검증.</li><li><b>결승전 API 비동기 에러 격리:</b> 우승자 POST 요청이 네트워크 오류로 실패해도 UI 전환에 영향 없도록, 데이터 저장 로직을 <code>catch</code>로 격리하여 UX를 보호했습니다.</li><li><b>Shift-Left 설계:</b> 코드 작성 전 <code>system_design.md</code>에서 TC-01~TC-03 시나리오를 먼저 설계한 뒤 개발에 착수. 테스트가 코드보다 먼저 존재하는 Shift-Left QA 프로세스를 적용했습니다.</li></ul><h3>📊 구축한 QA 인프라 (3중 검증)</h3><ul><li><b>E2E:</b> Playwright 3개 TC — 16강→결승 정상 플로우(TC-01), 결승 API 200 OK 검증(TC-02), 더블클릭 방어(TC-03)</li><li><b>VRT:</b> 시각적 회귀 테스트 — 홈/생성 페이지 픽셀 매칭 (허용치 150px)</li><li><b>부하:</b> K6 50VU 스트레스 — p95 < 200ms, 에러율 < 1% 기준</li><li><b>CI/CD:</b> GitHub Actions — Push마다 Prisma 마이그레이션 → 빌드 → E2E 전수검사 자동 실행, 리포트 30일 보관</li></ul>",
        "githubUrl": "https://github.com/Hanjiwoook/Ideal_type_WorldCup"
    },
    {
      "id": "project-postflow",
      "sectionId": "projects",
      "placeholderLabel": "Post Flow System",
      "title": "Post Flow - 생성형 AI + 네이버 블로그 자동 발행 시스템",
      "period": "2026.03",
      "summary": "'사진 몇 장 + 내 말투 + 느낀 점'만 던지면 AI가 팩트 기반 블로그 글을 써주고, 네이버에 자동 발행까지 하는 풀사이클 자동화 시스템.",
      "tags": ["Python FastAPI", "Flutter", "Gemini AI", "Playwright"],
      "devDetails": "<h3>🤔 왜 만들었나?</h3><p>블로그 글 하나를 쓰려면 <b>사진 정리, 본문 작성, 서식 편집, 이미지 배치, 태그 선정</b>까지 평균 30분~1시간이 걸립니다. AI 시대에 이 반복 노동을 자동화할 수 없을까? <b>'사진 몇 장 + 내 말투 + 느낀 점'만 간단히 입력하면, AI가 팩트에 기반한 자연스러운 블로그 글을 대필해주고 자동으로 발행까지 해주는 시스템</b>을 만들고 싶었습니다.</p><p>그런데 막상 구현하려 하니 <b>네이버 블로그 API가 스마트에디터의 서식·이미지 배치를 전혀 지원하지 않는다</b>는 기술적 벽에 부딪혔습니다. 이 벽을 Playwright로 실제 브라우저를 조작하는 방식으로 돌파했습니다.</p><h3>🔧 핵심 구현</h3><ul><li><b>AI 대필 파이프라인:</b> 사용자가 사진과 간단한 느낌(말투, 감상)만 입력하면, Gemini 2.5 모델이 사진의 문맥을 분석하여 제목/본문/태그가 담긴 구조화 JSON을 자동 생성합니다. 사용자는 이를 확인하고 승인만 누르면 됩니다.</li><li><b>네이버 스마트에디터 자동화 엔진:</b> API로 해결할 수 없는 네이버 에디터의 동적 DOM을 Playwright로 직접 제어. 이미지 업로드, 본문 삽입, 서식 적용, 최종 발행까지의 전 과정을 무인 자동화했습니다.</li><li><b>시스템 아키텍처 설계서:</b> 1인 프로젝트의 문서화 한계를 극복하기 위해 풀 아키텍처 설계서를 작성했습니다.</li></ul>",
      "qaDetails": "<h3>🐛 발견한 이슈 & 해결</h3><ul><li><b>AI Hallucination → 클라이언트 크래시:</b> Gemini 모델이 가끔 요청한 JSON 스키마를 위반하는 응답을 생성 (예: 태그 필드 누락, 본문이 배열 대신 문자열). → Flutter 클라이언트에서 파싱 실패로 앱이 크래시. → FastAPI 서버단에서 응답 스키마 검증 레이어를 추가하고, 위반 시 재요청하는 Retry 로직을 구현했습니다.</li><li><b>네이버 DOM 변동:</b> 네이버가 스마트에디터 DOM 구조를 업데이트하면 자동화 스크립트가 깨지는 문제. → 핵심 셀렉터를 상수화하고, DOM 변동 감지 시 Graceful Fallback 처리를 적용했습니다.</li></ul><h3>📊 구축한 QA 인프라</h3><ul><li><b>API 엔드포인트 검증:</b> Swagger 기반 FastAPI 헬스체크 및 이미지 업로드 모듈 단일 검증</li><li><b>AI 응답 무결성:</b> 다양한 사진 조합(테스트 더미)을 삽입하여 AI 응답의 JSON 스키마 준수 여부를 사전 검증</li></ul>",
      "githubUrl": "https://github.com/Hanjiwoook/Post-Flow"
    },
    {
      "id": "project-banergy",
      "sectionId": "projects",
      "placeholderLabel": "Banergy App",
      "title": "밴러지 (Banergy) - 식품 알레르기 관리 앱",
      "period": "2024.03 ~ 2024.12",
      "summary": "식품 알레르기 환자가 매번 성분표를 육안으로 확인하는 불편함을 OCR 자동 스캔으로 해결한 앱. 학회 및 공모전 5관왕.",
      "tags": ["Flutter", "Python Flask", "PaddleOCR"],
      "devDetails": "<h3>🤔 왜 만들었나?</h3><p>식품 알레르기 환자는 <b>마트에서 물건을 살 때마다 포장지 뒷면의 성분표를 일일이 읽어야 합니다.</b> 글씨가 작고, 성분명이 복잡하며, 시간도 오래 걸립니다. 이 반복되는 불편함을 <b>카메라로 성분표를 찍으면 위험 성분을 즉시 하이라이팅</b>해주는 앱으로 해결하고자 했습니다.</p><h3>🔧 핵심 구현</h3><ul><li><b>PaddleOCR API 서버 분리:</b> 모바일 기기 성능에 종속되지 않도록, 한국어 인식률이 뛰어난 PaddleOCR을 Flask 서버 단위로 분리하여 텍스트 추출 아키텍처를 설계했습니다.</li><li><b>위험 성분 하이라이팅:</b> 추출된 텍스트 중 사용자의 알레르기 성분이 감지되면 서버 단에서 『알레르기 성분』 형태로 마킹 처리하여 클라이언트로 반환합니다.</li></ul><h3>🏆 수상 내역 (5관왕)</h3><ul><li>IIBC 학회 우수논문상</li><li>한이음 ICT 멘토링 입선</li><li>창의문제해결 최우수상</li><li>VGA 캡스톤 디자인 우수상</li><li>UX Design 소논문 우수상</li></ul>",
      "imageUrl": ["assets/banergy_gif1.gif", "assets/banergy_gif2.gif"],
      "githubUrl": "https://github.com/Hanjiwoook/flutter_banergy"
    }
  ];
