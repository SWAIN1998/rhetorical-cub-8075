import React from "react";
import { Box, VStack, Flex , Image,Text ,Button   } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export const Checkout = () => {
  return (
    <VStack w="100%" mt="1.5rem" pr="1rem" pl="1rem" borderRadius="20px" boxShadow='md' backgroundColor="#fff" >
      <Flex w="100%" direction={["column","column","row"]}>
        <Flex w={["100%","100%","50%"]} direction="column"  ml="1rem" mr="1rem">
                <Box p="0.5rem" w="100%">
                    <Flex gap="5px">
                        <Box>
                            <Image h="20px" w="20px" src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" alt="" />
                        </Box> 
                        <Box >
                            <Flex fontSize="13px"> <Box textDecoration="underline">Pric</Box> <Box>e Details</Box> </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box backgroundColor="white" borderRadius="0.25rem" w="100%" lineHeight="0px" pr="15px" pl="15px">
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex justifyContent="space-between" fontSize="13px" w="100%">
                            <Flex gap="5px"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" alt="" />
                                </Box>    
                                <Box>
                                    Cart Sub Total:
                                </Box>
                            </Flex>
                            <Box>
                                <Box>₹ 5999</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex justifyContent="space-between" fontSize="13px" w="100%">
                            <Flex gap="5px"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg" alt="" />
                                </Box>    
                                <Box>
                                    Shipping Cost:
                                </Box>
                            </Flex>
                            <Box>
                                <Box>₹ 00.00</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex justifyContent="space-between" fontSize="13px" w="100%">
                            <Flex gap="5px"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/Discount.svg" alt="" />
                                </Box>    
                                <Box>
                                    Discount applied:
                                </Box>
                            </Flex>
                            <Box>
                                <Box>₹ 100.00</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box pt="0.5rem"  w="100%" pr="0.75rem" pl="0.75rem">
                        <Flex fontSize="13px" w="100%" wrap="wrap">
                            <Flex gap="5px" w="70%"> 
                                <Box>
                                    <Image w="15px" h="15px" src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg" alt="" />
                                </Box>    
                                <Box >
                                    Amount Payable:
                                </Box>
                            </Flex>
                            <Box w="30%" textAlign="right">
                                <Box>₹ 399.00</Box>
                            </Box>
                            <Box fontSize="10.5px" pr="1rem" pl="1rem">
                                <Box>
                                    Including ₹100 in Taxes
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            <Flex w="100%" mt="1rem" fontSize="14px" color="#575555"  justifyContent="space-between">
                <Flex gap="10px"> 
                    <Box>
                        <Image src='https://in.sugarcosmetics.com/desc-images/shopping_cart.svg' alt='' w="20px"/>
                    </Box>
                    Order Summary
                </Flex>
                <Box textDecoration="underline">Cart Total : Rs. 2796.00</Box>
            </Flex>
            {/* cart */}
            <Flex w="100%"  backgroundColor="#fff" direction="column">
                <Flex mt="0.5rem"  w="100%" backgroundColor="#fff">
                    <Box backgroundColor="#fff" h="110px" w="100%">
                        <Flex p="0.5rem" w="100%"> 
                            <Flex h="100px" w="60%" >
                                <Box w="25%"  p="5px 15px">
                                    <Image h="100%" w="100%" borderRadius="0.25rem" src='https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252' alt=''/>
                                </Box>
                                <Box w="70%">
                                    <Box fontSize="12px" fontWeight="550" color="#575555" textAlign="left" ml="5px" mt="5px">
                                        <Text mb="2px">Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</Text>
                                    </Box>
                                    <Flex ml="5px" textAlign="left" fontSize="10px" fontWeight="500" color="#575555" gap="5px">
                                        <Box>
                                        <Image h="15px" w="15px" borderRadius="0.25rem" src='https://in.sugarcosmetics.com/desc-images/Wishlist.svg' alt=''/>
                                        </Box>
                                        <Box>Save to Wishlist</Box>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Box w="40%" textAlign="right" mt="1.5rem" >               
                                <Flex fontSize="12px"  gap="20px">
                                        <Box  w="1em" h="1em" color="black" fontSize="16px" verticalAlign="middle"><MdDelete/></Box>
                                        <Flex justifyContent="space-around" gap="5px">
                                            <Box position="relative" borderRadius="50%" w="19px" h="19px" fontSize="18px" backgroundColor="black" color="white" >
                                                <Box fontSize="13px" w="100%" h="100%" position="absolute" pb="7px" pr="7px">-</Box>
                                            </Box>
                                            <Box>3</Box>
                                            <Box position="relative" borderRadius="50%" w="19px" h="19px" fontSize="18px" backgroundColor="black" color="white" >
                                                <Box fontSize="13px" w="100%" h="100%" position="absolute" pb="7px" pr="7px">+</Box>
                                            </Box>
                                        </Flex>
                                        <Flex>
                                            <Text textDecoration="underline" fontWeight="400" >3</Text>
                                            <Text>×</Text>
                                            <Text textDecoration="line-through" >1599=</Text>
                                            <Text color="#fc2779" >₹199</Text>
                                        </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
        <Flex w={["100%","100%","50%"]} direction="column" ml="1rem" mr="1rem"   >
            
            <Flex mt="1rem" >
                <Flex fontSize="13px" gap="5px" color="#575555">
                    <Image src="	https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg" alt="" verticalAlign="middle" w="20px" h="20px" /> <Box>Contact Information</Box> 
                </Flex>
            </Flex>
            <VStack backgroundColor="#faf9f9" borderRadius="10px" p="0.5rem" border="1px solid red" mt="5px">
                <Box w="100%" pr="0.5rem" pl="0.5rem">
                    <Flex w="100%" justifyContent="space-between" mt="0.25rem" mb="0.25rem">
                        <Flex>
                            <Text fontSize="13px" color="#6c757d">Full Name</Text>
                            <Text fontSize="14px" pl="0.25rem" fontWeight="bold" color="#6c757d">Haroon Qureshi</Text>
                        </Flex>
                        <Flex>
                            <Text fontSize="13px" color="#6c757d">Phone</Text>
                            <Text fontSize="14px" pl="0.25rem" fontWeight="bold" color="#6c757d">8529637410</Text>
                        </Flex>
                    </Flex>
                    <Flex>
                            <Text fontSize="13px" color="#6c757d">Email</Text>
                            <Text fontSize="14px" pl="0.25rem" fontWeight="bold" color="#6c757d">Haroon@gmail.com</Text>
                        </Flex>
                </Box>
                <Box w="100%" pr="0.5rem" pl="0.5rem" mt="0.25rem">
                    <Flex w="100%" justifyContent="space-between" mt="0.25rem" mb="0.25rem">
                        <Flex>
                            <Text fontSize="13px" fontWeight="450" color="#6c757d">Delivery Address</Text>
                        </Flex>
                        <Flex>
                            <Text pt="0.25rem" pb="0.25rem" fontSize="14px" backgroundColor="lightgray">+ Add New Address</Text>             
                        </Flex>
                    </Flex>
                </Box>
                {/* address */}
                <Box w="100%" backgroundColor="#fff" borderRadius="0.25rem" pr="1rem" pl="1rem" mt="0.5rem" mr="0.25rem" ml="0.2.5rem" overflowX="hidden">
                    <Box w="100%" fontSize="14px" fontWeight="450">
                        <Text>Haroon Qureshi</Text>
                        <Text>8055674750</Text>
                        <Text>Nagpur</Text>
                        <Text>Maharashtra India</Text>
                    </Box>
                </Box>
                <Box pt="0.5rem" pb="0.5rem" mt="1rem" mb="1rem" w="100%" >
                    <Flex w="100%">
                        <Flex w="30%" border="1px solid #dee2eb" fontsize="13px">
                            <Flex w="100%" pt="0.5rem" pr="1rem" pl="1rem">
                                <Box>
                                    <IoIosArrowBack/>
                                </Box>
                                <Box textDecoration="underline" fontSize="13px" pr="0.25rem" pl="0.25rem">Offers and Pricing</Box>
                            </Flex>
                        </Flex>
                        <Flex w="70%">
                            <Button w="100%" fontWeight="450" fontSize="13px" color="#fff" pt="0.5rem" pb="0.5rem" backgroundColor="#212529" >
                                Proceed To Payment(399)
                                </Button>
                        </Flex>
                    </Flex>
                </Box>
                
            </VStack>

        </Flex>
      </Flex>
    </VStack>
  );
};
