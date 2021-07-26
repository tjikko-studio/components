import React, {FC, HTMLAttributes, useState} from 'react'
import {useMediaPredicate} from "react-media-hook"
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Logo} from '../svg/Logo'
import {NavItem} from './NavItem'
import {MobileMenu} from './MobileMenu'
import {MenuType} from './ListNav'

export interface LanguageType {
  current?: string | null
  submenu?: Array<MenuType>
}
export interface MenuItemType {
  caption: string
  captionLink?: string
  submenu?: Array<MenuType>
}

export interface SiteNavProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * menu json data same as NavItem
   */
  menuData: Array<MenuItemType>
  /**
   * demo button text
   */
  demoButtonText?: string
  /**
   * url to go when click demo button
   */
  demoUrl?: string
  /**
   * language list
   */
  languageList?: LanguageType
  /**
   * nav background color style
   */
  styles: "black" | "transWhite"
  /**
   * Additional space-separated class names to append
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SiteNav: FC<SiteNavProps> = ({
  demoButtonText = "Free Demo",
  demoUrl = "#",
  menuData = [],
  styles = "black",
  languageList = {},
  className
}) => {
  const [mobileExpand, setMobileExpand] = useState(false)
  const large = useMediaPredicate("(min-width: 1024px)")
  const medium = useMediaPredicate("(max-width: 1023px)")
  const mobile = useMediaPredicate("(max-width: 640px)")
  return (
    <>
      <div
        className={`bg-gray-900 flex items-center justify-between md:justify-Start
                ${(styles === "transWhite") && "bg-opacity-10"}
                ${className}
            `}
      >
        <p className="fontStyle-xl">Hello</p>
        <div
          className="pt-6 pb-7 lg:pt-10 lg:pb-9 lg:pl-10 sm:pl-6 pl-6 md:py-8 sm:pt-6 sm:pb-7"
        >
          <Logo
            width={large ? "269" : medium ? "215" : mobile ? "161" : "269"}
            height={large ? "20" : medium ? "16" : mobile ? "12" : "20"}
          />
        </div>
        <div
          className="hidden md:flex m-auto items-center"
        >
          {
            menuData.map((menuitem, index) => {
              return (
                <NavItem
                  key={index}
                  link={menuitem.captionLink ? menuitem.captionLink : ""}
                  styles="default/white"
                  caption={menuitem.caption}
                  submenu={menuitem.submenu}
                  className="mr-9"
                />
              )
            })
          }
        </div>
        <div
          className="hidden md:flex items-center"
        >
          <a
            href={demoUrl}
            className="py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
          >
            {demoButtonText}
          </a>
          <NavItem
            className='pl-6 lg:mr-11 sm:mr-9'
            styles="default/white"
            caption={languageList.current ? languageList.current : "En"}
            submenu={languageList.submenu}
          />
        </div>
        <Disclosure as="nav"
          className="bg-transparent"
        >
          <div className="md:hidden mr-4">
            <button
              className="bg-transparent inline-flex items-center justify-center"
              onClick={() => setMobileExpand(!mobileExpand)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileExpand ? (
                <XIcon
                  className="text-gray-300 w-5 h-5"
                />
              ) : (
                <MenuIcon
                  className={`h-5 w-5
                                    ${styles === "black" && "text-gray-300"}
                                    ${styles === "transWhite" && "text-gray-300"}
                                `}
                />
              )}
            </button>
          </div>
        </Disclosure>
      </div>
      {mobileExpand ? (
        <MobileMenu
          demoButtonText={demoButtonText}
          demoUrl={demoUrl}
          menuData={menuData}
          styles={styles}
          languageList={languageList}
        />
      ) : ''}
    </>
  )
}
