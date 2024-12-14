import cv from "../images/cv.pdf";
import youtube from "../images/youtubes.png";
import blog from "../images/blogs.png";
import social from "../images/socials.jpg";
import premerepro from "../images/premerepros.png";
import Photoshop from "../images/photoshop.png";
import aftereffect from "../images/aftereffect.png";
import channel from "../images/channel.jpg";
import chaitanya from "../images/chaitanya.jpg";
import campus from "../images/campus.jpg";

export const Bio = {
  name: "Samer Joshi",
  roles: ["Designer", "Content Creator"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/dineshpaudel1",
  resume: "",
  linkedin: "https://www.linkedin.com/in/sr-joshi-837239225/",
  twitter: "https://x.com/nepaligyan0",
  insta: "https://www.instagram.com/nepaligyan0/",
  facebook: "https://www.facebook.com/ShivaJoshi0",
  github: "",
  resume: "d",
};

export const skills = [
  {
    title: "My Work",
    skills: [
      {
        name: "Youtube",
        image: youtube,
      },
      {
        name: "Blog Post",
        image: blog,
      },

      {
        name: "Social Media",
        image: social,
      },
    ],
  },
  {
    title: "Skill",
    skills: [
      {
        name: "Premere Pro",
        image: premerepro,
      },
      {
        name: "Photoshop",
        image: Photoshop,
      },

      {
        name: "After effect",
        image: aftereffect,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: channel,
    role: "Content Creator",
    company: "Nepali Gyan",
    date: "sepetember 2018 - now",
    desc: "As a Content Creator, I had an incredible chance to grow my own YouTube channel, which is named Nepali Gyan.",
    skills: ["Video Editing , Photo Editing , 3D Animation"],
  },
  {
    id: 1,
    img: chaitanya,
    role: "IT Support",
    company: "Chaitanya Loksewa",
    date: "sepetember 2023 - now",
    desc: "Working at Chaitanya Loksewa, I had a great opportunity to learn leadership, communication skills, technical skills, social media handling, and more.",
    skills: ["Website Handling, Digital Marketing, Page Boosting"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6GwoArknorOhIIPtmgVMjjv1y6qEwzTShMefZXWD7Q&s",
    school: "GhodaGhodi Multiple Campus",
    date: "jan 2017 - Sep 2019",
    grade: "3.12 CGPA",
    desc: "I have done my 11 & 12 at GhodaGhodi Multiple Campus",
    degree: "National Examination Board(NEB)",
  },
  {
    id: 1,
    img: campus,
    school: "Nepal Commerce Campus",
    date: "Feb 2019 - 2024",
    grade: "3.3",
    desc: "I completed my bachelor's degree in 2024.",
    degree: "Bachelor of Business Studies",
  },
];

export const projects = [
  {
    id: 0,
    title: "Nepali Gyan",
    date: "sepetember 2024 - now",
    description:
      "As a Content Creator, I had an incredible chance to grow my own YouTube channel, which is named Nepali Gyan.",
    image: channel,
    tags: ["Video Editing", "Graphic Designing", "Digital", "Marketing"],
    category: "Content Creation",
    github: "google.com",
    webapp: "google.com",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
