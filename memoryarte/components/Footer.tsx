import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Контакты</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="https://www.facebook.com/memoriarte.ecuador" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                    <FaFacebookF className="mr-2" /> Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/593989352037" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                    <FaWhatsapp className="mr-2" /> WhatsApp
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/memoriarte_ecuador/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                    <FaInstagram className="mr-2" /> Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:stanyslavrykhlikov@gmail.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                    <MdEmail className="mr-2" /> stanyslavrykhlikov@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Местоположение</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">Cuenca, Ecuador</p>
                        <Link
                            href="https://maps.app.goo.gl/wBKeKBeJpdDkrErD7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        >
                            <MdLocationOn className="mr-2" /> Открыть в Google Maps
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Банковские реквизиты</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Banco Guayaquil<br />
                            Corriente # 0046077482<br />
                            Stanislav Rykhlikov<br />
                            STANYSLAVRYKHLIKOV@GMAIL.COM<br />
                            CI:1354150227
                        </p>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Внимание: Мы принимаем платежи только на указанные выше реквизиты.
                            Остерегайтесь мошенников, использующих другие банковские данные.
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MemoriArte. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

