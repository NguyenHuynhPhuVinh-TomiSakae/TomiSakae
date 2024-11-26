import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScroll";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    features?: string[];
}

const projects: Project[] = [
    {
        title: "🚀 ShowAI",
        description: "Dự án Cơ Sở Ngành viết bằng Cursor và 98% do AI viết!",
        tags: ["Cursor", "AI", "Full-stack"],
        link: "https://github.com/TomiSakae/ShowAI",
        features: [
            "Tích hợp AI vào quá trình phát triển",
            "Sử dụng Cursor để tối ưu hóa code",
            "Tự động hóa nhiều quy trình",
            "Giao diện người dùng thân thiện",
            "Và nhiều tính năng khác..."
        ]
    }
];

export default function Projects() {
    const { ref, isInView } = useScrollAnimation();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -50 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
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
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
                </svg>
                Dự Án
            </h2>

            <div className="space-y-6">
                {projects.map((project) => (
                    <motion.a
                        key={project.title}
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group border border-gray-600/30 hover:border-blue-500/30"
                    >
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                        </h3>

                        <p className="text-gray-300 mt-2 text-base">
                            {project.description}
                        </p>

                        {project.features && (
                            <div className="mt-4 space-y-2">
                                <h4 className="text-sm font-semibold text-blue-400">Các Tính Năng Nổi Bật:</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="text-gray-300 text-sm">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-gray-600/50 text-gray-300 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                            <span className="text-sm">Xem trên GitHub</span>
                            <svg
                                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
}