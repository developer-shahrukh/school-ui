import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    title: "Menu",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teacher",
        href: "/teachers",
        visible: ["admin","teacher"],
      },
      {
        icon: "/student.png",
        label: "Student",
        href: "/students",
        visible: ["admin","teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parent",
        href: "/parents",
        visible: ["admin","teacher"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/classes",
        visible: ["admin","teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/lessons",
        visible: ["admin","teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/exams",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/assignments",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/attendance",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/messages",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/announcements",
        visible: ["admin","teacher","student","parent"],
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        icon: "/profile.png",
        label: "Profiles",
        href: "/profile",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settingse",
        visible: ["admin","teacher","student","parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin","teacher","student","parent"],
      },
    ],
  },
];

function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{i.title}</span>
          {i.items.map((item) => (
            <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
              <Image src={item.icon} alt="" width={20} height={20}/>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
