import {
    ChakraProvider,
    Box,
    Flex,
    Text,
    Link,
    IconButton,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
  
  import { 
    HamburgerIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
    QuestionOutlineIcon,
    InfoOutlineIcon
 } from '@chakra-ui/icons';
  
  const Navbar = () => {
    return (
     <>
     <Menu m={'50%'}>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    maxW={'20%'}
    align={'center'}
    justify={'center'}
  />
  <MenuList>
    <MenuItem icon={<InfoOutlineIcon />} >
     Home
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />}>
      Products
    </MenuItem>
    <MenuItem icon={<QuestionOutlineIcon />} >
      F.A.Q
    </MenuItem>
    <MenuItem icon={<InfoOutlineIcon />}>
      Contact Us
    </MenuItem>
  </MenuList>
</Menu>
     </>
    );
  };
  
  export default Navbar;
  