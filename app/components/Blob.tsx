"use client";

import { motion } from "framer-motion";

export default function Blob() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]"
                animate={{
                    x: [0, 80, -60, 40, 0],
                    y: [0, -60, 80, -40, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "10%", left: "10%" }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px]"
                animate={{
                    x: [0, -70, 50, -30, 0],
                    y: [0, 60, -80, 50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "40%", left: "40%" }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[120px]"
                animate={{
                    x: [0, 60, -40, 70, 0],
                    y: [0, -50, 60, -70, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ bottom: "10%", right: "10%" }}
            />
        </div>
    );
}
















