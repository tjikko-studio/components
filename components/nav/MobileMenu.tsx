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
  styles = 'black',
  languageList = {}
}) => {
  return (
    <div
      className={`bg-gray-900 p-4`}
    >
      <div className='flex justify-between p-2'>
        <div className="dark">
          <Button
            text={demoButtonText}
            url={demoUrl}
            type="primary"
            icon='none'
          />
        </div>
        <NavItem
          styles='default/white'
          caption={
            languageList.current ? languageList.current : 'En'
          }
          submenu={languageList.submenu}
        />
      </div>
      <div className="dark">
        <Divider className="my-8" />
      </div>

      {menuData.map((menu, menuIndex) => {
        return (
          <div 
            className='dark p-2'
            key={menuIndex}>
            <div className='fontStyle-xl text-gray-50 mb-6'>
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
                <div>
                  <ListNav 
                    styles="flat"
                    linkList= {menu.submenu}
                  />
                </div>
              )}
            </div>
            {menuData.length - 1 > menuIndex && (
              <Divider className="my-8" />
            )}
          </div>
        )
      })}
      <div className='pb-20'></div>
    </div>
  )
}
