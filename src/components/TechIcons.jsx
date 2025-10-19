import { Icon } from "@iconify-icon/react";

const TechIcons = () => {
  const techIcons = [
    "akar-icons:html-fill",
    "akar-icons:css-fill",
    "ri:tailwind-css-fill",
    "akar-icons:php-fill",
    "akar-icons:javascript-fill",
    "akar-icons:typescript-fill",
    "akar-icons:react-fill",
    "akar-icons:nextjs-fill",
    "teenyicons:git-solid",
    "akar-icons:github-fill",
    "mdi:wordpress",
  ];
  return techIcons.map((icon) => {
    return (
      <li key={icon}>
        <Icon icon={icon} width="24" height="24" />
      </li>
    );
  });
};

export default TechIcons;
