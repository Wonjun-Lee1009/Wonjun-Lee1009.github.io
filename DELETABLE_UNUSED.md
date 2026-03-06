# 삭제해도 되는 미사용 파일 목록

아래 항목은 현재 사이트에서 참조되지 않거나 사용되지 않는 파일/기능입니다.  
삭제 전에 한 번씩 확인한 뒤 진행하세요.

---

## 1. Includes (어디서도 include 되지 않음)

```
_includes/paginator.html
_includes/feature_row
_includes/gallery
```

---

## 2. Layouts (사용하는 페이지 없음)

```
_layouts/splash.html
_layouts/cv-layout.html
_layouts/archive-taxonomy.html
```

---

## 3. Pages (네비/푸터에 링크 없음, 템플릿·가이드용)

| 파일 | 비고 |
|------|------|
| `_pages/talkmap.html` | 토크 맵 페이지 (talks 미사용 시) |
| `_pages/teaching.html` | 강의 목록 (teaching 미사용 시) |
| `_pages/year-archive.html` | 연도별 아카이브 |
| `_pages/portfolio.html` | 포트폴리오 (portfolio 미사용 시) |
| `_pages/collection-archive.html` | 컬렉션 아카이브 |
| `_pages/markdown.md` | 마크다운 가이드 (개발용) |
| `_pages/cv-json.md` | JSON CV 페이지 (CV는 Markdown 사용 중) |
| `_pages/tag-archive.html` | 태그 아카이브 |
| `_pages/page-archive.html` | 페이지 아카이브 |
| `_pages/archive-layout-with-content.md` | 레이아웃 예제 |
| `_pages/category-archive.html` | 카테고리 아카이브 |
| `_pages/non-menu-page.md` | 메뉴 없는 페이지 예제 |
| `_pages/terms.md` | 이용약관 (내용 채우지 않았다면) |

---

## 4. 컬렉션 샘플 데이터 (블로그/강의/토크/포트폴리오 미사용 시)

```
_posts/2012-08-14-blog-post-1.md
_posts/2013-08-14-blog-post-2.md
_posts/2014-08-14-blog-post-3.md
_posts/2015-08-14-blog-post-4.md
_posts/2199-01-01-future-post.md
_teaching/2014-spring-teaching-1.md
_teaching/2015-spring-teaching-2.md
_talks/2012-03-01-talk-1.md
_talks/2013-03-01-tutorial-1.md
_talks/2014-02-01-talk-2.md
_talks/2014-03-01-talk-3.md
_portfolio/portfolio-1.md
_portfolio/portfolio-2.html
```

---

## 5. 퍼블리케이션 템플릿 (dummy: true, 리스트에 안 나옴)

```
_publications/2009-10-01-paper-title-number-1.md
```

---

## 6. 이미지 (참조 없음 또는 중복)

| 파일 | 비고 |
|------|------|
| `images/profile_sample.png` | avatar는 profile.jpeg 사용 |
| `images/editing-talk.png` | 어디서도 참조 안 함 |
| `images/profile.heic` | 웹에서 사용 안 함 (profile.jpeg 사용) |

---

## 7. 기타

| 항목 | 비고 |
|------|------|
| `_drafts/post-draft.md` | 드래프트 (빌드 제외). 블로그 안 쓰면 삭제 가능 |

---

## 삭제 시 주의사항

- **삭제 후**: `_config.yml`의 `collections`에서 해당 컬렉션(teaching, talks, portfolio, posts)을 안 쓸 거면 `collections:` 블록에서 해당 항목 제거 검토.
- **백업**: 한꺼번에 지우기 전에 브랜치 하나 만들어 두거나 필요한 것만 골라서 삭제하는 것을 권장.
- **이 목록 파일**: 정리 끝나면 `DELETABLE_UNUSED.md` 자체도 삭제해도 됨.
