---
title: Attributions
author:
  name: Wanqi Li
  url: /fudan/team/#wanqi-li
headergif: https://static.igem.wiki/teams/5115/header/attribution-header.gif
---

<br><br>

The content below is fetched from [teams.igem.org/wiki/5115/attributions](https://attributions.igem.org?team=Fudan&year=2024).

<div id="attrDiv"></div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const _div = document.getElementById("attrDiv");
  fetch('https://teams.igem.org/wiki/5115/attributions')
    .then(response => {
      return response.text();
    })
    .then(html => {
      _div.innerHTML = html;
      // const parser = new DOMParser();
      // const doc = parser.parseFromString(html, "text/html");
      // const docArticle = doc.querySelector('article').innerHTML;
    })
    .catch(error => {
      console.error('fetch error: ', error);
    });
}, false);
</script>