'use client';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { LogOutIcon, UserIcon } from 'lucide-react';

const UserMenu = () => {

    return (
        <div>
            
            <DropdownMenu dir = 'rtl'>
                <DropdownMenuTrigger asChild>
                    <button className = 'text-green-600 border p-2 px-3 rounded-lg text-[15px] outline-none flex justify-between items-center gap-1'>
                        <UserIcon width = {18}/>
                        <span>09109919520</span>
                    </button>
                </DropdownMenuTrigger>
                    
                <DropdownMenuContent className = 'rounded-2xl p-1.5'>
                    <DropdownMenuItem className = 'p-0'>
                        <Link href = '/profile' className = 'px-2 py-1.5 gap-2 w-full flex justify-start items-center'>
                            <span className = 'border w-[26px] h-[26px] text-neutral-600 flex justify-center items-center rounded-full'>
                                <UserIcon width = {16}/>
                            </span>
                            پروفایل
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className = 'p-0'>
                        <Link href = '/' className = 'px-2 py-1.5 gap-2 w-full flex justify-start items-center'>
                            <span className = 'w-[26px] flex justify-center items-center'>
                                <UserIcon width = {16}/>
                            </span>
                            اطلاعات حساب کاربری
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator/>
                    
                    <DropdownMenuItem className = 'p-0'>
                        <Link href = '' className = 'px-2 py-1.5 gap-2 w-full flex justify-start text-red-500 items-center'>
                            <span className = 'w-[26px] flex justify-center items-center'>
                                <LogOutIcon width = {18}/>
                            </span>
                            خروج
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default UserMenu;