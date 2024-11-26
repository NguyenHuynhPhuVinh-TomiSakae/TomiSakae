import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScroll";

interface GitHubStatsProps {
    username?: string;
}

export default function GitHubStats({ username = "NguyenHuynhPhuVinh-TomiSakae" }: GitHubStatsProps) {
    const { ref, isInView } = useScrollAnimation();

    const container = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
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
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
        >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Stats
            </h2>

            <motion.div className="grid gap-4 md:grid-cols-2">
                {/* GitHub Stats Card */}
                <motion.div variants={item} className="rounded-lg overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true`}
                        alt="GitHub Stats"
                        className="w-full"
                        loading="lazy"
                    />
                </motion.div>

                {/* Most Used Languages */}
                <motion.div variants={item} className="rounded-lg overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true&layout=compact`}
                        alt="Most Used Languages"
                        className="w-full"
                        loading="lazy"
                    />
                </motion.div>

                {/* GitHub Streak Stats */}
                <motion.div variants={item} className="rounded-lg overflow-hidden md:col-span-2">
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=highcontrast&hide_border=false`}
                        alt="GitHub Streak"
                        className="w-full"
                        loading="lazy"
                    />
                </motion.div>

                {/* GitHub Trophy */}
                <motion.div variants={item} className="rounded-lg overflow-hidden md:col-span-2">
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=onestar&no-frame=false&column=7&margin-w=15&margin-h=15`}
                        alt="GitHub Trophy"
                        className="w-full"
                        loading="lazy"
                    />
                </motion.div>

                {/* GitHub Activity Graph */}
                <motion.div variants={item} className="rounded-lg overflow-hidden md:col-span-2">
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=false`}
                        alt="GitHub Activity Graph"
                        className="w-full"
                        loading="lazy"
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}