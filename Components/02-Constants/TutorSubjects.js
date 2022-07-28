import { IoLogoNodejs } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCsswizardry, SiSass, SiStyledcomponents, SiCss3 } from "react-icons/si";
import { VscFlame } from 'react-icons/vsc';

export const TutorSubjects = [
    {
        icon: <TbBrandNextjs style={{ fontSize: "3rem", color: "black" }} />,
        subjectTitle: "Next.js",
        subjectDiscription: "Sessions on react will cover all the fundementals , including things like components,props,state and a multitude of other advanced hooks such as custom hooks, useCallback,memo,useMemo which will lead you to building your own portfolio or any project you like",
        subjectList:[
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
            "Deployment"
        ],
        Projects:"Resturant Food Menu",
        price: 20.00,
        author: "Jordan Linton",
        authorImg: "/images/greyback.png"
    },
    {
        icon: <DiReact style={{ fontSize: "3rem", color: "#61DAFB" }} />,
        subjectTitle: "Advanced React",
        subjectDiscription: "Sessions on react will cover all the fundementals , including things like components,props,state and a multitude of other advanced hooks such as custom hooks, useCallback,memo,useMemo which will lead you to building a shopping list and your own portfolio or any project you desire",
        subjectList:[
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
            "Advanced Hooks: reducer, context,memo,useMemo,useCallback "
        ],
        Projects:"Shopping list",

        price: 20.00,
        author: "Jordan Linton",
        authorImg: "/images/greyback.png"
    },
    {
        icon: <IoLogoNodejs style={{ fontSize: "3rem", color: "green" }} />,
        subjectTitle: "Javascript",
        subjectDiscription: "Sessions on react will cover all the fundementals , including things like components,props,state and a multitude of other advanced hooks such as custom hooks, useCallback,memo,useMemo which will lead you to building your own portfolio or any project you like",
        subjectList:[
            "Introduction & Setup",
            "order of operation",
            "basic datatypes & datastructures",
            "loops and conditional statements",
            "functions",
            "DOM manipulation",
            "Mathmatical operators (basic math 1+1,1-1,1*1,1/2)",
            "high order array",
            "plus alot more"
        ],
        price: 20.00,
        author: "Jordan Linton",
        authorImg: "/images/greyback.png",
        Projects:"Shopping list"
    },
    {
        icon: <SiCsswizardry style={{ fontSize: "3rem", color: "#007ACC" }} />,
        subjectTitle: "CSS & BEM",
        subjectDiscription: "Sessions on CSS will cover the fundamentals such as classes and id's how to add it to you html and javascript with inline styling , conditional rendering , variable and a lot lot more!",
        subjectList:[],
        Projects:"Resturant Food Menu",
        price: 20.00,
        author: "Jordan Linton",
        authorImg: "/images/greyback.png"
    },
    {
        icon: <SiSass style={{ fontSize: "3rem", color: "#C66394" }} />,
        subjectTitle: "SASS & BEM",
        subjectDiscription: "Sessions on SASS will cover things like Mixins, Sass Ampersand for nesting and vairables also the huge benefits of using BEM methodology",
        subjectList:[],
        Projects:"Resturant Food Menu",

        price: 20.00,
        author: "Jordan Linton",
        authorImg: "/images/greyback.png"
    },
    {
        icon: <SiCss3 style={{ fontSize: "3rem", color: "#007ACC" }} />,
        subjectTitle: "CSS Modules & BEM",
        subjectDiscription: "Sessions on CSS Modules will cover all the fundementals , including things like implimenting CSS modules with react, benefits and best practices also touching on BEM and why to use it",
        subjectList:[],
        Projects:"Resturant Food Menu",

        price: 20.00,
        author: "Jordan Linton",
        authorImg: "/images/greyback.png"
    },
    {
        icon: <SiStyledcomponents style={{ fontSize: "3rem", color: "#F7CB4F" }} />,
        subjectTitle: "Styled Components",
        subjectDiscription: "Sessions on Styled components will cover react based styled components with things like dynamic rendering to best practices , props and a vairiaty of other things.",
        subjectList:[],
        Projects:"Resturant Food Menu",

        price: 21.00,
        author: "Jordan Linton",
        authorImg: "/images/greyback.png"
    }

]

export const TutorCards = [
    {
        icon: <VscFlame style={{ fontSize: "3rem", color: "#C49B3B" }} />,
        title: "Premium Lessons",
        textContent: "Each lesson comes with a time table & classroom repository which you can allways redo in your own time",
    },
    {
        icon: <VscFlame style={{ fontSize: "3rem", color: "#C49B3B" }} />,
        title: "Premium Lessons",
        textContent: "Each lesson comes with a lesson repository which you can allways redo in your own time",
    }
]