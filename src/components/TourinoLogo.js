import Image from 'next/image';
import Link from 'next/link';

const TourinoLogo = ({ linkClasses }) => {
    return (
        <>
            <Link href = '/' className = {linkClasses}>
                <Image src = '/tourino-logo.png' alt = "tourino logo | تورینو" sizes = '130px' className = 'h-auto w-[130px]' width = {0} height = {0} priority/>
            </Link>
        </>
    );
};

export default TourinoLogo;