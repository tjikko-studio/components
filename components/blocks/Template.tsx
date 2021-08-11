import React, { FC, HTMLAttributes } from 'react'
/* import kirbyApiCall from './apiCall' */

export interface TemplateProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * text to show as question
   */
   slug?: string
   locale?: string

  /**
   * Additional space-separated class names to append
   */
  className?: string
}

type KirbyApiResponse = {
  code: number,
  data: any,
  status: string,
  type: string
}

/* async function kirbyApiCall (slug: string, locale: string = ''): Promise<KirbyApiResponse> {
  const path = `${process.env.KIRBY_API_URL}/${slug}`
  const access =  btoa(process.env.KIRBY_API_EMAIL + ':' + process.env.KIRBY_API_PASSWORD)

  const res = await fetch(path, {
    headers: {
      'Authorization': `Basic ${access}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Language': locale
    }
  })
  return res.json()
} 

const getContent = async (slug: string, locale: string = '') => {
  const a = await kirbyApiCall(slug, locale);
  console.log(a.data.content.content);
}; */

/**
 * Primary UI component for user interaction
 */
export const Template: FC<TemplateProps> = ({
  slug,
  locale,
  className
}) => {
  return (
    <div>
      Template
    </div>
  )
}
