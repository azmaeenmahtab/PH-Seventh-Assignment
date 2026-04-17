import instagramIcon from '../assets/socials/Instagram.png'
import facebookIcon from '../assets/socials/Facebook.png'
import xIcon from '../assets/socials/x.png'

function Footer() {
  const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookies', href: '#' },
  ]

  const socials = [
    { alt: 'Instagram', icon: instagramIcon, href: '#' },
    { alt: 'Facebook', icon: facebookIcon, href: '#' },
    { alt: 'X', icon: xIcon, href: '#' },
  ]

  return (
    <footer className="bg-[#1f5a49] px-4 py-10 text-white sm:px-6 sm:py-12">
      <div className="mx-auto max-w-280 text-center">
        <h2 className="text-4xl font-bold leading-none sm:text-5xl md:text-6xl">KeenKeeper</h2>
        <p className="mx-auto mt-4 max-w-165 text-[14px] text-white/80">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="mt-7 text-lg font-semibold sm:text-[20px]">Social Links</h3>
        <div className="mt-4 flex items-center justify-center gap-3">
          {socials.map((item) => (
            <a
              key={item.alt}
              href={item.href}
              aria-label={item.alt}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
            >
              <img src={item.icon} alt={item.alt} className="h-4 w-4 object-contain" />
            </a>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:pt-6">
          <p className="text-xs text-white/70">@ 2026 KeenKeeper. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70 sm:mt-0 sm:gap-6">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
