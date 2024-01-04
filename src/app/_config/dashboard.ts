import { DashboardConfig } from "@/server/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "FAQ",
      href: "/dashboard/support",
    },
    {
      title: "Support",
      href: "/dashboard/support",
    },
  ],
  sidebarNav: [
    {
      title: "Home",
      href: "/dashboard",
      icon: "database",
    },
    {
      title: "My Profile",
      href: "/dashboard/profile",
      icon: "copyplus",
    },
    {
      title: "Add Projects",
      href: "/dashboard/project",
      icon: "copyplus",
    },
    {
      title: "Add Recommendatinos",
      href: "/dashboard/recommendation",
      icon: "copyplus",
    },
    {
      title: "Add Experiences",
      href: "/dashboard/experience",
      icon: "copyplus",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
