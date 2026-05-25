// src/data/contactData.js
import { Mail, Linkedin, Github, Instagram } from 'lucide-react'

export const socialLinks = [
  {
    id: 'email',
    name: 'Email',
    desc: 'Fast Response',
    icon: Mail,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=pratamabevan@gmail.com',
    hoverColor: 'group-hover:text-red-500',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    desc: 'Professional Network',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/pratamabevan/', // Ganti dengan link kamu
    hoverColor: 'group-hover:text-blue-500',
  },
  {
    id: 'github',
    name: 'GitHub',
    desc: 'Code Repositories',
    icon: Github,
    url: 'https://github.com/prtmbvn', // Ganti dengan link kamu
    hoverColor: 'group-hover:text-gray-900 dark:group-hover:text-white',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    desc: 'Personal Life',
    icon: Instagram,
    url: 'https://www.instagram.com/bevaaann/', // Ganti dengan link kamu
    hoverColor: 'group-hover:text-pink-500',
  },
]
