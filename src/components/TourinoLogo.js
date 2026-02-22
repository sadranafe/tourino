import Image from 'next/image';
import Link from 'next/link';

const TourinoLogo = ({ linkClasses }) => {
    return (
        <>
            <Link href = '/' className = {linkClasses}>
                <Image src = '/tourino-logo.png' alt = "tourino logo | تورینو" width = {130} height = {40} priority/>
            </Link>
        </>
    );
};

export default TourinoLogo;