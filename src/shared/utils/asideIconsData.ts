import { IAsideIcon } from "../types/asideIconsTypes";
import user from "../../images/asideImages/User images.svg";
import home from "../../images/asideImages/home.svg";
import tasks from "../../images/asideImages/Frame 3.svg";
import documents from "../../images/asideImages/Frame 4.svg";
import users from "../../images/asideImages/Frame 6.svg";
import quit from "../../images/asideImages/Frame 7.svg";

export const asideIconsRoutes: IAsideIcon[] = [
  { src: user, alt: "User", history: "" },
  { src: home, alt: "Home", history: "main" },
  { src: tasks, alt: "Tasks", history: "" },
  { src: users, alt: "Users", history: "customers" },
  { src: documents, alt: "Documents", history: "payments" },
  { src: quit, alt: "Quit", history: "" },
];
