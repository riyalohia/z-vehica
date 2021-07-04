import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './style.css';

export const Layout = (props) => (
  <>
    <Nav />
    {props.children}
    <Footer />
  </>
);

export default Layout;
