import React from 'react';
import UserIconComponent from './icons/userIcon';

const DashboardUserSection = ({ user }) => {
    const { fullname , mobile } = user;
    return (
        <>
            <div className = 'flex justify-start items-center gap-5' style = {{ wordSpacing : '2px' }}>
                <div className = 'rounded-full flex justify-center items-center text-3xl bg-lime-100 w-20 h-20'>
                    <p className = 'font-bold text-green-500'>{ fullname[0] }</p>
                </div>

                <div>
                    <p className = 'text-lg mb-1'>{ fullname }</p>

                    <p className = 'text-neutral-400'>{ mobile }</p>
                </div>
            </div>
        </>
    );
};

export default DashboardUserSection;