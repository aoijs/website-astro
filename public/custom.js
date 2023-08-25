const key = 'toc-position';
let position = { scrollTop: 0 };
const sidebar = document.querySelector('#starlight__sidebar > .sidebar-content');

if (sidebar) {
    const data = sessionStorage.getItem(key);
    if (data) {
        try {
            const obj = JSON.parse(data);
            position = {
                ...position,
                ...obj,
            };
            sidebar.scrollTop = position.scrollTop || 0;
        } catch (err) {
            console.error("[ERR] ", err);
        }
    }

    sidebar.addEventListener('scroll', () => {
        position.scrollTop = sidebar.scrollTop;
        sessionStorage.setItem(key, JSON.stringify(position));
    });
}

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "attributes") {
            const current = mutation.target.getAttribute("aria-current");
            if (current) {
                mutation.target.scrollIntoView({ block: "center" });
            }
        }
    }
}).observe(document.querySelector("starlight-toc > nav > ul"), {
    attributeFilter: ["aria-current"],
    subtree: true,
});