/* DevTools 上で スタイルIDから主要プロパティ値を取得する */
/* Console で実行後、クリップボードに結果がコピーされる   */
const results = [];

(function () {
  const selectors = [	// ここにIDを[,]区切りで列挙する
    '.auto_tracking_content',
    '.tracking_assist_operation',
    '.tracking_control_box'
  ];

  selectors.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el) {
      results.push({ selector, error: 'NOT FOUND' });
      return;
    }

    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();

    results.push({
      selector,
      computed: {
        display: cs.display,
        position: cs.position,
        width: cs.width,
        height: cs.height,
        margin: `${cs.marginTop} ${cs.marginRight} ${cs.marginBottom} ${cs.marginLeft}`,
        padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
        boxSizing: cs.boxSizing
      },
      rect: {
        top: r.top,
        bottom: r.bottom,
        left: r.left,
        right: r.right,
        width: r.width,
        height: r.height
      }
    });
  });

  copy(JSON.stringify(results, null, 2));
})();