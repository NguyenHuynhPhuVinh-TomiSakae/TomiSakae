import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScroll";

interface TechItem {
    name: string;
    imgSrc: string;
    category: string;
}

const technologies: TechItem[] = [
    // OS & Tools
    { name: "Windows 11", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Windows11/windows111.svg", category: "OS & Tools" },
    { name: "Gmail", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Gmail/gmail1.svg", category: "OS & Tools" },
    { name: "Git", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Git/git1.svg", category: "OS & Tools" },
    { name: "Github", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Github/github1.svg", category: "OS & Tools" },
    { name: "IntelliJ IDEA", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/IDEA/idea1.svg", category: "OS & Tools" },
    { name: "Chrome", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Chrome/chrome1.svg", category: "OS & Tools" },
    { name: "VS Code", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/VisualStudioCode/visualstudiocode1.svg", category: "OS & Tools" },

    // Frontend
    { name: "HTML", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/HTML/html1.svg", category: "Frontend" },
    { name: "CSS", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/CSS/css1.svg", category: "Frontend" },
    { name: "Sass", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Sass/sass1.svg", category: "Frontend" },
    { name: "Font Awesome", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/FontAwesome/fontawesome1.svg", category: "Frontend" },
    { name: "JavaScript", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Javascript/javascript3.svg", category: "Frontend" },
    { name: "JSON", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/JSON/json1.svg", category: "Frontend" },
    { name: "jQuery", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/jQuery/jquery1.svg", category: "Frontend" },
    { name: "TypeScript", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/TypeScript/typescript1.svg", category: "Frontend" },
    { name: "ESLint", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/ESLint/eslint1.svg", category: "Frontend" },
    { name: "Axios", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Axios/axios1.svg", category: "Frontend" },
    { name: "Bootstrap", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Bootstrap/bootstrap1.svg", category: "Frontend" },
    { name: "Tailwind", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/TailwindCSS/tailwindcss1.svg", category: "Frontend" },
    { name: "React", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/React/react1.svg", category: "Frontend" },
    { name: "Next.js", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/NextJS/nextjs1.svg", category: "Frontend" },
    { name: "Markdown", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Markdown/markdown1.svg", category: "Frontend" },

    // Backend
    { name: "Node.js", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/NodeJS/nodejs1.svg", category: "Backend" },
    { name: "npm", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/npm/npm1.svg", category: "Backend" },
    { name: "Express", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Express/express1.svg", category: "Backend" },
    { name: "Python", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Python/python3.svg", category: "Backend" },
    { name: "Flask", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Flask/flask1.svg", category: "Backend" },
    { name: "Java", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Java/java3.svg", category: "Backend" },
    { name: "Rust", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Rust/rust3.svg", category: "Backend" },
    { name: "C", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/C/c1.svg", category: "Backend" },
    { name: "C++", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/C++/c++1.svg", category: "Backend" },
    { name: "C#", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/CSharp/csharp1.svg", category: "Backend" },
    { name: "Visual Studio", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/VisualStudio/visualstudio1.svg", category: "Backend" },
    { name: ".NET", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/dotNET/dotnet1.svg", category: "Backend" },

    // Database
    { name: "MongoDB", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/MongoDB/mongodb1.svg", category: "Database" },
    { name: "MySQL", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/MySQL/mysql1.svg", category: "Database" },
    { name: "PostgreSQL", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/PostgreSQL/postgresql1.svg", category: "Database" },
    { name: "Firebase", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Firebase/firebase1.svg", category: "Database" },
    { name: "Supabase", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Supabase/supabase1.svg", category: "Database" },

    // Mobile
    { name: "Android", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Android/android1.svg", category: "Mobile" },
    { name: "Android Studio", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/AndroidStudio/androidstudio2.svg", category: "Mobile" },
    { name: "Flutter", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Flutter/flutter1.svg", category: "Mobile" },
    { name: "Dart", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Dart/dart1.svg", category: "Mobile" },

    // Cloud & DevOps
    { name: "AWS", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/AWS/aws1.svg", category: "Cloud & DevOps" },
    { name: "Docker", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Docker/docker1.svg", category: "Cloud & DevOps" },
    { name: "Vercel", imgSrc: "https://ziadoua.github.io/m3-Markdown-Badges/badges/Vercel/vercel1.svg", category: "Cloud & DevOps" },
];

// Tạo một hàm helper để lấy danh sách categories duy nhất
const getUniqueCategories = (technologies: TechItem[]): string[] => {
    return Array.from(new Set(technologies.map(tech => tech.category)));
};

export default function TechStack() {
    const { ref, isInView } = useScrollAnimation();
    const uniqueCategories = getUniqueCategories(technologies);

    const container = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15
            }
        }
    };

    const categoryAnimation = {
        hidden: { opacity: 0, x: -30 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const techItem = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        >
            <h2 className="text-2xl font-bold mb-6 text-white">Tech Stack</h2>

            <div className="space-y-8">
                {uniqueCategories.map(category => (
                    <motion.div
                        key={category}
                        variants={categoryAnimation}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-blue-400">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {technologies
                                .filter((tech: TechItem) => tech.category === category)
                                .map(tech => (
                                    <motion.div
                                        key={tech.name}
                                        variants={techItem}
                                        whileHover={{
                                            y: -5,
                                            scale: 1.1,
                                            transition: { type: "spring", stiffness: 300 }
                                        }}
                                    >
                                        <img
                                            src={tech.imgSrc}
                                            alt={tech.name}
                                            className="h-8"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}