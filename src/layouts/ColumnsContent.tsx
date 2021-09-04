import React, { FC, HTMLAttributes } from 'react';

import getComponent from '../../utilities/getComponent';
import getWidth from '../../utilities/getWidth';
import containVal from '../../utilities/containVal';
import { ColumnProps, ContentPosition } from '../../shared/types';
import { extractCombo } from '../../utilities/stringUtils';

interface SectionItemProps {
    columns: ColumnProps[]
}

export interface ColumnsContentProps extends HTMLAttributes<HTMLElement> {
    /**
     * Content Position
     */
    contentPosition?: ContentPosition

    /**
     * Sections object that will be parsed through to build the component
     */
    content: SectionItemProps[]

    /**
     * Rendered components extra props that changes the styles
     */
    componentsExtraProps?: Record<string, Function>
}

export const ColumnsContent: FC<ColumnsContentProps> = ({
    contentPosition = 'center|center',
    content,
    componentsExtraProps = {},
}) => {
    const [verAlign, horAlign] = extractCombo(contentPosition)
    // See the tailwind hacks in src/index.tsx
    const align = (horAlign && verAlign) ? `justify-${horAlign} items-${verAlign}` : ''
    return (
        <>
            {
                content.map(({ columns }) => {
                    const headerClass = content.length >= 2 && containVal(columns[0].blocks, 'type', ['Heading', 'Text']) ? 'mb-4 sm: mb-8' : ''
                    return (
                        <section key={JSON.stringify(columns)} className='grid sm:grid-cols-12 gap-y-8 sm:gap-y-12 md:gap-y-24 sm:gap-x-12 md:gap-x-16 w-full h-full'>
                            {
                                columns.map(({
                                    width,
                                    blocks
                                }) => (
                                    // See the tailwind hacks in src/index.tsx
                                    <div key={JSON.stringify(blocks)} className={`col-span-${getWidth(width)} flex flex-col ${align} space-y-8 h-full ${headerClass}`}>
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
