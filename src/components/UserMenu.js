'use client';
import Link from 'next/link';
import { useAuth } from '@/provider/AuthProvider';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { LogOutIcon, UserIcon } from 'lucide-react';
import { CaretDownIcon, CirclesFourIcon } from '@phosphor-icons/react';

const UserMenu = () => {
    const { isAuthenticated , logout , user } = useAuth();
    return (
        <div>
            <DropdownMenu dir = 'rtl'>
                <DropdownMenuTrigger asChild>
                    <button className = 'text-green-600 p-2 px-3 rounded-lg text-[15px] outline-none flex justify-between items-center gap-1'>
                        <UserIcon width = {18}/>
                        <span>{user?.mobile}</span>
                        <CaretDownIcon weight = 'regular' size = {18} className = '-translate-y-0.5'/>
                    </button>
                </DropdownMenuTrigger>
                    
                <DropdownMenuContent className = 'rounded-xl shadow-[0_5px_10px_rgba(0,0,0,0.03)] bg-white/45 backdrop-blur-md p-2 mx-3'>
                    <DropdownMenuItem className = 'p-0'>
                        <Link href = '/profile/dashboard' className = 'px-2 py-1.5 gap-2 w-full flex justify-start items-center rounded-lg border border-transparent hover:border-white/55 hover:bg-gradient-to-r hover:from-neutral-100/60 hover:to-white/50 hover:shadow-[0_5px_10px_rgba(0,0,0,0.03)] transition-all'>
                            <span className = 'w-[26px] flex justify-center items-center'>
                                <CirclesFourIcon weight = "regular" size = {18}/>
                            </span>
                            داشبورد
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className = 'p-0'>
                        <Link href = '/profile/account' className = 'px-2 py-1.5 gap-2 w-full flex justify-start items-center rounded-lg border border-transparent hover:border-white/55 hover:bg-gradient-to-r hover:from-neutral-100/60 hover:to-white/50 hover:shadow-[0_5px_10px_rgba(0,0,0,0.03)] transition-all'>
                            <span className = 'w-[26px] flex justify-center items-center'>
                                <UserIcon width = {16}/>
                            </span>
                            اطلاعات حساب کاربری
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator className = 'bg-neutral-200'/>
                    
                    <DropdownMenuItem className = 'p-0'>
                        <button onClick = {() => logout()} className = 'px-2 py-1.5 gap-2 w-full flex justify-start text-red-500 items-center rounded-lg border border-transparent hover:border-white/40 hover:bg-red-500/20 hover:shadow-[0_5px_10px_rgba(0,0,0,0.03)] transition-all'>
                            <span className = 'w-[26px] flex justify-center items-center'>
                                <LogOutIcon width = {18}/>
                            </span>
                            خروج
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default UserMenu;