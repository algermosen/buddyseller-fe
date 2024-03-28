// import { useState } from "react"
import { Outlet, useLocation, matchPath } from "react-router-dom"
// import PropTypes from "prop-types"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { Link } from "../components"
import BuddySellerLogo from "../components/BuddySellerLogo"
import SIDENAV_ITEMS from '../constants/side-nav-items';

import { useTranslation } from "react-i18next"

function AppLayout() {

    const { t } = useTranslation();
    const location = useLocation();

    return (
        <main className="grid grid-cols-12 grid-rows-applayout">
            <Navbar isBordered
                position="static"
                classNames={{
                    base: "border-r border-divider bg-white col-span-3 row-span-2",
                    wrapper: "h-screen flex-col p-0 py-6",
                    brand: "grow-0",
                    content: "flex-col grow w-full items-start gap-0",
                    item: "inline-block px-3 py-2 w-full"
                }}>
                <NavbarBrand>
                    <BuddySellerLogo />
                </NavbarBrand>

                <NavbarContent>
                    {SIDENAV_ITEMS.map(navItem => {
                        const isActive = matchPath(navItem.path, location.pathname)
                        const itemColor = isActive ? "primery" : "foreground";
                        return (
                            <NavbarItem className="hover:border-r-8 border-primary rounded-sm transition-all hover:bg-slate-100" key={navItem.localeKey} isActive={matchPath(navItem.path, location.pathname)}>
                                <Link className="block" color={itemColor} to={navItem.path}>
                                    {t(navItem.localeKey)}
                                </Link>
                            </NavbarItem>
                        )
                    })}
                </NavbarContent>
            </Navbar>
            <Navbar isBordered
                position="static"
                classNames={{
                    base: "border-b border-divider bg-white col-span-9 ",
                }}>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Link color="foreground" href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">Signup</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <section className="p-5 col-span-9">
                <Outlet />
            </section>
        </main>
    )
}

export default AppLayout