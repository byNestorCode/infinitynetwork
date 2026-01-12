"use client";

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Image from 'next/image';
import { ChevronDown } from "./Icons";
import { Accordion, AccordionItem } from "@nextui-org/react";
import localFont from "next/font/local";

const moonhouse = localFont({
    src: '/../fonts/moonhouse.ttf',
    variable: '--font-moonhouse',
});

const quango = localFont({
    src: '/../fonts/Quango.otf',
    variable: '--font-quango',
});

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "About",
        "Pricing",
        "Fundation",
    ];

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
    };

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Navbar isBordered={false} isBlurred={true} onMenuOpenChange={setIsMenuOpen} maxWidth="2xl">
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="mr-4">
                    <Image
                        src="/images/infinity/square_logo.svg"
                        alt="hero image"
                        width={50}
                        height={50}
                        className="mr-4"
                    />
                    <p className={`${moonhouse.variable} hidden sm:block font-bold text-inherit tracking-[0.25em] uppercase`} style={{ fontFamily: 'var(--font-moonhouse)'}}>Infinity Fundation</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-5">
                    <NavbarItem isActive>
                        <Link color="secondary" href="#">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" aria-current="page" color="foreground">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" aria-current="page" color="foreground">
                            Contact
                        </Link>
                    </NavbarItem>
                    <Dropdown className="bg-gray-800 bg-opacity-85">
                        <NavbarItem>
                            <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                                        endContent={icons.chevron}
                                        radius="sm"
                                        variant="light"
                                    >
                                        Fundation
                                    </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="ACME features"
                            className="w-[340px] bg-transparent"
                            itemClasses={{
                                base: "gap-4 text-white data-[hover=true]:bg-gradient-to-br data-[hover=true]:from-blue-500 data-[hover=true]:via-purple-500 data-[hover=true]:to-pink-500 data-[hover=true]:text-white",
                            }}
                        >
                            <DropdownItem
                                key="Woman"
                                description="Powerful woman in technology."
                                startContent="{icons.scale}"
                            >
                                Woman
                            </DropdownItem>
                            <DropdownItem
                                key="weekend"
                                description="3 days of science and fun!"
                                startContent="{icons.activity}"
                            >
                                Weekend
                            </DropdownItem>
                            <DropdownItem
                                key="production_ready"
                                description="an out-of-orbit camp full of unique experiences "
                                startContent="{icons.flash}"
                            >
                                Camp
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem>
                        <Link href="#" aria-current="page" color="foreground">
                            🧪Labs
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
                </NavbarContent>
            </NavbarContent>

            {/* <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="/images/infinity/square_logo.svg"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Switcher />
            </NavbarContent> */}
            <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                            { index === 3 ? (
                                <Accordion variant="splitted">
                                    <AccordionItem className="bg-purple-500 bg-opacity-30" key="1" aria-label="Fundation" title={<div style={{ textAlign: 'center', color: '' }}>♾️Foundation</div>}>
                                        {defaultContent}
                                    </AccordionItem>
                                </Accordion>
                            ): null }
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
        </Navbar>
    );
}