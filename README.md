
# 대가리
## 분실물관리서비스

#### 파이어베이스 + 리엑트의 실시간 처리 어플리케이션 구현 

```
사용한것들 : 
react 
emotion/styled -> tailwind
korean-regexp(한글 검색 기능때 사용한 npm)
firebase 
```
---
firebase 사용이유 
1. 빠르게 개발가능, 인증, DB,
2. 백엔드에 완벽한 지식이 없는 유저들의 데이터 안전보장
단점
1. 확장성이 적다(DB가 구글에 종속됨)

빠른개발로 아이디어의 테스트를 위해 Firebase를 사용

---


```
 여기서부터 메모용 
04:15 현재 submit.js 로 firebase에 등록되는거 확인
시작날짜 0520
1.리스트탭 2.관리자로그인 3.삭제 및 수정 4.테이블 관리자만 접속가능
그 다음 해야할꺼 1.css 2.router(refactoring)
금저녁-토아침 css 완성 <-무조건해야함
토저녁-일오후 css 완성한다음 보여주는탭 연결까지
일밤-월6시 관리자로그인 , 삭제 및 수정 ,테이블 패스
화12시 - 6시 router 및 배포 해보기

대가리 BETA
실시간 분실관리서비스 조회 웹앱
일단 crud 원리 깨우친다음
페이지별로 간단 ui 적용
일단 관리자 등록기능 구현 + firebase db rule
분실물 현황 리스트 탭 구현
배포


추가적으로 할꺼
번들링<-폴더에사진넣어놓음 북마크에 번들링 넣어놈
client = react (나중에 typescript, nextjs )
css = emotion 라이브러리(나중에 MUI적용)
server, db = firebase  (나중에 react Qurey적용)


```