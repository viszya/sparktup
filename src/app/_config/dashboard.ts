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
      icon: "home",
    },
    {
      title: "My Profile",
      href: "/dashboard/profile",
      icon: "user",
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

export const dashboardCompanyConfig: DashboardConfig = {
  mainNav: [
    {
      title: "FAQ",
      href: "/company-dashboard/support",
    },
    {
      title: "Support",
      href: "/company-dashboard/support",
    },
  ],
  sidebarNav: [
    {
      title: "Home",
      href: "/company-dashboard",
      icon: "home",
    },
    {
      title: "My Profile",
      href: "/company-dashboard/profile",
      icon: "usercircle",
    },
    {
      title: "Update Profile",
      href: "/company-dashboard/update-profile",
      icon: "cog",
    },
    {
      title: "Edit Careers & Events",
      href: "/company-dashboard/edit",
      icon: "cog",
    },
    {
      title: "Add Career",
      href: "/company-dashboard/add-career",
      icon: "briefcase",
    },
    {
      title: "Add Event",
      href: "/company-dashboard/add-event",
      icon: "calendarclock",
    },
    {
      title: "Add/Edit Team Member",
      href: "/company-dashboard/add-team-member",
      icon: "UserPlus",
    },
    {
      title: "Add/Edit Testimonial",
      href: "/company-dashboard/add-testimonial",
      icon: "messagesquare",
    },
    {
      title: "Add Contact Info",
      href: "/company-dashboard/add-contact-info",
      icon: "phone",
    },
    {
      title: "Settings",
      href: "/company-dashboard/settings",
      icon: "settings",
    },
  ],
}

