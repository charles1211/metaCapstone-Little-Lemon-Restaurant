import { Heading, Image } from '@chakra-ui/react';
import React, { createElement } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import socialMedia from './socialmedia';
import navigation from './navigation';

export const SocialMediaWidget = () => {
  return (
    <section id='SocialMediaWidget'>
      <ul role='navigation'>
        {socialMedia.map(({ id, name, href, title, icon }) => {
          return (
            <a key={id} href={href} target='_blank' rel='noreferrer noopener' title={title}>
              <li role='button'>
                <Image className='SocialIcon' src={icon} alt={name} />
              </li>
            </a>
          );
        })}
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer aria-label='Footer Section' className='footer' role='region'>
      <div className='FooterLogo'>
        <Image className='logo' src='../../littleLemonLogo.png' alt='Logo' />
      </div>
      <section className='FooterMenu'>
        <Heading tag='h4' size='base'>
          Menu
        </Heading>
        <nav className='FooterNavigation'>
          <ul role='MenuLink'>
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps = Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps}>
                  {title}
                </Element>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className='FooterContact'>
        <Heading tag='h4' size='base'>
          Contact
        </Heading>
        <article>
          <p>Lempira Street Meralco Village San Juan Taytay, Rizal</p>
          <p>02 8596-96-74</p>
          <p>littleLemon@gmail.com</p>
        </article>
      </section>

      <section className='FooterSocial'>
        <Heading tag='h4' size='base'>
          Social Media
        </Heading>
        <nav className='FooterNavigation'>
          <SocialMediaWidget />
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
