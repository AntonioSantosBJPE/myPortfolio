import { infosProjects } from "./dateProjects.js";
export function renderListcardsProject() {
  const ul = document.querySelector(".list-projects");

  infosProjects.forEach(({ name, tags, imgCapa, linkSite, linkGithub }) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.classList = "card-project flex flex-col";

    const figure = document.createElement("figure");
    li.appendChild(figure);
    figure.classList = "box-img-card ";

    const img = document.createElement("img");
    figure.appendChild(img);
    img.src = imgCapa;
    img.alt = `Imagem projeto ${name}`;

    const divBoxLinksHover = document.createElement("div");
    figure.appendChild(divBoxLinksHover);
    divBoxLinksHover.classList =
      "box-buttons-hover flex flex-col items-center justify-center";

    const aLinkSite = document.createElement("a");
    divBoxLinksHover.appendChild(aLinkSite);
    aLinkSite.classList = "btn-radius-secondary-grey3";
    aLinkSite.target = "_blank";
    aLinkSite.href = linkSite;
    aLinkSite.innerText = "Ver site";

    const aLinkGithub = document.createElement("a");
    divBoxLinksHover.appendChild(aLinkGithub);
    aLinkGithub.classList = "btn-outline";
    aLinkGithub.target = "_blank";
    aLinkGithub.href = linkGithub;
    aLinkGithub.innerText = "Ver código no Github";

    const projectName = document.createElement("h4");
    li.appendChild(projectName);
    projectName.classList = "card-project-title";
    projectName.innerText = name;

    const divBoxTags = document.createElement("div");
    li.appendChild(divBoxTags);
    divBoxTags.classList =
      "card-project-list-tags flex items-center justify-center";

    tags.forEach((tag) => {
      const spantag = document.createElement("span");
      divBoxTags.appendChild(spantag);
      spantag.classList = "tag-outline";
      spantag.innerText = tag;
    });
  });
}
