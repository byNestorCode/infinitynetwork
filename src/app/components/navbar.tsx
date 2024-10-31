"use client";

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Image from 'next/image';
import { ChevronDown } from "./Icons";
import { Accordion, AccordionItem } from "@nextui-org/react";

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
        <Navbar isBordered={true} isBlurred={true} onMenuOpenChange={setIsMenuOpen}>
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
                    <p className="hidden sm:block font-bold text-inherit">Infinity Network</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-3">
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
                            Pricing
                        </Link>
                    </NavbarItem>
                    <Dropdown>
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
                                base: "gap-4",
                            }}
                        >
                            <DropdownItem
                                key="autoscaling"
                                description="ACME scales apps to meet user demand, automagically, based on load."
                                startContent="{icons.scale}"
                            >
                                Autoscaling
                            </DropdownItem>
                            <DropdownItem
                                key="usage_metrics"
                                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                startContent="{icons.activity}"
                            >
                                Usage Metrics
                            </DropdownItem>
                            <DropdownItem
                                key="production_ready"
                                description="ACME runs on ACME, join us and others serving requests at web scale."
                                startContent="{icons.flash}"
                            >
                                Production Ready
                            </DropdownItem>
                            <DropdownItem
                                key="99_uptime"
                                description="Applications stay on the grid with high availability and high uptime guarantees."
                                startContent="{icons.server}"
                            >
                                +99% Uptime
                            </DropdownItem>
                            <DropdownItem
                                key="supreme_support"
                                description="Overcome any challenge with a supporting team ready to respond."
                                startContent="{icons.user}"
                            >
                                +Supreme Support
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
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
                {/* <Dropdown placement="bottom-end">
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
                </Dropdown> */}
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
                {/* <Switcher /> */}
            </NavbarContent>
        </Navbar>
    );
}