import React from 'react'
import {Button} from '@/components/ui/button'
import {FaFacebookF, FaInstagram, FaWhatsapp} from 'react-icons/fa'

const SocialButtons: React.FC = () => {
    return (
        <div className="flex space-x-2 h-full items-center">
            <Button variant="ghost"
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-100 dark:hover:bg-green-900 p-2 min-w-[48px] min-h-[48px]">
                <a href="https://wa.me/593989352037" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="min-w-[30px] min-h-[30px]"/>
                </a>
            </Button>
            <Button variant="ghost"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 p-2 min-w-[48px] min-h-[48px]">
                <a href="https://www.facebook.com/memoriarte.ecuador" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="min-w-[30px] min-h-[30px]"/>
                </a>
            </Button>
            <Button variant="ghost"
                    className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900 p-2 min-w-[48px] min-h-[48px]">
                <a href="https://www.instagram.com/memoriarte_ecuador/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="min-w-[30px] min-h-[30px]"/>
                </a>
            </Button>
        </div>
    )
}

export default SocialButtons

