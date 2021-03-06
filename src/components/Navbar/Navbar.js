/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import NavbarItem from '../NavbarItem';

class Navbar {

  static propTypes = {
    items : PropTypes.array
  };

  render() {
    return (
      <div className="navbar-top" role="navigation">
        <div className="container">
            <a className="navbar-brand row" href="/">
              <span>ZDW</span>
              <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
            </a>
            <ul className="nav nav-pills">
              {this.props.items.map(function(item) {
                 return <NavbarItem {...item} key={item.title} />;
              })}
            </ul>
        </div>
      </div>
    );
  }

}

export default Navbar;
