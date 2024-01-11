import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    title: string,
    classname?: string
}

export default function PageTitle({title,classname}: Props) {
  return (
    // cn is a utility function that we created in src/lib/utils.ts
    // it's a simple function that conditionally concats strings
    // so that we can conditionally add classes to our elements
    // based on the props passed to them
    <h1 className={cn('text-2xl font-semibold', classname)}>
        {title}
    </h1>
  )
}