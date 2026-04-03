window.projectsData = [
    // ---------------------------------------------------------
    // 1. PROJECTS (개발 경험)
    // ---------------------------------------------------------
    {
      "id": "project-morphing",
      "sectionId": "projects",
      "placeholderLabel": "Morphing I (Intern)",
      "title": "(주)모핑아이 - 사내 관제 시스템 개발 (인턴십)",
      "summary": "분산되어 실행되던 비효율적인 다중 프로그램 구조를 '단일 통합 윈도우 UI'로 합치면서, 오히려 시스템 부하량은 획기적으로 낮춘 관제 시스템 고도화 프로젝트.",
      "tags": ["Python", "PyQt5", "UI Integration", "Gemini API"],
      "details": "<h3>💡 핵심 기술 성과 (1인 개발 100%)</h3><ul><li><b>관제 시스템 UI 통합 및 최적화:</b> 기존에는 3D 파이프 렌더링 창과 센서 모니터링 창이 별개로 실행되어 사용자 경험이 떨어졌으나, 이를 <b>하나의 단일 GUI 프로그램으로 완벽하게 병합(Consolidation)</b>. 단일 프로그램 통합으로 우려되던 극심한 시스템 부하를 자체적인 처리 로직 최적화로 방어하여 <b>오히려 개별 실행 때보다 가볍게 동작하도록 고도화.</b></li><li><b>OpenCV 메모리 누수 및 동시성 해결:</b> 프로그램 통합 이후 실시간 카메라 데이터와 UI 렌더링 간 병목으로 나타난 <b>메모리 쓰레기 축적(Memory Leak)과 DB Lock 문제를 비동기 Queue 채널로 제어</b>하여 24시간 무중단 가동 환경 달성.</li><li><b>AI 리포트 자동화:</b> 센서 수치 변동을 파싱 및 분석한 뒤 Google Gemini API로 전송, 이상 징후 탐지 결과가 담긴 <b>PDF 리포트를 100% 자동으로 생성</b>하는 로직 구현.</li></ul><p style='margin-top:2rem; font-size:0.9rem; color:var(--text-secondary); text-align:center;'>※ 회사 내부 보안 규정(NDA)에 따라 통계 및 시스템 스크린샷은 첨부하지 않았습니다.</p>",
      "imageUrl": "",
      "githubUrl": ""
    },
    {
        "id": "project-gather-us",
        "sectionId": "projects",
        "placeholderLabel": "Gather Us Web",
        "title": "Gather Us - 단체 여행 N빵/숙소 큐레이션 플랫폼",
        "summary": "8~15인 규모의 단체 여행객을 타겟으로 한 복잡한 할증 로직 계산 및 맞춤형 숙소 추천 서비스.",
        "tags": ["Next.js 15", "TypeScript", "Zustand", "Tailwind CSS"],
        "details": "<h3>💡 핵심 기술 성과</h3><ul><li><b>복잡한 비즈니스 로직 제어:</b> 인원수 추가/감소, 비수기/성수기 할증 등 다변하는 조건에 맞춘 실시간 State(상태) 로직 구현.</li><li><b>비교함(Compare) 기능:</b> 여러 숙소를 담아 다중 항목을 대조하는 UI/UX 최적화 구조 설계.</li><li><b>성능:</b> Next.js 15 App Router와 최신 프레임워크를 도입하여 빠른 반응성 달성.</li></ul>",
        "githubUrl": "https://github.com/Hanjiwoook/Gather_us"
    },
    {
        "id": "project-ideal",
        "sectionId": "projects",
        "placeholderLabel": "Ideal WorldCup",
        "title": "이상형 월드컵 - 대규모 UGC 소셜 플랫폼",
        "summary": "소셜 로그인과 대규모 사용자 참여를 견인하기 위한 바이럴(Viral) 타겟팅 기반 참여형 투표 플랫폼.",
        "tags": ["Next.js", "NextAuth", "SEO"],
        "details": "<h3>💡 핵심 기술 성과</h3><ul><li><b>UGC 트래픽 처리:</b> 수많은 유저가 동시다발적으로 참여하는 '월드컵 랭킹 투표' 시스템을 위한 1:N 데이터베이스 관계 설계.</li><li><b>소셜 연동:</b> NextAuth를 통해 복잡한 가입 과정 없이 소셜 로그인으로 사용자 획득 단가(CAC) 최소화 흐름 구현.</li><li><b>SEO 최적화:</b> 동적 라우팅 및 메타태그 관리를 통해 오가닉 트래픽 유입 구조 세팅.</li></ul>",
        "githubUrl": "https://github.com/Hanjiwoook/Ideal_type_WorldCup"
    },
    {
      "id": "project-postflow",
      "sectionId": "projects",
      "placeholderLabel": "Post Flow System",
      "title": "Post Flow - 생성형 AI + 네이버 블로그 자동 발행 시스템",
      "summary": "Gemini 2.5 AI 모델이 사진 문맥을 분석하여 글을 작성하고, Playwright 기반의 자체 엔진이 네이버 스마트에디터에 접속해 이미지를 첨부하고 최종 발행까지 완수하는 풀사이클(Full-cycle) 파이프라인 프로젝트.",
      "tags": ["Python FastAPI", "Flutter", "Gemini AI", "Playwright"],
      "details": "<h3>💡 핵심 기술 성과</h3><ul><li><b>네이버 블로그 자동 발행 엔진 구축:</b> API로 해결할 수 없는 네이버 스마트에디터 환경을 극복하기 위해, Playwright를 이용해 동적 돔(DOM)을 제어하고 이미지를 배치(NaverBlogAutomationV2)하는 강력한 UI 자동화 인프라를 완성.</li><li><b>AI Context 파싱 & 아키텍처:</b> 다수의 이미지를 동시에 분석하여 제목(Title), 본문(Content), 태그(Tags)가 구조화된 JSON 데이터(debug_final_post.json)로 생성/검증하도록 백엔드 로직 설계.</li><li><b>UI/UX & 시스템 설계서:</b> 사용자가 AI 생성본을 직관적으로 확인/수정할 수 있는 모바일 에디터 화면(post_editor_screen) 최적화 및 '시스템 아키텍처 설계서'를 작성하여 1인 프로젝트의 문서화 한계 극복.</li></ul>",
      "githubUrl": "https://github.com/Hanjiwoook/Post-Flow"
    },
    {
      "id": "project-banergy",
      "sectionId": "projects",
      "placeholderLabel": "Banergy App",
      "title": "밴러지 (Banergy) - 식품 알레르기 관리 앱",
      "summary": "서버(Python Flask) 기반의 고성능 PaddleOCR 엔진을 적용하여, 촬영된 식품 성분표에서 알레르기 유발 성분을 즉각 진단하고 하이라이팅 처리(『성분명』)하는 모바일 앱. 학회 및 공모전 5관왕 프로젝트.",
      "tags": ["Flutter", "Python Flask", "PaddleOCR"],
      "details": "<h3>💡 핵심 기술 성과</h3><ul><li><b>PaddleOCR API 서버 구축:</b> 한국어 인식률이 뛰어난 PaddleOCR을 Flask 서버 단위로 분리하여 모바일 기기 성능에 종속되지 않는 텍스트 추출 아키텍처를 설계.</li><li><b>텍스트 파싱 및 하이라이팅 로직:</b> 추출된 텍스트 중 사용자의 알레르기 성분이 감지되면 서버 단에서 『알레르기 성분』 형태로 하이라이팅 처리 로직을 구현하여 클라이언트로 반환.</li><li><b>수상 내역:</b> IIBC 학회 우수논문상, 한이음 ICT 멘토링 입상, 창의문제해결 최우수상 등 5관왕.</li></ul>",
      "imageUrl": ["assets/banergy_gif1.gif", "assets/banergy_gif2.gif"],
      "githubUrl": "https://github.com/Hanjiwoook/flutter_banergy"
    },
  
    // ---------------------------------------------------------
    // 2. QA & AUTOMATION (품질 보증 및 자동화 검증)
    // ---------------------------------------------------------
    {
        "id": "qa-yes24",
        "sectionId": "qa",
        "placeholderLabel": "YES24 Test Cases",
        "title": "YES24 E-Commerce 매뉴얼 테스트 설계 (강점)",
        "summary": "가장 기본기가 되는 철저한 매뉴얼 품질 보증 과정. 기능 명세부터 시나리오/TC 설계, 결함 리포팅까지의 정석적인 절차 증명.",
        "tags": ["Manual QA", "ISTQB", "Test Cases", "결함 리포트"],
        "details": "<h3>💡 QA 전략 및 성과</h3><ul><li><b>전체 커버리지 분석:</b> YES24(예스24) 쇼핑몰의 복잡한 주문/장바구니/옵션 플로우에 대한 도메인 분석 및 기능 리스트(Feature List) 도출.</li><li><b>꼼꼼한 엣지 케이스 설계:</b> 결제 수단 간의 충돌, 재고 소진 예외 처리 등 ISTQB 기반의 기법을 활용한 탐색적/기반 테스트 케이스 작성.</li><li><b>결함 수명 주기 관리:</b> 파악하기 힘든 논리적 버그(Logical Bug)를 리포팅 규칙에 맞춰 명확하게 개발팀에 전달하기 위한 프로세스 체화.</li></ul><p style='margin-top:2rem; font-size:0.9rem; color:var(--text-secondary); text-align:center;'>※ 해당 엑셀 산출물은 면접 시 직접 시연/오픈 가능합니다.</p>",
        "githubUrl": ""
    },
    {
      "id": "qa-gather-us-e2e",
      "sectionId": "qa",
      "placeholderLabel": "Playwright CI/CD",
      "title": "Gather Us - Playwright 기반 결제 로직 회귀테스트",
      "summary": "가장 핵심 기능인 '동적 N빵 계산 및 결제 파이프라인'의 오류를 원천 차단하기 위한 UI 기반 E2E 자동화 구축.",
      "tags": ["Playwright", "GitHub Actions", "CI/CD 자동화"],
      "details": "<h3>💡 QA 전략 및 성과</h3><ul><li><b>동적 State 검증 자동화:</b> 단순 화면 렌더링이 아닌, '사용자가 인원수를 올릴 때 총 가격이 실시간으로 정확히 변경되는가?'를 검증하는 비즈니스 로직 방어선 구축.</li><li><b>CI/CD 파이프라인 통합:</b> GitHub Actions를 연동하여 새로운 코드가 푸시될 때마다 Headless 브라우저가 전수 검사를 단행하도록 세팅.</li><li><b>결과 도출:</b> 수동으로 테스트하면 10분 이상 걸리던 결제 플로우 테스트를 10초 이내에 자동 검증.</li></ul>",
      "githubUrl": "https://github.com/Hanjiwoook/Gather_us"
    },
    {
      "id": "qa-post-flow",
      "sectionId": "qa",
      "placeholderLabel": "API & AI Models",
      "title": "Post Flow - 백엔드 API 및 AI 모델 신뢰성 검증",
      "summary": "기능 검증을 넘어 '생성형 AI 모델(Gemini)' 간 연동이 예상대로 흘러가는지 서버(FastAPI) 단의 Health & Integration 테스트 환경 점검.",
      "tags": ["API Testing", "FastAPI", "AI QA"],
      "details": "<h3>💡 QA 전략 및 성과</h3><ul><li><b>End-point 분석:</b> Swagger(Docs)를 기반으로 클라이언트(Flutter)와 서버 통신 전, 서버 헬스체크 및 이미지 업로드 분석 모듈 단일 검증.</li><li><b>AI 응답 무결성 확인:</b> 토큰/AI Hallucination 예방을 위한 다양한 사진 조합(테스트 더미) 삽입 후 예측(Expectation) 값 도출 검증.</li></ul>",
      "githubUrl": "https://github.com/Hanjiwoook/Post-Flow"
    }
  ];
  
