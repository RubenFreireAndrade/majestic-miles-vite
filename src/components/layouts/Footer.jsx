import {Link} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

export default function Footer({setFont}) {
    return (
        <footer class="bg-mm-black text-white p-8">
            <div class="flex justify-evenly items-center">
                <div class="flex">
                    <SocialIcon
                        url="https://www.instagram.com/majestic__miles/"
                        network="tiktok"
                        className="mx-1 md:mx-5"
                    />
                    <SocialIcon
                        url="https://www.instagram.com/majestic__miles/"
                        network="instagram"
                        className="mx-1 md:mx-5"
                    />
                    <SocialIcon
                        url="https://www.instagram.com/majestic__miles/"
                        network="linkedin"
                        className="mx-1 md:mx-5"
                    />
                </div>
                <div className="mx-2 md:mx-5">&copy; 2024 Majestic Miles. All rights reserved.</div>
            </div>
        </footer>
    );
}
