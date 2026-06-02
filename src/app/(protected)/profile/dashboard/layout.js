import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
    title : 'داشبورد'
}

const getUser = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    if(!accessToken) redirect('/');

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile` , {
        headers : {
            "Content-Type": "application/json",
            'Authorization' : `Bearer ${accessToken}`,
        },
        cache : 'no-store'
    })

    if(res.status === 401) redirect('/');
    if(!res.ok) throw new Error('failed to fetch user profile')
    
    return res.json()
}

const layout = async ({ children }) => {
    const user = await getUser();

    const isProfileComplete = !!user?.fullname && !!user?.nationalCode && !!user?.email;

    if( !isProfileComplete ){
        redirect('/profile/account')
    }
    
    return (
        <>
            <div className = "rounded-xl p-10 bg-neutral-50/70 max-[400px]:p-7">
                { children }
            </div>
        </>
    );
};

export default layout;