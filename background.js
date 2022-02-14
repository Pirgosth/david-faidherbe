chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.scripting.executeScript({
    target: { tabId },
    function: (addDavid),
  });
});

function addDavid() {
  const davids = [
    "https://c.tenor.com/A7VWGeskS9wAAAAC/well-shrug.gif",
    "https://c.tenor.com/ux083wV-PL0AAAAC/davidgoodenough.gif",
    "https://c.tenor.com/VLami7nTmT0AAAAd/jdg-joueur-du-grenier.gif",
    "https://c.tenor.com/oEaeGNkeX2oAAAAd/nulachier-jdg.gif"
  ];

  let imgList = document.querySelectorAll("figure")
  imgList.forEach((fig, i) => {
    fig.setAttribute("data-url", davids[i%4]);
  });

  const linkContrastCss = `
      figcaption a {
        background-color: #000000BB;
      }

      figcaption p a {
        font-size: 30px;
      }

      figure, figure > div {
        background-size: 100% !important;
        width: 100%;
        max-width: 100% !important;
      }
  `;

  let styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = linkContrastCss;
  document.head.appendChild(styleSheet);

}