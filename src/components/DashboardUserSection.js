import React from 'react';

const DashboardUserSection = ({ user }) => {
    return (
        <>
            <div className = 'flex justify-start items-center gap-5' style = {{ wordSpacing : '2px' }}>
                <div className = 'rounded-full flex justify-center items-center text-3xl bg-lime-100 w-20 h-20'>
                    <p className = 'font-bold text-green-500'>{ user ? user?.fullname ? user?.fullname[0] : 'g' : '0' }</p>
                </div>

                <div>
                    <p className = 'text-lg mb-1'>{ user ? user?.fullname : 'guest' }</p>

                    <p className = 'text-neutral-400'>{ user?.mobile }</p>
                </div>
            </div>
        </>
    );
};

export default DashboardUserSection;