import React from 'react'
import { GenericButton } from '../customModal/GenericButton';
import { Moon } from 'lucide-react';
export default function Header({sidebar,setsidebar}:any) {
  return (
    <>
      {/* HEADER */}
      <header className="bg-white w-full shadow-md border-b border-gray-200 top-0 z-20">
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <div
              className="text-2xl font-bold flex items-center gap-2  text-gray-900"
            >
              <img
                  src="https://static.vecteezy.com/system/resources/previews/020/987/083/non_2x/user-icon-fake-photo-sign-profile-button-simple-style-social-media-poster-background-symbol-user-brand-logo-design-element-user-t-shirt-printing-for-sticker-free-vector.jpg"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
              Astrologer Admin Panel
            </div>
            <p className="text-sm text-gray-600">Manage your astrology team</p>
          </div>
          <GenericButton label='Dark mode' variant='ghost' icon={<Moon className='w-5 h-5'/>}/>
        </div>
      </header>
    </>
  );
}
