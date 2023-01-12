const projects = Array.from(
  document.querySelectorAll(".projects__card-set .card")
);
const chips = Array.from(
  document.querySelectorAll(".projects .chip-group .chip-group__input")
) as Array<HTMLInputElement>;

// Add categories to this array if category list increases
const projectCategories = [
  "html",
  "js",
  "react",
  "nextjs",
  "express",
  "kotlin",
];

chips.forEach((chip) => {
  chip.addEventListener("change", (e) => {
    // "All" chip clicked
    if (chip.value === "all") {
      // Remove the "invisible" class
      projects.forEach((project) => {
        project.classList.remove("card--invisible");
      });
      return;
    }

    // Any other chip clicked
    projectCategories.forEach((projectCategory) => {
      if (projectCategory === chip.value) {
        showProjectsByValue(projectCategory);
      }
    });
  });
});

/**
 * Removes "card--invisible" class to projects containing the "date-categories" attribute with a value of the "value" parameter.
 * Adds "card--invisible" class to all other projects
 * @param value - value of "data-categories" attribute in which the "card--invisible" class is to be removed from
 */
function showProjectsByValue(value: string): void {
  projects.forEach((project) => {
    const projectCategories = project
      .getAttribute("data-categories")
      ?.split("/");
    if (projectCategories?.includes(value)) {
      project.classList.remove("card--invisible");
    } else {
      project.classList.add("card--invisible");
    }
  });
}
