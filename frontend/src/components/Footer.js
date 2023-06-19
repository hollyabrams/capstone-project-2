import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500 mx-6 sm:mx-20 md:mx-32 lg:mx-48">
                © 2023 Mode. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-3 mx-6 sm:mx-20 md:mx-32 lg:mx-48">
                Heads up: This website isn't a real ecommerce site. It's actually a project built to demonstrate ecommerce capabilities. No actual products are for sale, so feel free to click around without any shopping guilt!
            </p>
            <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/hollyabrams/capstone-project-2" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-500 h-6 w-6"/>
                </a>
                <a href="https://www.linkedin.com/in/hollyabrams/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-gray-500 h-6 w-6"/>
                </a>
            </div>
        </footer>
    );
}

