import {
  Mail,
  Bell,
  House,
  Wallet,
  Settings,
  DoorOpen,
  CircleUser,
  MessageCircleQuestion,
} from "lucide-react";

import { SectionProps } from "./types";

export const routes: SectionProps[] = [
  {
    title: "timeline",
    routes: [
      {
        name: "home",
        theme: "blue",
        href: "/dashboard/home",
        Icon: House
      },
      {
        name: "questions",
        theme: "blue",
        href: "/dashboard/questions",
        Icon: MessageCircleQuestion
      },
      {
        name: "messages",
        theme: "blue",
        href: "/dashboard/messages",
        Icon: Mail
      },
      {
        name: "notifications",
        theme: "blue",
        href: "/dashboard/notifications",
        Icon: Bell
      },
    ]
  },
  {
    title: "earnings",
    routes: [
      {
        name: "wallet",
        theme: "blue",
        href: "/dashboard/wallet",
        Icon: Wallet
      }
    ]
  },
  {
    title: "user account",
    routes: [
      {
        name: "profile",
        theme: "blue",
        href: "/dashboard/profile",
        Icon: CircleUser
      },
      {
        name: "settings",
        theme: "blue",
        href: "/dashboard/settings",
        Icon: Settings
      },
      {
        name: "logout",
        theme: "red-700",
        href: "/dashboard/logout",
        Icon: DoorOpen
      }
    ]
  }
];