import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
        >
            <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="h-36 w-36 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-gray-900 transition-transform duration-300 group-hover:scale-105">
                    <img
                        src="https://github.com/NguyenHuynhPhuVinh-TomiSakae.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 px-4 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">@TomiSakae</span>
                </div>
            </motion.div>
            <motion.div
                className="text-center space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <h1 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    TomiSakae
                </h1>
                <p className="text-gray-300 text-lg">
                    Full-stack Developer | AI Enthusiast
                </p>
                <img
                    src="https://count.getloli.com/@TomiSakae?theme=rule34"
                    alt="Profile Views"
                    className="mt-4 mx-auto"
                />
            </motion.div>
        </motion.header>
    );
}