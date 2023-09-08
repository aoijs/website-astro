// handle toc update / keep focus (ignore)
const key = "toc-position";
let position = { scrollTop: 0 };
const sidebar = document.querySelector(
  "#starlight__sidebar > .sidebar-content",
);

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

  sidebar.addEventListener("scroll", () => {
    position.scrollTop = sidebar.scrollTop;
    sessionStorage.setItem(key, JSON.stringify(position));
  });
}

// Create a new MutationObserver
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes") {
      const current = mutation.target.getAttribute("aria-current");
      if (current) {
        mutation.target.scrollIntoView({ block: "center" });
      }
    }
  }
});

// Ensure the element exists before attempting to observe it
const targetElement = document.querySelector("starlight-toc > nav > ul");
if (targetElement) {
  observer.observe(targetElement, {
    attributeFilter: ["aria-current"],
    subtree: true,
  });
}

// codeblock copy button (ignore)
let codeBlocks = Array.from(document.querySelectorAll("pre"));

for (let codeBlock of codeBlocks) {
  let wrapper = document.createElement("div");
  wrapper.style.position = "relative";

  let copyButton = document.createElement("div");
  copyButton.className = "copy-button";
  copyButton.innerHTML = `Copy`;
  copyButton.style.display = "none";

  copyButton.addEventListener("click", async () => {
    await copyCode(codeBlock, copyButton);
  });

  wrapper.appendChild(codeBlock.cloneNode(true));
  codeBlock.parentNode.replaceChild(wrapper, codeBlock);
  wrapper.appendChild(copyButton);

  wrapper.addEventListener("mouseenter", () => {
    copyButton.style.display = "block";
  });

  wrapper.addEventListener("mouseleave", () => {
    copyButton.style.display = "none";
  });
}

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;
  await navigator.clipboard.writeText(text);
  button.innerHTML = `Copied!`;
  button.disabled = true;
  setTimeout(() => {
    button.innerHTML = `Copy`;
    button.disabled = false;
  }, 3000);
}
