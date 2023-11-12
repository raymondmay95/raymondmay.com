import { motion } from 'framer-motion';
import { PropsWithChildren } from "react";

export function AnimatedButtonContainer({ children }: PropsWithChildren) {

    return (
        <motion.div
            layout
            initial={{
                scale: 1,
                opacity: 1,
            }}
            exit={{
                scale: 1,
                opacity: 1,
            }}
            whileHover={{
                transition: {
                    duration: 1
                },
                scale: [1, 1.2, 1.4, 1.2, 1],
                opacity: [1, 0.8, 0.6, 0.8, 1],
            }}
            whileTap={{
                transition: {
                    duration: 1
                },
                scale: [1, 1.2, 1.4, 1.2, 1],
                opacity: [1, 0.8, 0.6, 0.8, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
