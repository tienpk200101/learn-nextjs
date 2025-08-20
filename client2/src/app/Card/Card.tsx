'use client'
import { useState } from 'react';
import './card.css'
import customModule from './card.module.css'
import clsx from 'clsx'

export default function Card() {
    const [expanding, ] = useState(false);
  return (
    <div className={clsx('card', {
        [customModule.card]: expanding
    })}>Card</div>
  )
}
