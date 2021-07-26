import React, {FC, HTMLAttributes} from 'react'
import {SiteNavProps} from './SiteNav'
import {NavItem} from './NavItem'

/**
 * Primary UI component for user interaction
 */
export const MobileMenu: FC<SiteNavProps> = ({
  demoButtonText = 'Free Demo',
  demoUrl = '#',
  menuData = [],
  styles = 'black',
  languageList = {}
}) => {
  return (
    <div
      className={`bg-gray-900 ${styles === 'transWhite' && 'bg-opacity-10'}`}
    >
      <div className='flex justify-between p-5 p-6'>
        <div>
          <a
            href={demoUrl}
            className='py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold'
          >
            {demoButtonText}
          </a>
        </div>
        <NavItem
          className='mr-7'
          styles='default/white'
          caption={
            languageList.current ? languageList.current : 'En'
          }
          submenu={languageList.submenu}
        />
      </div>
      <hr className='mx-2 bg-opacity-10 mt-6 text-gray-400' />

      {menuData.map((menu, menuIndex) => {
        return (
          <div key={menuIndex}>
            <div className='font-borda uppercase text-gray-50 text-lg tracking-widest pl-6 pt-6 '>
              {menu.submenu == null ? (
                <a href={menu.captionLink}>{menu.caption}</a>
              ) : (
                menu.caption
              )}
            </div>
            <div>
              {menu.submenu === null ? (
                null
              ) : (
                <div className='grid grid-cols-2'>
                  {menu.submenu.map((group, groupIndex) => {
                    return (
                      <div key={groupIndex}>
                        {group.groupCaption && (
                          <div className='text-gray-100 font-semibold tracking-wider text-sm pl-6 pt-5'>
                            {group.groupCaption}
                          </div>
                        )}
                        {group.groups.map((item, itemIndex) => {
                          return (
                            <div
                              className='px-6 pt-5 text-gray-100'
                              key={itemIndex}
                            >
                              <a
                                className={item.type === 'button' ? 'text-brand-300 hover:text-brand-600' : ''}
                                href={item.url}
                              >
                                {item.name}
                              </a>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
            {menuData.length - 1 > menuIndex && (
              <hr className='mx-2 bg-opacity-10 mt-6 text-gray-400' />
            )}
          </div>
        )
      })}
      <div className='pb-20'></div>
    </div>
  )
}
