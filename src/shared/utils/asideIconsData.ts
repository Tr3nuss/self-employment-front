import { IAsideIcon } from "../types/asideIconsTypes";
import user from "../../images/asideImages/User images.svg";
import home from "../../images/asideImages/home.svg";
import tasks from "../../images/asideImages/Frame 3.svg";
import documents from "../../images/asideImages/Frame 4.svg";
import users from "../../images/asideImages/Frame 6.svg";
import papers from "../../images/asideImages/Frame 5.svg";
import quit from "../../images/asideImages/Frame 7.svg";

export const asideIconsRoutes: IAsideIcon[] = [
  { src: user, alt: "User" },
  { src: home, alt: "Home" },
  { src: tasks, alt: "Tasks" },
  { src: users, alt: "Users" },
  { src: documents, alt: "Documents" },
  { src: papers, alt: "Papers" },
  { src: quit, alt: "Quit" },
];
