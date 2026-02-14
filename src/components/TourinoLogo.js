import Link from 'next/link';

const TourinoLogo = ({ linkClasses }) => {
    return (
        <>
            <Link href = '/' className = {linkClasses}>
                <img src = "./tourino-logo.png" alt = "tourino log" width = {130} height = {40} />
            </Link>
        </>
    );
};

export default TourinoLogo;