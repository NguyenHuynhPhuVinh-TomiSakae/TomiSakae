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

export default function TechStack() {
    const categories = Array.from(new Set(technologies.map(tech => tech.category)));

    return (
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 2H17.5C19.433 2 21 3.567 21 5.5V18.5C21 20.433 19.433 22 17.5 22H6.5C4.567 22 3 20.433 3 18.5V5.5C3 3.567 4.567 2 6.5 2Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Tech Stack
            </h2>

            <div className="space-y-8">
                {categories.map(category => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold text-blue-400 mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies
                                .filter(tech => tech.category === category)
                                .map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="transition-transform duration-300 hover:-translate-y-1"
                                    >
                                        <img
                                            src={tech.imgSrc}
                                            alt={tech.name}
                                            className="h-7"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}