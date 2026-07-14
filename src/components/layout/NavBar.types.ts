import { type Variants } from 'framer-motion'

export interface NavLinkItem {
  to: string
  label: string
}

export interface NavLinkClassProps {
  isActive: boolean
}

export type AnimationVariants = {
  sidebar: Variants
  overlay: Variants
  link: Variants
}