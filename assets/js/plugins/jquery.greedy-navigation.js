/*
* Greedy Navigation (legacy for `.greedy-nav` only)
*
* 원래 테마의 우측 "더보기" 내비게이션을 위한 스크립트였는데,
* 지금은 커스텀 `wonjun-nav`를 쓰고 있으므로 그 구조(#site-nav .visible-links 등)가 없어요.
* 그래서 이 파일은 `.greedy-nav` 구조가 있을 때만 동작하도록 완전히 감싸 두고,
* 현재 머리글 내비(햄버거 메뉴)에는 일절 영향이 가지 않게 합니다.
*/

if ($('#site-nav').hasClass('greedy-nav')) {
  var $nav = $('#site-nav');
  var $btn = $('#site-nav button');
  var $vlinks = $('#site-nav .visible-links');
  var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
  var $hlinks = $('#site-nav .hidden-links');

  var breaks = [];
  var wasMobile = false;

  function updateNav() {

    var isMobile = window.matchMedia("(max-width: 925px)").matches;

    // --- 모바일 전용 동작: 햄버거 안에 모든 비-persist 항목을 넣고, 상단에는 제목/토글만 남긴다 ---
    if (isMobile) {
      // 햄버거 버튼은 항상 보이게
      $btn.removeClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden'); // 기본은 접힌 상태

      // non-persist 항목(일반 메뉴/섹션 탭)은 모두 hidden-links 로 이동
      $vlinks.children('li:not(.persist)').appendTo($hlinks);

      // 카운트는 hidden-links에 들어간 항목 개수 기준
      $btn.attr("count", $hlinks.children().length);

      wasMobile = true;

      // masthead 높이 및 body/sidebar 패딩은 항상 유지
      var mastheadHeightMobile = $('.masthead').height();
      $('body').css('padding-top', mastheadHeightMobile + 'px');
      if ($(".author__urls-wrapper button").is(":visible")) {
        $(".sidebar").css("padding-top", "");
      } else {
        $(".sidebar").css("padding-top", mastheadHeightMobile + "px");
      }

      return;
    }

    // --- 데스크톱 동작: Greedy Navigation 기본 알고리즘 ---

    // 모바일에서 데스크톱으로 넘어올 때는 상태를 초기화하고 다시 계산
    if (wasMobile) {
      // 모든 항목을 다시 visible-links 로 돌려놓고, break 포인트 초기화
      $hlinks.children().appendTo($vlinks);
      breaks = [];
    }
    wasMobile = false;

    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

    // The visible list is overflowing the nav
    if ($vlinks.width() > availableSpace) {

      while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
        // Record the width of the list
        breaks.push($vlinks.width());

        // Move item to the hidden list
        $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

        availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

        // Show the dropdown btn
        $btn.removeClass("hidden");
      }

      // The visible list is not overflowing
    } else {

      // There is space for another item in the nav
      while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
        // Move the item to the visible list
        if ($vlinks_persist_tail.children().length > 0) {
          $hlinks.children().first().insertBefore($vlinks_persist_tail);
        } else {
          $hlinks.children().first().appendTo($vlinks);
        }
        breaks.pop();
      }

      // Hide the dropdown btn if hidden list is empty
      if (breaks.length < 1) {
        $btn.addClass('hidden');
        $btn.removeClass('close');
        $hlinks.addClass('hidden');
      }
    }

    // Keep counter updated
    $btn.attr("count", breaks.length);

    // update masthead height and the body/sidebar top padding
    var mastheadHeight = $('.masthead').height();
    $('body').css('padding-top', mastheadHeight + 'px');
    if ($(".author__urls-wrapper button").is(":visible")) {
      $(".sidebar").css("padding-top", "");
    } else {
      $(".sidebar").css("padding-top", mastheadHeight + "px");
    }

  }

  // Window listeners

  $(window).on('resize', function () {
    updateNav();
  });
  screen.orientation.addEventListener("change", function () {
    updateNav();
  });

  $btn.on('click', function () {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
  });

  updateNav();
}