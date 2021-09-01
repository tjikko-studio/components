import React, { FC, HTMLAttributes } from 'react'

import getComponent from '../../utilities/getComponent'
import getWidth from '../../utilities/getWidth'

export interface BlockProps {
  type: string
  content: any
}

export interface ColumnProps {
  width: string
  blocks: BlockProps[]
}

export interface TemplateItemProps {
  columns: ColumnProps[]
}

export interface TemplateProps extends HTMLAttributes<HTMLElement> {
  /**
   * Sections object that will be parsed through to build the component
   */
  fetchedContent?: TemplateItemProps[]
  content?: TemplateItemProps[]
}

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  content = null,
  fetchedContent = null
}) => {
  return (
    <div>
      {
        !fetchedContent ? <div>No template yet</div> : (
          fetchedContent.map(({columns}) => (
            <section key={JSON.stringify(columns)} className="sm:grid sm:grid-cols-12">
              {
                columns.map(({
                  width,
                  blocks
                }) => (
                  <div key={JSON.stringify(blocks)} className={`col-span-${getWidth(width)}`}>
                    {
                      blocks.map(getComponent)
                    }
                  </div>
                ))
              }
            </section>
          ))
        )
      }
    </div>
  );
}
