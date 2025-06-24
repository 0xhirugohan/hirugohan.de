import { useEffect, useState } from 'react';

interface CustomAlertProps {
    message: string;
    position: { x: number; y: number };
    onClose: () => void;
}

export const CustomAlert = ({ message, position, onClose }: CustomAlertProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed z-50 px-4 py-2 text-sm rounded-lg shadow-lg bg-zinc-800 text-white dark:bg-zinc-700 dark:text-zinc-100 transition-opacity duration-300"
            style={{
                left: Math.min(position.x, window.innerWidth - 300), // Prevent overflow
                top: Math.min(position.y, window.innerHeight - 100),  // Prevent overflow
                maxWidth: '300px'
            }}
        >
            <div className="flex items-center space-x-2">
                <svg 
                    className="w-5 h-5 text-yellow-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
                <p>{message}</p>
            </div>
        </div>
    );
};
