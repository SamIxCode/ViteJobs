import React from 'react'

export const Navbar = () => {
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] text-greenColor'>
                    <strong>Vite</strong>Jobs
                </h1>
            </div>
            <div className='menu flex gap-8'>
                <li className="menuList text-textColor hover:text-greenColor">Jobs </li>
                <li className="menuList text-textColor hover:text-greenColor">Companies </li>
                <li className="menuList text-textColor hover:text-greenColor">About </li>
                <li className="menuList text-textColor hover:text-greenColor">Contact</li>
                <li className="menuList text-textColor hover:text-greenColor">Register </li>
                <li className="menuList text-textColor hover:text-greenColor">Login </li>
            </div>
        </div>
    )
}
