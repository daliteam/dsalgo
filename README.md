## Daliteam Data structure &amp; Algorithm Study

### 푼 문제 https://github.com/daliteam/dsalgo/wiki


## 일정

- 월수금 오전 10시 디스코드에서

## 방식

- 순서대로 돌아가면서 출제자를 정하고 출제가가 문제를 선정한다
- 문제를 풀고 PR을 올린다
- 모여서 공유하고 싶은 풀이, 어려웠던 부분을 논의한다
- PR 리뷰를 1명 이상 한다

## 리뷰 순서
리뷰어는 그날 PR을 올린 순서에서 앞사람으로 지정

## Github 과제 제출 방식

과제 디렉토리 구조 예시:

```bash
.
└── kakao-dart                // 문제 디렉토리 이름
    └── datalater             // 각자 제출하는 본인 파일 또는 폴더(파일이 여러 개 있을 경우)
        ├── README.md
        ├── TIL.md
        ├── index.js
        └── tdd-guide.md
```

원격 저장소에 과제 제출 방법:

```bash
# 원격 저장소의 최신 데이터를 로컬에 반영한다
git switch main
git fetch origin
git pull --rebase origin main

# 자신의 닉네임으로 브랜치를 생성한다
git switch -c <문제이름/자신의닉네임>

# 파일을 작업한다
git add
git commit

# 작업이 완료되면 push 한다
git push origin <문제이름/자신의닉네임>

# PR을 생성한다
```
