import { DashboardConfig } from "@/server/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Support",
      href: "/support",
    },
  ],
  sidebarNav: [
    {
      title: "Home",
      href: "/applicant-dashboard",
      icon: "home",
    },
    {
      title: "My Profile",
      href: "/applicant-dashboard/profile",
      icon: "usercircle",
    },
    // {
    //   title: "Edit Profile Items",
    //   href: "/applicant-dashboard/edit",
    //   icon: "edit",
    // },
    {
      title: "Update Profile",
      href: "/applicant-dashboard/update-profile",
      icon: "cog",
    },
    {
      title: "Add Experiences",
      href: "/applicant-dashboard/add-experience",
      icon: "sparkles",
    },
    {
      title: "Recommendations",
      href: "/applicant-dashboard/add-recommendation",
      icon: "usercheck",
    },
    {
      title: "Add Projects",
      href: "/applicant-dashboard/add-project",
      icon: "package",
    },
    {
      title: "Settings",
      href: "/applicant-dashboard/settings",
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
    // {
    //   title: "Edit Careers & Events",
    //   href: "/company-dashboard/edit",
    //   icon: "edit",
    // },
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
      title: "Add Team Member",
      href: "/company-dashboard/add-team-member",
      icon: "UserPlus",
    },
    {
      title: "Add Testimonial",
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

