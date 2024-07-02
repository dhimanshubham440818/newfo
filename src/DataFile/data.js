
// Header Data 
const HeaderData = {
    menuLinks: [
        { linkTitle: "Home", url: "#home" },
        { linkTitle: "About", url: "#about" },
        { linkTitle: "Services", url: "#services" },
        { linkTitle: "Pricing", url: "#pricing" },
        { linkTitle: "Contact", url: "#contact" },
        {
            linkTitle: "Pages", subMenuLinks:
                [
                    { linkTitle: "Projects", url: "projects-list" },
                ]
        },
    ],
}


// Skills Data Section 
export const SkillsData = {
        title:"My Services",
        summary:"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
    skills: [
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
        },
        {
            title: "Netflix",
            description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            link: "https://netflix.com",
        },
        {
            title: "Google",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            link: "https://google.com",
        },
        {
            title: "Meta",
            description:
                "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
            link: "https://meta.com",
        },
        {
            title: "Amazon",
            description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
            link: "https://amazon.com",
        },
        {
            title: "Microsoft",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            link: "https://microsoft.com",
        },
    ],
}

// Hero Section Data 
const heroSectionData = {
    gretting: "Hey There 👋 I am",
    titleDesignation: "Professional ",
    designation: "Software Developer",
    summary: "I craft digital solutions that put  users at the forefront of innovation. Where code meets creativity, and users take center stage.",
    name: [
        {
            text: "Shubham",
        },
        {
            text: "Dhiman",
            className: "text-blue-500 dark:text-blue-500",
        },
    ],
}

// About Me Data 

const AboutMeData = {
    titleHeading: "Better design, better experience",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.",
    connectWithMeMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testilor Aliq lorem vitae semper tempor."
}

// footer Data 
const FooterData = {
    contactInfo: {
        email: "dhimanshubham440818@gmail.com",
        mobile: "+91 844 580 0599",
        address: "818 Indira Colony Muzaffarnagae ( U.P. )"
    },
    quickLinks: [
        { title: "Style", url: "Style" },
        { title: "Health", url: "Style" },
        { title: "Relationship", url: "Style" },
        { title: "Legal & Privacy", url: "Style" }
    ],
};

export { HeaderData, FooterData, AboutMeData, heroSectionData }

