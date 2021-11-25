import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Nicholas Nascimento</Text>
        <Text color="gray.300" fontSize="small">
          nicholas.an99@gmail.com
        </Text>
      </Box>
      ) }

      <Avatar
        size="md"
        name="Nicholas Nascimento"
        src="http://github.com/NicholasNascimento.png"
      />
    </Flex>
  );
}
