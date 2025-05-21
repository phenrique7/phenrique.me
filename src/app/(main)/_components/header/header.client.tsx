"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ToggleButton } from "react-aria-components";
import { useEffect, useState, useRef } from "react";
import { css } from "@/panda/css";
import type { MediaData } from "@/types/basehub";
import { flex, hstack, vstack } from "@/panda/patterns";
import { ThemeToggle } from "@/app/(main)/_components/header/theme-toggle";

type NavLink = {
  _title: string;
  label: string;
  path: string;
  icon: string | null;
};

type NavLinks = {
  items: NavLink[];
};

type CHeaderProps = {
  avatar: MediaData;
  navLinks: NavLinks;
};

export function CHeader(props: CHeaderProps) {
  const lastScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    function handleScroll() {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

        if (currentScrollY > lastScrollY.current && scrollDifference > 100) {
          setIsHeaderVisible(false);
          if (isMenuOpen) {
            setIsMenuOpen(false);
          }
        } else if (scrollDifference > 100) {
          setIsHeaderVisible(true);
        }

        lastScrollY.current = currentScrollY;
      }, 50); // Small debounce for better performance
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={flex({
        top: 4,
        zIndex: 2,
        width: "100%",
        position: "fixed",
        transition: "transform 0.3s ease",
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-4.5rem)",
      })}
    >
      <header className={css({ w: "full", px: { base: 4, md: 0 } })}>
        <motion.div
          variants={{
            open: { height: "auto", borderRadius: "1.875rem" },
            closed: { height: "3.5rem", borderRadius: "2rem" },
          }}
          initial="closed"
          transition={{ duration: 0.3 }}
          style={{ backdropFilter: "blur(8px)" }}
          animate={isMenuOpen ? "open" : "closed"}
          className={vstack({
            mx: "auto",
            overflow: "hidden",
            alignItems: "stretch",
            bgColor: "clr_neutral_100_950",
            w: { base: "full", md: "fit-content" },
            border: "1px solid token(colors.clr_neutral_300_700)",
          })}
        >
          <motion.div
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { paddingTop: "16px", paddingInline: "18px" },
              closed: { paddingTop: "7px", paddingInline: "12px" },
            }}
            className={flex({ alignItems: "center" })}
          >
            <div className={hstack({ gap: 6 })}>
              <Link
                href="/"
                className={css({
                  h: 10,
                  w: 10,
                  borderRadius: "full",
                  border: "2px solid token(colors.clr_coral_flame)",
                })}
              >
                <Image
                  priority
                  src={props.avatar.url}
                  width={props.avatar.width}
                  height={props.avatar.height}
                  alt={props.avatar.alt ?? "Avatar"}
                  className={css({
                    border: "1px solid",
                    borderRadius: "full",
                    borderColor: "neutral.900",
                  })}
                />
              </Link>
              <div
                className={css({
                  height: 5,
                  width: "1px",
                  hideBelow: "md",
                  bgColor: "clr_neutral_300_700",
                })}
              />
            </div>
            <nav className={hstack({ gap: 4, fontSize: "sm", px: 5, hideBelow: "md" })}>
              {props.navLinks.items.map((link, index) => (
                <Link
                  key={link._title}
                  href={link.path}
                  className={css({
                    p: 1.5,
                    position: "relative",
                    fontWeight: "medium",
                    color: "clr_neutral_800_200",
                    transition: "color 0.15s ease-in-out",
                    _hover: { color: "clr_coral_flame" },
                  })}
                >
                  {link.label}
                  {index === 0 ? (
                    <span
                      className={css({
                        left: 0,
                        right: 0,
                        height: "1px",
                        bottom: "-11px",
                        bgGradient: "to-r",
                        position: "absolute",
                        gradientFrom: "red.400/0",
                        gradientVia: "red.400/40",
                        gradientTo: "red.400/0",
                      })}
                    />
                  ) : null}
                </Link>
              ))}
            </nav>
            <div className={flex({ hideFrom: "md", flex: 1, justifyContent: "flex-end" })}>
              <ToggleButton
                isSelected={isMenuOpen}
                onChange={setIsMenuOpen}
                aria-label="Menu"
                className={vstack({
                  width: 10,
                  height: 10,
                  borderRadius: "full",
                  border: "1px dashed",
                  borderColor: "clr_neutral_300_700",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                })}
              >
                <motion.span
                  transition={{ duration: 0.2 }}
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 0 : -4 }}
                  className={css({
                    width: 5,
                    height: "1px",
                    position: "absolute",
                    bg: "clr_neutral_950_snow",
                  })}
                />
                <motion.span
                  transition={{ duration: 0.2 }}
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? 0 : 4 }}
                  className={css({
                    width: 5,
                    height: "1px",
                    position: "absolute",
                    bg: "clr_neutral_950_snow",
                  })}
                />
              </ToggleButton>
            </div>
            <div className={hstack({ gap: 6, hideBelow: "md" })}>
              <div
                className={css({
                  height: 5,
                  width: "1px",
                  bgColor: "clr_neutral_300_700",
                })}
              />
              <ThemeToggle />
            </div>
          </motion.div>
          <AnimatePresence>
            {isMenuOpen ? (
              <motion.div
                exit={{ height: 0 }}
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
                className={css({ hideFrom: "md", pb: 4 })}
              >
                <motion.nav
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className={css({
                    my: 4,
                    gap: 3,
                    px: "1rem",
                    display: "grid",
                    overflow: "hidden",
                    flexDirection: "column",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  })}
                >
                  {props.navLinks.items.map((link) => (
                    <Link
                      key={link._title}
                      href={link.path}
                      className={hstack({
                        p: 1.5,
                        fontSize: "sm",
                        position: "relative",
                        fontWeight: "medium",
                        color: "clr_neutral_800_200",
                        transition: "color 0.15s ease-in-out",
                        _hover: { color: "clr_coral_flame" },
                      })}
                    >
                      <span dangerouslySetInnerHTML={{ __html: link.icon! }} />
                      {link.label}
                    </Link>
                  ))}
                </motion.nav>
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className={flex({ justifyContent: "center", pt: 5 })}
                >
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </header>
    </div>
  );
}
