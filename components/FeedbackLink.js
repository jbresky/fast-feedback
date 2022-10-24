import { Flex, Link } from '@chakra-ui/react';

export default function FeedbackLink({ siteId }) {
    return (
        <Flex justifyContent='space-between' mb={8} width='full' mt={1}>
            <Link fontWeight='bold' fontSize='sm' href={`/p/${siteId}`}>
                Leave a comment 
            </Link>
            <Link fontSize='sm' color='blackAlpha.500' href='/'>
                Leave a comment 
            </Link>
        </Flex>
    )
}