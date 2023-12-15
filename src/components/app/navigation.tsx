import Link from "next/link";
import Image from "next/image";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { basicExamples } from "@/data/routes";
import { HStack, Stack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";
import { flex, hstack, stack } from "@/styled-system/patterns";
import { ModeToggle } from "@/components/app/mode_toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation_menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const SIDEBAR_WIDTH = "256px";

export default function Navigation() {
  return (
    <div
      className={hstack({
        borderBottomWidth: { base: "0", md: "0" },
        borderTopWidth: { base: "1px", md: "0" },
        py: "8px",
        shadow: { _light: "lg", _dark: "none" },
        zIndex: "10",
        bg: "pink.100",
        borderColor: { _light: "stone.200", _dark: "stone.300" },
        _dark: {
          bg: "stone.950",
          borderColor: "black",
          borderBottomWidth: "0",
        },
      })}
    >
      <div
        className={hstack({
          w: SIDEBAR_WIDTH,
          px: "8px",
        })}
      >
        <Image
          alt="Arbitrum Stylus logo"
          width={32}
          height={32}
          src="/stylus_logo_mark.svg"
        />
        <h2
          className={css({
            fontSize: { base: "xl", md: "2xl" },
            fontFamily: "heading",
            fontWeight: "bold",
            fontVariantCaps: "titling-caps",
            ml: "-1",
            mr: "6",
          })}
        >
          Stylus by Example
        </h2>
      </div>
      <div
        className={css({ flex: "1", display: { base: "none", md: "block" } })}
      >
        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={css({
                    display: "flex",
                    h: "full",
                    w: "full",
                    userSelect: "none",
                    flexDirection: "column",
                    justifyContent: "center",
                    rounded: "md",
                    bgGradient: "to-b",
                    gradientFromAlpha: "muted/50",
                    gradientToAlpha: "muted",
                    p: "2",
                    textDecoration: "none",
                    outline: "none",
                    _focus: {
                      shadow: "md",
                    },
                  })}
                >
                  Linnnk
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div
        className={hstack({
          pr: "8px",
          justify: "flex-end",
          flex: { base: "1", md: "0" },
        })}
      >
        <ModeToggle />

        <Sheet>
          <SheetTrigger
            className={flex({
              w: "36px",
              h: "36px",
              px: "0",
              userSelect: "none",
              align: "center",
              justifyContent: "center",
              rounded: "md",
              bgGradient: "to-b",
              gradientFromAlpha: "muted/50",
              gradientToAlpha: "muted",
              p: "2",
              textDecoration: "none",
              outline: "none",
              cursor: "pointer",
              bgColor: { _light: "pink.300" },
              borderStyle: "revert-layer",
              color: { _light: "pink.400" },
              borderColor: { _light: "pink.300", _dark: "stone.800" },
              borderWidth: "1px",
              display: { base: "flex", md: "none" },
              _focus: {
                shadow: "md",
              },
            })}
          >
            <HamburgerMenuIcon
              className={css({
                h: "24px",
                w: "24px",
              })}
            />
          </SheetTrigger>
          <SheetContent className={css({ p: "0" })}>
            <div
              className={stack({
                pt: "4",
                px: "2",
                pb: "24",
                gap: "0",
              })}
            >
              <h2
                className={css({
                  fontSize: "lg",
                  fontWeight: "bold",
                  mb: "1",
                  px: "4",
                })}
              >
                Basic
              </h2>
              <Stack gap={1}>
                {basicExamples?.map(({ route, title }, i) => (
                  <Button
                    asChild
                    key={`${title}-${i}`}
                    variant="link"
                    size="lg"
                    className={css({
                      w: "full",
                      justifyContent: "flex-start",
                      fontWeight: "normal",
                      h: "32px",
                      paddingInline: "16px",
                    })}
                  >
                    <SheetClose asChild>
                      <Link href={route}>{title}</Link>
                    </SheetClose>
                  </Button>
                ))}
              </Stack>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
