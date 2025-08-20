import { ModeToggle } from '@/components/toggle-theme'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
        <ul>
            <li>
                <Link href='/login'>Login</Link>
            </li>
             <li>
                <Link href='/register'>Register</Link>
            </li>
        </ul>
      <ModeToggle />
    </div>
  )
}
