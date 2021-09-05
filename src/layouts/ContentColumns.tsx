import React, { FC, HTMLAttributes, CSSProperties } from 'react';

import getComponent from '../../utilities/getComponent';
import getWidth from '../../utilities/getWidth';
import containVal from '../../utilities/containVal';
import { ColumnProps, ContentPosition } from '../../shared/types';
import extractCombo from '../../utilities/stringUtils';

interface SectionItemProps {
    columns: ColumnProps[]
}

export interface ContentColumnsProps extends HTMLAttributes<HTMLElement> {
    /**
     * Sections object that will be parsed through to build the component
     */
    content: SectionItemProps[]

    /**
     * Content Position
     */
    contentPosition?: ContentPosition

    /**
     * Rendered components extra props that changes the styles
     */
    componentsExtraProps?: Record<string, Function>

    /**
     * Custom classes for section
     */
    contentSectionClasses?: string

    /**
     * Custom styles for section
     */
    contentSectionStyles?: CSSProperties

    /**
     * Custom classes for columns
     */
    columnClasses?: string

    /**
     * Custom styles for columns
     */
    columnStyles?: CSSProperties
}

export const ContentColumns: FC<ContentColumnsProps> = ({
    content,
    contentPosition = 'center|center',
    componentsExtraProps = {},
    contentSectionClasses = 'gap-y-8 sm:gap-y-12 md:gap-y-24 sm:gap-x-12 md:gap-x-16 w-full h-full',
    contentSectionStyles = {},
    columnClasses = 'flex flex-col space-y-8 h-full',
    columnStyles = {},
}) => {
    const [verAlign, horAlign] = extractCombo(contentPosition)
    // See the tailwind hacks in src/index.tsx
    const align = (horAlign && verAlign) ? `justify-${horAlign} items-${verAlign}` : '';
    return (
        <>
            {
                content.map(({ columns }) => {
                    const headerClass = content.length >= 2 && containVal(columns[0].blocks, 'type', ['Heading', 'Text']) ? 'mb-4 sm: mb-8' : ''
                    return (
                        <section
                            key={JSON.stringify(columns)}
                            className={`grid sm:grid-cols-12 ${contentSectionClasses}`}
                            style={{ ...contentSectionStyles }}
                        >
                            {
                                columns.map(({
                                    width,
                                    blocks
                                }) => (
                                    // See the tailwind hacks in src/index.tsx
                                    <div
                                        key={JSON.stringify(blocks)}
                                        className={`col-span-${getWidth(width)} ${align} ${headerClass} ${columnClasses}`}
                                        style={{ ...columnStyles }}
                                    >
                                        {
                                            blocks.map((block) => {
                                                return getComponent(block, {
                                                    ...componentsExtraProps
                                                })
                                            })
                                        }
                                    </div>
                                ))
                            }
                        </section>
                    )
                })
            }
        </>
    )
}
