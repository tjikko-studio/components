import React, {FC, HTMLAttributes} from 'react'
import {SiteNavProps} from './SiteNav'
import {NavItem} from './NavItem'
import {Divider} from './Divider'
import {Button} from '../Button'
import {ListNav} from './ListNav'

/**
 * Primary UI component for user interaction
 */
export const MobileMenu: FC<SiteNavProps> = ({
  demoButtonText = 'Free Demo',
  demoUrl = '#',
  menuData = [],
  languageList = {}
}) => {
  return (
    <div
      className={`bg-gray-900 p-4`}
    >
      <div className='flex justify-between p-2'>
        <div className='dark'>
          <Button
            text={demoButtonText}
            url={demoUrl}
            type='primary'
            icon='none'
          />
        </div>
        <NavItem
          styles='default/white'
          caption={
            languageList.current ? languageList.current : 'En'
          }
          subMenu={languageList.subMenu}
        />
      </div>
      <div className='dark'>
        <Divider className='my-8' />
      </div>

      {menuData.map((menu, menuIndex) => {
        const hasSubMenu = menu.subMenu && menu.subMenu.length > 0
        return (
          <div
            className='dark p-2'
            key={menuIndex}>
            <div className='fontStyle-xl text-gray-50 mb-6'>
              {!hasSubMenu ? (
                <a href={menu.captionLink}>{menu.caption}</a>
              ) : (
                menu.caption
              )}
            </div>
            <div>
              {!hasSubMenu ? (
                null
              ) : (
                <div>
                  <ListNav
                    styles='flat'
                    linkList={menu.subMenu}
                  />
                </div>
              )}
            </div>
            {menuData.length - 1 > menuIndex && (
              <Divider className='my-8' />
            )}
          </div>
        )
      })}
      <div className='pb-20'></div>
    </div>
  )
}
