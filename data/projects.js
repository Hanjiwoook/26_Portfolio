window.projectsData = [
  {
    "id": "project-banergy",
    "sectionId": "projects",
    "placeholderLabel": "식품 알레르기 관리 앱 앱",
    "title": "밴러지 (Banergy)",
    "summary": "OCR 및 바코드 인식 기술을 적용한 맞춤형 식품 알레르기 관리 및 AI 추천 모바일 애플리케이션입니다.",
    "tags": ["Flutter", "Dart", "Provider", "Dio", "Retrofit"],
    "details": "<p><b>2024 한이음 ICT멘토링 공모전 입상 및 IIBC 학회 우수논문상 수상작</b>입니다. 5명의 팀 중 <strong>FE 리더</strong>를 맡아 모바일 앱의 전반적인 화면 구현과 클라이언트 아키텍처 설계를 주도했습니다.</p><h3>💡 주요 개발 성과</h3><ul><li><strong>핵심 기능 구현:</strong> Flutter의 <code>camera</code> 패키지 등을 활용하여 식품 바코드 및 OCR 인식 로직을 프론트엔드단에서 구축하고, Python(Flask) 백엔드 서버와 비동기로 연동하여 알레르기 판별 결과를 즉각 제공했습니다.</li><li><strong>상태 관리 및 로컬 DB 처리:</strong> <code>Provider</code>를 통한 전역 상태 관리 및 <code>SQFlite</code> 기반의 로컬 데이터베이스를 설계하여, 유저의 알레르기 설정이 오프라인 환경에서도 안정적으로 동작하도록 처리했습니다.</li><li><strong>비동기 통신 최적화:</strong> <code>Dio</code> 패키지를 활용해 REST API 클라이언트를 구축하고, 모듈화된 UI 컴포넌트 구조를 설계하여 코드의 재사용성과 유지보수성을 크게 높였습니다.</li></ul>",
    "githubUrl": "https://github.com/Hanjiwoook/flutter_banergy"
  },
  {
    "id": "project-2",
    "sectionId": "projects",
    "placeholderLabel": "Post Flow 로고",
    "title": "Post Flow - 네이버 블로그 E2E 자동화",
    "summary": "Gemini 2.5 멀티모달과 Playwright를 결합하여 사실 기반의 블로그 포스팅을 완전 자동화하는 풀스택 솔루션입니다.",
    "tags": ["FastAPI", "Flutter", "Gemini AI", "Playwright", "Exception Handling"],
    "details": "<p><b>LLM 환각(Hallucination) 억제와 E2E 브라우저 자동화에 초점을 맞춘 인플루언서급 포스팅 솔루션입니다.</b> Python(FastAPI) 백엔드와 Flutter 프론트엔드로 구성되어 있습니다.</p><h3>💡 핵심 아키텍처 및 개발 성과</h3><ul><li><strong>멀티 에이전트(V7) 파이프라인:</strong> 시각/데이터 기반 팩트 추출 에이전트와 자가 검수(Self-Review) 모듈을 장착한 글쓰기 에이전트를 분리 설계하여 가짜 정보 생성을 원천 차단했습니다.</li><li><strong>E2E 포스팅 봇(Bot) 구축:</strong> <code>Playwright-Stealth</code>를 활용하여 네이버 스마트에디터에 접근, AI가 작성한 본문과 업로드된 수십 장의 사진을 텍스트 사이사이에 자동으로 교차 배치(Interleaving)하고 최종 발행까지 100% 자동화했습니다.</li><li><strong>브라우저 제어 예외 처리 및 자동 복구 로직:</strong> 네이버 스마트에디터의 동적 DOM 로딩 지연이나 네트워크 이슈로 인한 Playwright 크래시를 방지하기 위해, 최대 3회의 자동 재시도(Retry) 및 Fallback 메커니즘을 백엔드에 구축하여 포스팅 봇의 라이브 환경 성공률과 안정성을 극대화했습니다.</li><li><strong>데이터 정합성 및 성능 최적화:</strong> Pydantic <code>response_schema</code>를 적용하여 AI의 JSON 파싱 역직렬화 에러율을 0%로 낮추었으며, 비동기 처리를 통해 대용량 멀티모달 분석 속도를 획기적으로 단축했습니다.</li></ul>",
    "githubUrl": "https://github.com/Hanjiwoook/post-flow"
  },
  {
    "id": "project-3",
    "sectionId": "projects",
    "placeholderLabel": "V1 포트폴리오",
    "title": "Node.js & MariaDB 동적 포트폴리오 (V1)",
    "summary": "Express.js 서버와 MariaDB를 연동하여 프로젝트 데이터를 능동적으로 서빙하는 풀스택 웹 애플리케이션입니다.",
    "tags": ["Node.js", "Express", "MariaDB", "RESTful"],
    "details": "<p>일반적인 정적 HTML 페이지가 아닌, 백엔드 서버와 관계형 데이터베이스를 직접 구축하여 프로젝트 목록을 동적으로 렌더링하고 관리(Post)할 수 있도록 설계된 V1 포트폴리오입니다.</p><h3>💡 주요 개발 성과</h3><ul><li><strong>RESTful API 인프라 구축:</strong> Node.js와 Express 프레임워크를 활용해 프로젝트 데이터 조회(GET) 및 신규 등록(POST)을 처리하는 라우팅 API를 설계했습니다.</li><li><strong>RDBMS 연동 및 풀링(Pooling) 최적화:</strong> <code>mariadb</code> 드라이버로 커넥션 풀(Connection Pool)을 구성하여 트래픽 발생 시 데이터베이스 연결 통신 부하를 최소화했습니다.</li><li><strong>안전한 예외 처리 로직:</strong> 요청 파라미터 누락 시 400 Bad Request 방어 및 DB 통신 간 발생할 수 있는 500 Internal Error에 대응하는 꼼꼼한 에러 핸들링을 적용했습니다.</li></ul>",
    "githubUrl": "https://github.com/Hanjiwoook/portfolio-project"
  },
  {
    "id": "qa-1",
    "sectionId": "qa",
    "placeholderLabel": "이상형 월드컵 E2E 테스트",
    "title": "이상형 월드컵 E2E 자동화",
    "summary": "이상형 월드컵 서비스의 비즈니스 흐름을 Playwright로 자동화한 테스트 결과입니다.",
    "tags": ["Playwright", "CI/CD"],
    "details": "<p>개발 예정인 이상형 월드컵 기반 서비스에 대해 사용자의 핵심 비즈니스 흐름(로그인 -> 랭킹 투표 진행 -> 결과 확인)을 Playwright로 자동화할 예정입니다.</p><h3>테스트 로드맵</h3><ul><li>GitHub Actions 연동으로 PR 시 자동 E2E 테스트 수행</li><li>Regression Bug 방지 및 테스트 결과 리포트 자동 생성</li></ul>",
    "githubUrl": ""
  },
  {
    "id": "qa-2",
    "sectionId": "qa",
    "placeholderLabel": "E2E UI 테스트 자동화",
    "title": "Playwright CI/CD 테스트 파이프라인",
    "summary": "Playwright와 GitHub Actions를 연동하여 지속적 통합 환경에서 회귀 버그를 방지하는 UI 테스트 파이프라인입니다.",
    "tags": ["Playwright", "TypeScript", "GitHub Actions", "CI/CD"],
    "details": "<p>프론트엔드 환경의 주요 렌더링 및 비즈니스 로직(예: OAuth 로그인)이 정상 동작하는지 검증하기 위한 <strong>독립적인 E2E 테스트 환경</strong>입니다.</p><h3>💡 SDET / QA 기술 포인트</h3><ul><li><strong>UI 컴포넌트 자동화 검증:</strong> TypeScript 기반의 Playwright 스크립트를 작성하여 특정 DOM 엘리먼트의 가시성(Visibility) 및 상태를 엄격하게 검증하는 테스트 코드를 구축했습니다.</li><li><strong>GitHub Actions 기반 지속적 통합(CI):</strong> <code>push</code> 및 <code>pull_request</code> 이벤트 트리거를 통해 클라우드 서버에서 헤드리스 모드로 전체 테스트 스위트를 자동 실행하도록 <code>workflow.yml</code>을 설계 및 배포했습니다.</li><li><strong>테스트 결과 아카이빙:</strong> CI 파이프라인 내에서 테스트가 종료되면 Playwright HTML 리포트를 <code>upload-artifact</code>를 통해 자동 수집, 디버깅 공수를 최소화하는 시스템을 마련했습니다.</li></ul>",
    "githubUrl": ""
  },
  {
    "id": "qa-3",
    "sectionId": "qa",
    "placeholderLabel": "Test Automation 3",
    "title": "성능 부하 테스트 도입",
    "summary": "JMeter를 활용한 서비스 병목 탐색 및 성능 테스트 환경 구축.",
    "tags": ["JMeter", "Performance"],
    "details": "<p>대규모 트래픽 급증 상황을 가정하여 주요 API에 부하를 가하고, 서버 병목 지점을 파악하여 데이터베이스 튜닝의 기초 자료를 마련합니다.</p>",
    "githubUrl": ""
  },
  {
    "id": "qa-postflow",
    "sectionId": "qa",
    "placeholderLabel": "E2E 데이터 파이프라인 검증",
    "title": "AI - 브라우저 E2E 데이터 파이프라인 자동화 검증",
    "summary": "AI 비동기 분석과 Playwright 동기 발행 봇을 하나로 엮은 End-to-End 전체 파이프라인 통합 테스트 환경",
    "tags": ["QA", "E2E Testing", "Automation", "Python", "Playwright"],
    "details": "<p>프론트엔드 입력부터 네이버 블로그 최종 포스팅까지의 전 과정을 <b>하나의 파이프라인 스크립트로 통합 검증</b>하여 전체 시스템 아키텍처의 무결성을 확보했습니다.</p><h3>💡 SDET / QA 기술 포인트</h3><ul><li><strong>멀티 시스템 통합 파이프라인 테스트:</strong> 비동기 단위 모듈(Gemini AI 멀티모달 분석)과 동기 모듈(Playwright 브라우저) 간의 이벤트 루프(Event Loop) 충돌을 스레드/실행 컨텍스트 레벨에서 설계적으로 해결했습니다.</li><li><strong>End-to-End 자동화 코드 모듈화:</strong> Mock 이미지가 투입되는 순간부터 AI가 응답한 포스트잇 JSON 구조를 평가하고, 이를 실제 포스팅 브라우저 봇에 주입하는 과정을 스크립트화하여 인간의 개입 없이 전체 데이터 플로우의 정합성을 한 번에 연속 검증하는 체계를 마련했습니다.</li></ul>",
    "githubUrl": "https://github.com/Hanjiwoook/post-flow"
  }
];
