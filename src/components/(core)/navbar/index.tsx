import React from "react";
import style from "./style.module.scss";
import NavbarBasketButtonComponent from "./navbar-basket-button/navbar-basket-button";
import { fetchParams } from "@/utils/fetch-params";
import JsonPreview from "../JsonPreview";
import Link from "next/link";

type Props = {
  siteName: string;
};

export default async function Navbar({ siteName }: Props) {
  const param = await fetchParams();

  return (
    <>
      <nav
        className={` ${style.main} navbar navbar-expand-lg navbar-primary bg-secondary `}
      >
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='navbar-brand mt-2 mt-lg-0'>
              <Link href='/'>
                <h2 style={{ color: "red" }}>{param[1][0].NAME}</h2>
              </Link>
            </div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <NavbarBasketButtonComponent />
                </a>
              </li>
            </ul>
          </div>
          <div className='d-flex align-items-center'>
            <a className='text-reset me-3' href='#'>
              <i className='fas fa-shopping-cart'></i>
            </a>

            <div className='dropdown'>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a className='dropdown-item' href='#'>
                    Some news
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another news
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
