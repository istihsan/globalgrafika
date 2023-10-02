import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
  } from '@chakra-ui/react'
  import {
    FiHome,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
    FiArchive,
    FiShoppingBag,
    FiTruck,
  } from 'react-icons/fi'
  import { IconType } from 'react-icons'
import React from 'react'
  
  interface LinkItemProps {
    name: string
    icon: IconType
  }
  
  interface NavItemProps extends FlexProps {
    icon: IconType
    children: React.ReactNode
  }
  
  interface MobileProps extends FlexProps {
    onOpen: () => void
  }
  
  interface SidebarProps extends BoxProps {
    onClose: () => void
  }
  
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiHome },
    { name: 'Penjualan', icon: FiShoppingBag },
    { name: 'Pembelian', icon: FiTruck },
    { name: 'Stock', icon: FiArchive },
    { name: 'Settings', icon: FiSettings },
  ]
  
  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
        transition="3s ease"
        bgGradient="linear(to-t, #47B6FA, #E0F3FF, #E0F3FF, #E0F3FF, #FFFFFF)"
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="staatliches">
            Logo
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} fontFamily={'monospace'}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    )
  }
  
  const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
      <Box
        as="a"
        href="#"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    )
  }
  
  const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bgGradient="linear(to-l, #47B6FA, #E0F3FF, #E0F3FF, #E0F3FF, #FFFFFF)"
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold">
          Logo
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">Istihsan Bismo</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    )
  }
  
  const DashboardNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* Content */}
        </Box>
      </Box>
    )
  }
  
  export default DashboardNav;