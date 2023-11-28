import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer class="bg-gray-800 text-white p-8">
            <div class="container mx-auto flex justify-between">
                <div class="flex">
                    <Link
                        //to="/social-media-1"
                        class="mr-4 hover:text-gray-500">
                        Social Media 1
                    </Link>
                    <Link
                        //to="/social-media-2"
                        class="mr-4 hover:text-gray-500">
                        Social Media 2
                    </Link>
                    <Link
                        //to="/social-media-3"
                        class="hover:text-gray-500">
                        Social Media 3
                    </Link>
                </div>
                <div>&copy; 2023 Majestic Miles. All rights reserved.</div>
            </div>
        </footer>
    );
}
