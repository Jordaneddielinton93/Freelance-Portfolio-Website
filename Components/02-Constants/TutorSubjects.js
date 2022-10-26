import { IoLogoNodejs } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FcInfo } from "react-icons/fc";
import {
  SiCsswizardry,
  SiSass,
  SiStyledcomponents,
  SiCss3,
} from "react-icons/si";
import { VscFlame } from "react-icons/vsc";

export const TutorSubjects = [
  {
    icon: <FcInfo style={{ fontSize: "3rem", color: "black" }} />,
    subjectTitle: "Mentoring Sessions",
    subjectDiscription:
      "Mentoring sessions are for just getting my insites, feed back, direction and anything you maybe unsure with no topic is to simple to cover",
    subjectList: ["Anything you are unsure about", "To grow at a rapid pace"],
    Projects: "Your Choice",
    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
  },
  ,
  {
    icon: <TbBrandNextjs style={{ fontSize: "3rem", color: "black" }} />,
    subjectTitle: "Next.js",
    subjectDiscription:
      "Take your pick of any sessions on Next including things like page routing , creating layouts ,adding styling with Modules, and the deeper topics like getStatic and props SSR",
    subjectList: [
      "Introduction & Setup",
      "Pages , Routing and Linking pages",
      "Components",
      "Creating Page Layouts",
      "Adding Styling & Style sheets",
      "Custom 404 error pages",
      "dedirecting pages .go & .push",
      "Image Opitmisation & Meta data",
      "getStaticProps",
      "Dynamic Routing",
      "getStaticPaths",
      "Deployment",
    ],
    Projects: "Resturant Food Menu",
    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
  },
  {
    icon: <DiReact style={{ fontSize: "3rem", color: "#61DAFB" }} />,
    subjectTitle: "Advanced React",
    subjectDiscription:
      "Take your pick of any sessions on react including things like components,props,state and a multitude of other advanced hooks such as custom hooks, useCallback,memo,useMemo which will lead you to building a shopping list and your own portfolio or any project you desire",
    subjectList: [
      "Introduction & Setup",
      "Create a React App",
      "Components",
      "Rendering data types",
      "Nested Components",
      "Adding Styling & Style sheets",
      "Handling User Events",
      "handling state with useState Hook",
      "React dev tools",
      "Rendering Lists",
      "Passing state and functions as props",
      "useEffect & async Fetch",
      "conditional loading",
      "custom hooks",
      "React Router, Linking & dynamic routes",
      "Advanced Hooks: reducer, context,memo,useMemo,useCallback ",
    ],
    Projects: "Shopping list",

    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
  },
  {
    icon: <IoLogoNodejs style={{ fontSize: "3rem", color: "green" }} />,
    subjectTitle: "Javascript",
    subjectDiscription:
      "Take your pick of any sessions on Javascript , including things like the dom,high order array methods,keeping things in sync and a multitude of other advanced JS tips and tricks",
    subjectList: [
      "Introduction & Setup",
      "order of operation",
      "basic datatypes & datastructures",
      "loops and conditional statements",
      "functions",
      "DOM manipulation",
      "Mathmatical operators (basic math 1+1,1-1,1*1,1/2)",
      "high order array",
      "plus alot more",
    ],
    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
    Projects: "Shopping list",
  },
  {
    icon: <SiCsswizardry style={{ fontSize: "3rem", color: "#007ACC" }} />,
    subjectTitle: "CSS & BEM",
    subjectDiscription:
      "Take your pick of any sessions on CSS, we will cover the fundamentals such as classes and id's how to add it to you html and javascript with inline styling , conditional rendering , variable's and a lot lot more!",
    subjectList: [],
    Projects: "Resturant Food Menu",
    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
  },
  {
    icon: <SiSass style={{ fontSize: "3rem", color: "#C66394" }} />,
    subjectTitle: "SASS & BEM",
    subjectDiscription:
      "Sessions on SASS will cover things like Mixins, Sass Ampersand for nesting and vairables also the huge benefits of using BEM methodology",
    subjectList: [],
    Projects: "Resturant Food Menu",

    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
  },
  {
    icon: <SiCss3 style={{ fontSize: "3rem", color: "#007ACC" }} />,
    subjectTitle: "CSS Modules & BEM",
    subjectDiscription:
      "Take your pick of any sessions on CSS Modules ,covering the fundementals , including things like implimenting CSS modules with react, benefits and best practices also touching on BEM and why to use it",
    subjectList: [],
    Projects: "Resturant Food Menu",

    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
  },
  {
    icon: <SiStyledcomponents style={{ fontSize: "3rem", color: "#F7CB4F" }} />,
    subjectTitle: "Styled Components",
    subjectDiscription:
      "Sessions on Styled components will cover react based styled components with things like dynamic rendering to best practices , props and a vairiaty of other things.",
    subjectList: [],
    Projects: "Resturant Food Menu",

    price: 25,
    author: "Jordan Linton",
    authorImg: "/images/greyback.png",
  },
];

export const TutorCards = [
  {
    icon: <VscFlame style={{ fontSize: "3rem", color: "#C49B3B" }} />,
    title: "Premium Lessons",
    textContent:
      "Each lesson comes with a time table & classroom repository which you can allways redo in your own time",
  },
  {
    icon: <VscFlame style={{ fontSize: "3rem", color: "#C49B3B" }} />,
    title: "Premium Lessons",
    textContent:
      "Each lesson comes with a lesson repository which you can allways redo in your own time",
  },
];
